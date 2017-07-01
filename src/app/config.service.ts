import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }
  
  // 句読点を、直前の単位の末尾に結合させるフラグ
  isPointInPrev: boolean = true;
  // 接頭詞を、次の単位の先頭に結合させるフラグ
  //isPrefixInAfter: boolean = true;
  // 助詞を、直前の単位の末尾に結合させるフラグ
  isParticleInPrev: boolean = true;
  // 助動詞を、直前の単位の末尾に結合させるフラグ
  isAuxiliaryVerbInPrev: boolean = true;
  // 名詞（接尾）を、直前の単位の末尾に結合させるフラグ
  isNounSuffixInPrev: boolean = true;
  // 動詞（接尾）を、直前の単位の末尾に結合させるフラグ
  isVerbSuffixInPrev: boolean = true;
  // 動詞（非自立）を、直前の単位の末尾に結合させるフラグ
  isVerbNonSelfRelianceInPrev: boolean = true;
  // 連体詞を、次の単位の先頭に結合させるフラグ
  //isAdnominalInPrev: boolean = true;
  // 数字
  // 
  // 表示更新間隔（ミリ秒）
  replacementSpan: number = 300;
  // 結合するサイズ（byte）
  joinUnit: number = 16;
  // 開発者モード
  isDevMode: boolean = false;
  
  clone(){
    let conf = new ConfigService();
    conf.isPointInPrev = this.isPointInPrev;
    conf.isParticleInPrev = this.isParticleInPrev;
    conf.isAuxiliaryVerbInPrev = this.isAuxiliaryVerbInPrev;
    conf.isNounSuffixInPrev = this.isNounSuffixInPrev;
    conf.isVerbSuffixInPrev = this.isVerbSuffixInPrev;
    conf.isVerbNonSelfRelianceInPrev = this.isVerbNonSelfRelianceInPrev;

    conf.replacementSpan = this.replacementSpan;
    conf.joinUnit = this.joinUnit;
    conf.isDevMode = this.isDevMode;
    return conf;
  }
  save(conf: ConfigService){
    this.isPointInPrev = conf.isPointInPrev;
    this.isParticleInPrev = conf.isParticleInPrev;
    this.isAuxiliaryVerbInPrev = conf.isAuxiliaryVerbInPrev;
    this.isNounSuffixInPrev = conf.isNounSuffixInPrev;
    this.isVerbSuffixInPrev = conf.isVerbSuffixInPrev;
    this.isVerbNonSelfRelianceInPrev = conf.isVerbNonSelfRelianceInPrev;

    this.replacementSpan = conf.replacementSpan;
    this.joinUnit = conf.joinUnit;
    this.isDevMode = conf.isDevMode;
  }
}
