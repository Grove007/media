var minSize=5;
var maxSize=60;
var newOn=100;//下雪快慢毫秒
var flakeColor="#fff";
//var flake = $("<div></div>").css({"position":"absolute","top":"-50px"}).html("*");
// var add=["*",""];
// var ran=Math.random()*add.length;
//     num=parseInt(ran);
var flake = $("<div></div>").css({"position":"absolute","top":"-50px"}).html("❉");//❉
$(function(){
  var documentHeight =$(document).height();
  var documentWidth =$(document).width();
  setInterval(function(){
    var startPositionLeft = Math.random()*documentWidth;
    var startOpacity = 0.7+Math.random()*0.3;
    var endPositionTop = documentHeight;
    var endPositionLeft = Math.random()*documentWidth;
    var durationFall = 4000+Math.random()*3000;
    var sizeFlake = minSize+Math.random()*maxSize;
    flake.clone().appendTo("body").css({
      "left":startPositionLeft,
      "opacity":startOpacity,
      "font-size":sizeFlake,
      "color":flakeColor
    }).animate({
      "top":endPositionTop,
      "left":endPositionLeft,
      "opacity":0.5
    },durationFall,function(){$(this).remove();})
  },newOn);
});