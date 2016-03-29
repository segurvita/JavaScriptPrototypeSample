//-----------------------------------------------------------
//class利用
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

//-----------------------------------------------------------
//prototype利用
//-----------------------------------------------------------

//プロトタイプオブジェクト定義
var protoDog = {
	name : '',
	noise : function () {
		console.log( this.name + 'はワンと吠えました' )
	}
};

//コンストラクタ関数定義
function Dog(name) {
	this.name = name
}
Dog.prototype = protoDog;

//インスタンス化
var dog1 = new Dog("犬1");
var dog2 = new Dog("犬2");

//関数利用
dog1.noise();
dog2.noise();

//-----------------------------------------------------------
//Object.create()利用
//-----------------------------------------------------------

//プロトタイプオブジェクト定義
var Bird = {
	name : '',
	noise : function () {
		console.log( this.name + 'はチュンと鳴きました' )
	}
};

//インスタンス化
var bird1 = Object.create(Bird, {name: {value: "鳥1"}});
var bird2 = Object.create(Bird, {name: {value: "鳥2"}});

//関数利用
bird1.noise();
bird2.noise();