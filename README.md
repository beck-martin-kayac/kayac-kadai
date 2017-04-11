# kayac-kadai

## JS(ES6)を使ったクラスの勉強  

### 1. カウンターを作る 
![image](https://cloud.githubusercontent.com/assets/1800369/22722336/a4c6da58-edf9-11e6-831b-9f8c161941f6.png)

- ファイルを分ける index.jsとCounter.js 
- constructor 
- クラスメソッド 
- クラス変数 
- インスタンス化  

### 2. カウンターを量産する 
![image](https://cloud.githubusercontent.com/assets/1800369/22722341/aca18bba-edf9-11e6-85f2-b4f3f42de64a.png)  

### 3. カウンターを継承して挙動を変える 
![image](https://cloud.githubusercontent.com/assets/1800369/22722346/b23ec7b8-edf9-11e6-9113-176e642c5c83.png) 
- オレンジ → ターボカウンター 10ずつカウント 
- 赤 → ウルトラターボカウンター 10, 100, 1000, 10000…と10の二乗ずつカウント 
- 継承とメソッドのオーバーライド  

### 4. EventEmitter（EventDispatcher）を使ってみる 
![image](https://cloud.githubusercontent.com/assets/1800369/22722350/b6a87b14-edf9-11e6-9e83-45137962c2d7.png) 

- EventEmitterを継承させてemitとaddEventListenerを使う 
- 最大値10に達したらメッセージ表示 
- それ以上カウントできない http://qiita.com/SFPGMR/items/6cc911745d27cc896562  

### 5. 1〜4の知見を利用してカルーセルを作ってみる http://kenwheeler.github.io/slick/ slickのSingle Itemと同じ仕様のものを目指す
