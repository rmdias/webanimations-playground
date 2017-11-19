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
let snoopWakeupBtn = document.querySelector('#dog-wakeup');

snoopSleepBtn.addEventListener('click', snoopSleepingAnimation);
snoopWakeupBtn.addEventListener('click', snoopWakeupAnimation);

function snoopSleepingAnimation() {
  if (isSnoopAwake()) {
    sleepyEyes.animate(AnimationsKeyframes.wakeupKeyframes, {
      duration: 500,
      fill: 'forwards'
    });

    awakeEyes.animate(AnimationsKeyframes.sleepKeyframes, {
      duration: 500,
      fill: 'forwards',
    });

    snoopTailAnimation.pause();
  }
};

function snoopWakeupAnimation() {
  if (!isSnoopAwake()) {  
    sleepyEyes.animate(AnimationsKeyframes.sleepKeyframes, {
      duration: 500,
      fill: 'forwards'
    });

    awakeEyes.animate(AnimationsKeyframes.wakeupKeyframes, {
      duration: 500,
      fill: 'forwards',
    });
    
    snoopTailAnimation.play();
  }
};
