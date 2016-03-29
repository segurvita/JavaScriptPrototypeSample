//-----------------------------------------------------------
//prototype��new�𗘗p
//	�o�[�W�����FEcmaScript1�ȍ~
//-----------------------------------------------------------

//�v���g�^�C�v�I�u�W�F�N�g��`�i�N���X�̖��������I�u�W�F�N�g�j
var pDog = {
	//�����o�ϐ��̖��������I�u�W�F�N�g�v���p�e�B
	name : '',
	
	//���\�b�h�̖��������I�u�W�F�N�g�v���p�e�B
	noise : function () {
		console.log( this.name + '�̓����Ɩi���܂���' );
	}
};

//�R���X�g���N�^�֐���`
function Dog(name) {
	//�����o�ϐ��ɑ��
	this.name = name;
}

//�R���X�g���N�^�֐��ƃv���g�^�C�v�I�u�W�F�N�g���֘A�t��
Dog.prototype = pDog;

//�C���X�^���X��
var dog1 = new Dog("��1");
var dog2 = new Dog("��2");

//���\�b�h�Ăяo��
dog1.noise();
dog2.noise();

//-----------------------------------------------------------
//ECMAScript5	Object.create
//-----------------------------------------------------------

//�v���g�^�C�v�I�u�W�F�N�g��`�i�N���X�̖��������I�u�W�F�N�g�j
var Bird = {
	//�����o�ϐ��̖��������I�u�W�F�N�g�v���p�e�B
	name : '',
	
	//���\�b�h�̖��������I�u�W�F�N�g�v���p�e�B
	noise : function () {
		console.log( this.name + '�̓`�����Ɩ��܂���' );
	}
};

//�C���X�^���X��
var bird1 = Object.create(
	Bird,
	{
		name : { value : "��1" }
	}
);
var bird2 = Object.create(
	Bird,
	{
		name : { value : "��2" }
	}
);

//�֐����p
bird1.noise();
bird2.noise();

//-----------------------------------------------------------
//ECMAScript6	class
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

