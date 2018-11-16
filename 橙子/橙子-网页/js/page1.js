
//��װһ��document.getElementById�ķ���
function byId(id){
    return typeof (id==="string")?document.getElementById(id):id
}

console.log(banner)
var timer=null;
var index=0;
var len=byId("divImg").getElementsByTagName("div").length;
var div=byId("divImg").getElementsByTagName("div");
var dots=byId("dots").getElementsByTagName("span");
var prev=byId("prev");
var next=byId("next");
function divImg(){
    //����Ƴ�
    banner.onmouseout=function(){
        timer=setInterval(function(){
            index++;
            if(index>=len){//����index�����ȴ���ͼƬ����
                index=0
            }
            changeImg()//�ֲ��������
        },1000);
    };
    banner.onmouseout();//ֱ�ӵ���onmouseout����
    //��꾭��
    banner.onmouseover=function(){
        clearInterval(timer)
    };

    //Բ�㰴ť
    for(var i=0;i<len;i++){
        dots[i].id=i;
        dots[i].onclick=function(){
           index=this.id;
            changeImg()
        }
    }


    //��һ�ź���һ�Ű�ť
    next.onclick=function(){
        index++;
        if(index>=len){
            index=0
        }
        changeImg()
    };

    prev.onclick=function(){
        index--;
        if(index<0){
            index=len-1
        }
        changeImg()
    }
    
}

function changeImg(){
    for(var i=0;i<len;i++){
        div[i].style.display="none";//��������div����
        dots[i].style.backgroundColor="gray"
    }
    div[index].style.display="block";//��������div���index�ı仯������ʾ
    dots[index].style.backgroundColor="wheat"
}

divImg();

    function musicplay() {
	var music = document.getElementById('music1');
	if(music.paused) {
		music.play();
		document.getElementById("bofang").innerHTML = "";
	} else {
		music.pause();
		document.getElementById("bofang").innerHTML = "";
	}
}

function musicplay1() {
	var music = document.getElementById('music2');
	if(music.paused) {
		music.play();
		document.getElementById("bofang1").innerHTML = "";
	} else {
		music.pause();
		document.getElementById("bofang1").innerHTML = "";
	}
}

function musicplay2() {
	var music = document.getElementById('music3');
	if(music.paused) {
		music.play();
		document.getElementById("bofang2").innerHTML = "";
	} else {
		music.pause();
		document.getElementById("bofang2").innerHTML = "";
	}
}

function musicplay3() {
	var music = document.getElementById('music4');
	if(music.paused) {
		music.play();
		document.getElementById("bofang3").innerHTML = "";
	} else {
		music.pause();
		document.getElementById("bofang3").innerHTML = "";
	}
}

function musicplay4() {
	var music = document.getElementById('music5');
	if(music.paused) {
		music.play();
		document.getElementById("bofang4").innerHTML = "";
	} else {
		music.pause();
		document.getElementById("bofang4").innerHTML = "";
	}
}

function musicplay5() {
	var music = document.getElementById('music6');
	if(music.paused) {
		music.play();
		document.getElementById("bofang5").innerHTML = "";
	} else {
		music.pause();
		document.getElementById("bofang5").innerHTML = "";
	}
}

function musicplay6() {
	var music = document.getElementById('music7');
	if(music.paused) {
		music.play();
		document.getElementById("bofang6").innerHTML = "";
	} else {
		music.pause();
		document.getElementById("bofang6").innerHTML = "";
	}
}

function musicplay7() {
	var music = document.getElementById('music8');
	if(music.paused) {
		music.play();
		document.getElementById("bofang7").innerHTML = "";
	} else {
		music.pause();
		document.getElementById("bofang7").innerHTML = "";
	}
}