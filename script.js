//-----------------------------------------------------------
//prototypeとnewを利用
//	バージョン：EcmaScript1以降
//-----------------------------------------------------------

//プロトタイプオブジェクト定義（クラスの役割をもつオブジェクト）
var pDog = {
	//メンバ変数の役割を持つオブジェクトプロパティ
	name : '',
	
	//メソッドの役割を持つオブジェクトプロパティ
	noise : function () {
		console.log( this.name + 'はワンと吠えました' );
	}
};

//コンストラクタ関数定義
function Dog(name) {
	//メンバ変数に代入
	this.name = name;
}

//コンストラクタ関数とプロトタイプオブジェクトを関連付け
Dog.prototype = pDog;

//インスタンス化
var dog1 = new Dog("犬1");
var dog2 = new Dog("犬2");

//メソッド呼び出し
dog1.noise();
dog2.noise();

//-----------------------------------------------------------
//ECMAScript5	Object.create
//-----------------------------------------------------------

//プロトタイプオブジェクト定義（クラスの役割をもつオブジェクト）
var Bird = {
	//メンバ変数の役割を持つオブジェクトプロパティ
	name : '',
	
	//メソッドの役割を持つオブジェクトプロパティ
	noise : function () {
		console.log( this.name + 'はチュンと鳴きました' );
	}
};

//インスタンス化
var bird1 = Object.create(
	Bird,
	{
		name : { value : "鳥1" }
	}
);
var bird2 = Object.create(
	Bird,
	{
		name : { value : "鳥2" }
	}
);

//関数利用
bird1.noise();
bird2.noise();

//-----------------------------------------------------------
//ECMAScript6	class
//-----------------------------------------------------------

//クラス定義
class Cat {
	constructor(name) {
		this.name = name
	}
	noise() {
    	console.log( this.name + 'はミャオと鳴きました' )
	}
}

//インスタンス化
var cat1 = new Cat("猫1");
var cat2 = new Cat("猫2");

//関数利用
cat1.noise();
cat2.noise();

