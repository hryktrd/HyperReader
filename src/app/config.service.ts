import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }
  
  // 句読点を、直前の単位の末尾に結合させるフラグ
  isPointInPrev: boolean = true;
  // 表示更新間隔（ミリ秒）
  replacementSpan: number = 300;
  // 結合するサイズ（byte）
  joinUnit: number = 17;
  
  clone(){
    let conf = new ConfigService();
    conf.isPointInPrev = this.isPointInPrev;
    conf.replacementSpan = this.replacementSpan;
    conf.joinUnit = this.joinUnit;
    return conf;
  }
  save(conf: ConfigService){
    this.isPointInPrev = conf.isPointInPrev;
    this.replacementSpan = conf.replacementSpan;
    this.joinUnit = conf.joinUnit;
  }
}
