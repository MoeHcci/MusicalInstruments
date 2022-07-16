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
  var q = new Audio('Q_KnockingSubBass.mp3');
  q.play();}

// Option 2
function W() {
    new Audio('W_LosingDrums.mp3').play();
}

// Option 1
function E() {
  var e = new Audio('E_TribalDrumEchos.mp3');
  e.play();
}

// Option 1
function R() {
  var r = new Audio('R_FailDrumAndBells.mp3');
  r.play();

}

// Option 1
function T() {
  var t = new Audio('TJokesDrums.mp3');
  t.play();
}

// Option 1
function Y() {
  var y = new Audio('YDeepDarkHorrorDrum.mp3');
  y.play();
}

// Option 1
function U() {
  var u = new Audio('UFunnyCartoonTones.mp3');
  u.play();
}






document.getElementsByClassName("Q").style.backgroundImage=q.jpg;
