//-----------------------------------------------------------
//class���p
//-----------------------------------------------------------

//�N���X��`
class Cat {
	constructor(name) {
		this.name = name
	}
	noise() {
    	console.log( this.name + '�̓~���I�Ɩ��܂���' )
	}
}

//�C���X�^���X��
var cat1 = new Cat("�L1");
var cat2 = new Cat("�L2");

//�֐����p
cat1.noise();
cat2.noise();

//-----------------------------------------------------------
//prototype���p
//-----------------------------------------------------------

//�v���g�^�C�v�I�u�W�F�N�g��`
var protoDog = {
	name : '',
	noise : function () {
		console.log( this.name + '�̓����Ɩi���܂���' )
	}
};

//�R���X�g���N�^�֐���`
function Dog(name) {
	this.name = name
}
Dog.prototype = protoDog;

//�C���X�^���X��
var dog1 = new Dog("��1");
var dog2 = new Dog("��2");

//�֐����p
dog1.noise();
dog2.noise();

//-----------------------------------------------------------
//Object.create()���p
//-----------------------------------------------------------

//�v���g�^�C�v�I�u�W�F�N�g��`
var Bird = {
	name : '',
	noise : function () {
		console.log( this.name + '�̓`�����Ɩ��܂���' )
	}
};

//�C���X�^���X��
var bird1 = Object.create(Bird, {name: {value: "��1"}});
var bird2 = Object.create(Bird, {name: {value: "��2"}});

//�֐����p
bird1.noise();
bird2.noise();