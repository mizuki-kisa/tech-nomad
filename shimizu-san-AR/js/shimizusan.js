const list = ["aaa","bbb","ccc","ddd","eee","fff","ggg"];
const imgList = ["01.png","02.png","03.png"];
var count = 0;
var serifu, img;
console.log(list.length);

window.onload = function() {
  serifu = document.getElementById("serifu");
  img = document.getElementById("img");
  serifu.addEventListener("click",changeSerifu);
  changeSerifu();

}
window.setInterval(animation, 500);

function animation(){
  var currentImg = 'img/'+ imgList[count%imgList.length];
  img.setAttribute('src', currentImg);
  count ++ ;
}

function changeSerifu(){
  var number = Math.floor( Math.random() * list.length );
  serifu.children[0].innerHTML = list[number];
}
