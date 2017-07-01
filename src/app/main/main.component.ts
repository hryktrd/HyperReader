import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-main',
  //templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  template: `
  <textarea [(ngModel)]="inputText" placeholder="入力欄" class="form-control" rows="3"></textarea><br>
      <div class="row">
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-heading"><h3 class="panel-title">panel</h3></div>
            <div class="panel-body">{{currentText}}</div>
          </div>
        </div>
      </div>
  <input type="button" value="start" id="btn-start" class="btn btn-primary" (click)="startClick()" >
  <input type="button" value="parse only" class="btn btn-warning" (click)="parseClick()" *ngIf="config.isDevMode"><br>
    <div class="row" *ngIf="config.isDevMode">
      <button *ngFor="let word of builtText" class="btn btn-default">{{word}}</button>
    </div>
  <div class="progress" *ngIf="showProgress">
    <div class="progress-bar" id="progressDownload" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valueMax="100" [style.width]="loadWidth">
      <span class="sr-only">complete</span>
    </div>
  </div>
  <div class="alert alert-info" role="alert" *ngIf="showLoaded">Library loaded.</div>
  `
})
export class MainComponent implements OnInit {

  constructor(private config: ConfigService) { }

  ngOnInit() {
    let btnStart = document.getElementById('btn-start');
    let progDL = document.getElementById('progressDownload');
    let numFormat = new Intl.NumberFormat('ja-JP', {maximumSignificantDigits:2});
    //btnStart.setAttribute('disabled', 'disabled');
    // mecab load
    window.addEventListener('mecab_loading', (event: ProgressEvent)=>{
      //console.log(event);
      this.showProgress = true;
      this.loadValue = event.loaded;
      this.loadMax = event.total;
      this.loadWidth = (event.loaded / event.total * 100).toString() + '%';
    },false);
    //window.addEventListener('mecab_loaded', function(event: Event){
    window.addEventListener('mecab_loaded', async (event: Event) => {
      this.isLoaded = true;
      //btnStart.removeAttribute('disabled');
      this.showLoaded = true;
      await sleep(2000);
      this.showProgress = false;
      this.showLoaded = false;
    },false);
  }

  inputText: string = `Angularは、Web技術でのアプリケーション構築を容易にするプラットフォームです。
  宣言的テンプレート、依存性注入、包括的なツール群や、統合されたベストプラクティスを組み合わせて、開発の課題を解決します。
  Angularは、Web、モバイル、またはデスクトップで動作するアプリケーションを構築できるようにします。
  `;
  isLoaded: boolean = false;
  showProgress: boolean = false;
  showLoaded: boolean = false;
  loadMax: number = 100;
  loadValue: number = 0;
  loadWidth: string = '0%';
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
      if(/^EOS/.test(line)){
        // End of Statement.
        word = '';
      }else if(this.bytes(tmp) + this.bytes(word) < this.config.joinUnit){
        // バイト長
        tmp += word;
      }else if(/記号,読点|記号,句点/.test(line)){
        if(this.config.isPointInPrev){
          // 句読点は末尾に結合
          tmp += word;
        }
      }else if(/\t助詞/.test(line)){
        if(this.config.isParticleInPrev){ tmp += word; }
      }else if(/\t助動詞/.test(line)){
        if(this.config.isAuxiliaryVerbInPrev){ tmp += word; }
      }else if(/名詞,接尾/.test(line)){
        if(this.config.isNounSuffixInPrev){ tmp += word; }
      }else if(/動詞,接尾/.test(line)){
        if(this.config.isVerbSuffixInPrev){ tmp += word; }
      }else if(/動詞,非自立/.test(line)){
        if(this.config.isVerbNonSelfRelianceInPrev){ tmp += word; }
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
