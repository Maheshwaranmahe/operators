
function add() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  c=a+b;
  document.getElementById("addition").textContent = c;
}
function sub() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  c=a-b;
  document.getElementById("subration").innerHTML= c;
}
function multi() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  c=a*b;
  document.getElementById("multiplication").innerHTML= c;
}
function div() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  c=a/b;
  document.getElementById("division").innerHTML= c;
}
function mod() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  c=a%b;
  document.getElementById("modulus").innerHTML= c;
}
function increment() {
  var a = parseInt(document.getElementById("a").value);
  a++;
  document.getElementById("increment").innerHTML= "increment="+ a;
}
function decrement() {
  var b = parseInt(document.getElementById("b").value);
  b--;
  document.getElementById("decrement").innerHTML= "decrement="+ b;
}



function assign() {
  var a = parseInt(document.getElementById("a").value);
  a=a;
  document.getElementById("assign").innerHTML="a="+ a;
}
function addassign() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  a+=b;
  document.getElementById("addassign").innerHTML="a="+ a;
}
function subassign() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  a-=b;
  document.getElementById("subassign").innerHTML="a="+ a;
}
function multiplyassign() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  a*=b;
  document.getElementById("multiplyassign").innerHTML="a="+ a;
}
function divassign() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  a/=b;
  document.getElementById("divassign").innerHTML="a="+ a;
}
function modassign() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  a%=b;
  document.getElementById("modassign").innerHTML="a="+ a;
}

function equal() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  if(a==b){
    document.getElementById("equal").innerHTML="a and b are equal";
  }
}
function notequal() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  if(a!=b){
    document.getElementById("notequal").innerHTML="a and b are notequal";
  }
}
function greater() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  if(a>b){
    document.getElementById("greater").innerHTML="a is greater than b";
  }
}
function lessthan() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  if(a<b){
    document.getElementById("lessthan").innerHTML="a is less than b";
  }
}



function and() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  if(a<5 && b>10){
    document.getElementById("and").innerHTML="true";
  }
  else{
    document.getElementById("and").innerHTML="false";
  }
}
function or() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  if(a<5 || b>6){
    document.getElementById("or").innerHTML="true";
  }
}
function not() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  if (!(a==b)){
    document.getElementById("not").innerHTML="true";
  }
}