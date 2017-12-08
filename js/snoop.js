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

// clouds
let cloud1 = document.querySelector('#dog-cloud1');
let cloud2 = document.querySelector('#dog-cloud2');

let cloudAnimationX = cloud1.animate(AnimationsKeyframes.cloudXKeyframes,{
  duration: 20000,
  iterations: Infinity
});

let cloudAnimationY = cloud1.animate(AnimationsKeyframes.cloudYKeyframes, {
  duration: 2000,
  iterations: Infinity
});

let cloud2AnimationX = cloud2.animate(AnimationsKeyframes.cloud2XKeyframes,{
  duration: 20000,
  iterations: Infinity  
});


function isSnoopAwake() {
  return snoopTailAnimation.playState !== 'paused';
}

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
