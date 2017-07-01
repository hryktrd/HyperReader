# HyperReader

HyperReader は、日本語の速読ツールです。  
眼球を動かさないことで速読を実現する[splitz](http://spritzinc.com/)というアプリケーションに影響を受けて、自分用に日本語向けを作成しました。  
本プロジェクトのプロダクトは、[Github Pages で公開](https://n-fukuju.github.io/HyperReader/)しています。  

## 日本語解析について
日本語の解析には、[MeCab](https://github.com/taku910/mecab)を使用しています。  
ただし、C++で実装されている本家のMeCabは、本プロダクト（Angular：TypeScript）から呼び出すことができないため、実際にはMeCabをJavaScriptにコンパイルしたものである [MeCab on the Web](https://github.com/fasiha/mecab-emscripten)を利用しています。  
本プロジェクトでは、MeCab on the Web をBSDライセンスで利用しています。  

## 通信量について
MeCab本体と辞書データで、50MB超のサイズがあります。従量課金のネットワークでの利用にはご注意ください。  

## ローカルで試す場合
```bash
git clone <repository>.git
cd <project>
npm install

npm install -g @angular/cli
ng serve --open
```

## ライセンス
BSD、またはMIT。
