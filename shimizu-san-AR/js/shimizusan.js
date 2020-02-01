const list = ["aaa","bbb","ccc","ddd","eee","fff","ggg"];
const imgList = ["01.png","02.png","03.png"];
const objList = ["#crate-obj1","#crate-obj2"];
const mtlList = ["#crate-mtl1","#crate-mtl2"];
var count = 0;
var serifu, img;
console.log(list.length);

window.onload = function() {
  serifu = document.getElementById("serifu");
  img = document.getElementById("model");
  png = document.getElementById("png");
  serifu.addEventListener("click",changeSerifu);
  changeSerifu();

}
window.setInterval(animation, 500);

function animation(){
  var currentImg = 'img/'+ imgList[count%imgList.length];
  //var currentObj = 'obj/'+ modelList[count%modelList.length];
  png.setAttribute('src', currentImg);
  img.setAttribute('src', objList[count%objList.length]);
  //img.setAttribute('mtl', mtlList[count%mtlList.length]);
  count ++ ;
}


function changeSerifu(){
  var number = Math.floor( Math.random() * list.length );
  serifu.children[0].innerHTML = list[number];
}
