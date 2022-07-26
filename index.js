// TESTING A RANDOM FUNCTION IF THE JS LOADS OR NOT
// function codeAddress() {
//             alert('Hello');
//         }
// window.onload = codeAddress;



// PLAYING RANDOM SOUNDS
// To play sound you can either write "new Audio" object with or without var. the play() is a method.:
// -Option 1: with a var
 // var audioo= new Audio('ominous-drums-appear.mp3').play();
//  audioo.play();
// -Option 2. without a var
// new Audio('ominous-drums-appear.mp3').play();
// -Note: the new Audio constrcutors (a function that initizlises an instance) is important



// Option 1
function Q() {
  var q = new Audio('QJokesDrums.mp3');
  q.play();



}

// Option 2
function W() {
    new Audio('Wpiano.mp3').play();
}

// Option 1
function E() {
  var e = new Audio('Eflute.mp3');
  e.play();
}

// Option 1
function R() {
  var r = new Audio('Rguitar.mp3');
  r.play();

}

// Option 1
function T() {
  var t = new Audio('Tviolin.mp3');
  t.play();
}

// Option 1
function Y() {
  var y = new Audio('Yharp.mp3');
  y.play();
}

// Option 1
function U() {
  var u = new Audio('Uharmonica.mp3');
  u.play();
}


// We may use x.key = "q" or x.keyCode="81".  The 81 covers the capital/lower letters
document.addEventListener("keydown", function(x)  {
  if (x.keyCode == "81" || x.keyCode == "81")
  new Audio('QJokesDrums.mp3').play();
  else if (x.key == "w" || x.key == "W")
  new Audio('Wpiano.mp3').play();
  else if (x.key == "e" || x.key == "E")
  new Audio('Eflute.mp3').play();
  else if (x.key == "r" || x.key == "R")
  new Audio('Rguitar.mp3').play();
  else if (x.key == "t" || x.key == "T")
  new Audio('Tviolin.mp3').play();
  else if (x.key == "y" || x.key == "Y")
  new Audio('Yharp.mp3').play();
  else if (x.key == "u" || x.key == "U")
  new Audio('Uharmonica.mp3').play();
});















//
// Notes:
// // This is a simple code that can tell us which key is pressed when we press anything on the keyboard
// // The while document is listening. Which is why we use document.addEventListener
// document.addEventListener("keydown", function(x)  {
//   console.log(x)
// });
