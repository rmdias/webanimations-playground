const snoopTheDog = document.querySelector('#snoop');
var snoopAwake = true;

let snoopTail = document.querySelector('#tail');
let tailShakeOptions = {
  duration: 500,
  iterations: Infinity
};

let snoopTailAnimation = snoopTail.animate(AnimationsKeyframes.tailShakeKeyframes, tailShakeOptions);

// sleep
let sleepyEyes = document.querySelector('#sleepy-eyes');
let awakeEyes = document.querySelector('#awake-eyes');

let snoopSleepBtn = document.querySelector('#dog-sleep');


snoopSleepBtn.addEventListener('click', snoopSleepingAnimation);

