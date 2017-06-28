import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-main',
  //templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  template: `
  <textarea [(ngModel)]="inputText" placeholder="入力欄" class="form-control" rows="3"></textarea><br>
  <!--<label>{{currentText}}</label><br>-->
      <div class="row">
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-heading"><h3 class="panel-title">panel</h3></div>
            <div class="panel-body">{{currentText}}</div>
          </div>
        </div>
      </div>
  <input type="button" value="start" class="btn btn-default" (click)="startClick()" ><br>
  <!--<input type="button" value="parse only" class="btn btn-default" (click)="parseClick()" ><br>
    <div class="row">
      <button *ngFor="let word of builtText" class="btn btn-default">{{word}}</button>
    </div>-->
  `
})
export class MainComponent implements OnInit {

  constructor(private config: ConfigService) { }

  ngOnInit() {
  }

  inputText: string = `Angularは、Web技術でのアプリケーション構築を容易にするプラットフォームです。
  宣言的テンプレート、依存性注入、包括的なツール群や、統合されたベストプラクティスを組み合わせて、開発の課題を解決します。
  Angularは、Web、モバイル、またはデスクトップで動作するアプリケーションを構築できるようにします。
  `;
  analyzedText: string;
  builtText: string[];
  currentText: string;
  parseClick(){
    this.parse();
  }
  async startClick(){
    if(toAnalyze){console.log("found.")}else{console.log("not found.");}
    // 入力テキストの解析
    this.parse();
    // 表示更新
    let i:number = 0;
    for(let text of this.builtText){
      this.currentText = text;
      await sleep(this.config.replacementSpan);
    }
    this.currentText = '<おしまい>';
  }
  bytes(str:string):number{
    return(encodeURIComponent(str).replace(/%../g,"x").length);
  }
  parse(){
    // mecab で解析
    this.analyzedText = toAnalyze(this.inputText);
    let tmp: string = '';
    let word: string = '';
    let i: number = 0;
    let point: string[] = ['、','。'];
    this.builtText = [tmp];
    // 解析結果の形態素を、適当な長さにまとめる。
    for(let line of this.analyzedText.split('\n')){
      word = line.split('\t')[0];
      if(word.startsWith('EOS')){
        // End of Statement.
        word = '';
      }else if(this.bytes(tmp) + this.bytes(word) < this.config.joinUnit){
        // 17バイトで制限（暫定）
        tmp += word;
      }else if(point.indexOf(word) >= 0){
        if(this.config.isPointInPrev){
          // 句読点は末尾に結合
          tmp += word;
        }
      }else{
        i += 1;
        tmp = word;
        this.builtText.push('');
      }
      this.builtText[i] = tmp;
    }
  }
}

function sleep(msec):Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, msec);
  });
}
