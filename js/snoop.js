const snoopTheDog = document.querySelector('#snoop');

let snoopTail = document.querySelector('#tail');
let tailShakeOptions = {
  duration: 500,
  iterations: Infinity
};

let snoopTailAnimation = snoopTail.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(20deg)' },
  { transform: 'rotate(0deg)' }
 ], tailShakeOptions);

// sleep
let sleepyEyes = document.querySelector('#sleepy-eyes');
let awakeEyes = document.querySelector('#awake-eyes');

let snoopHead = document.querySelector('#head');

snoopHead.addEventListener('click', handleSnoopRest);

// clouds
let cloud1 = document.querySelector('#dog-cloud1');
let cloud2 = document.querySelector('#dog-cloud2');

let cloudAnimationXOptions = {
  duration: 40000,
  iterations: Infinity
};

let cloudAnimationYOptions = {
  duration: 2000,
  iterations: Infinity
};

let cloudAnimationX = cloud1.animate([
  { transform: 'translateX(0)' },
  { transform: 'translateX(95%)' },
  { transform: 'translateX(0)' }
], cloudAnimationXOptions);

let cloudAnimationY = cloud1.animate([
  { marginTop: 0 },
  { marginTop: '2px' },
  { marginTop: 0 }
], cloudAnimationYOptions);

let cloud2AnimationX = cloud2.animate([
 { transform: 'translateX(95%)' },
 { transform: 'translateX(0)' },
 { transform: 'translateX(95%)' }
], cloudAnimationXOptions);


// eyes animations
let hideEyesKeyframes = [
  { opacity: '1' },
  { opacity: '0' }
];
let showEyesKeyframes = [
  { opacity: '0' },
  { opacity: '1' }
];

let eyesAnimationOptions = {
  duration: 500,
  fill: 'forwards'
};

function handleSnoopRest() {
  if (isSnoopAwake()) {
    snoopSleepingAnimation();
  } else {
    snoopWakeupAnimation();
  }
}

function isSnoopAwake() {
  return snoopTailAnimation.playState !== 'paused';
}

function snoopSleepingAnimation() {
  awakeEyes.animate(hideEyesKeyframes, eyesAnimationOptions);
  sleepyEyes.animate(showEyesKeyframes, eyesAnimationOptions);
  snoopTailAnimation.pause();
};

function snoopWakeupAnimation() {
  sleepyEyes.animate(hideEyesKeyframes, eyesAnimationOptions);
  awakeEyes.animate(showEyesKeyframes, eyesAnimationOptions);
  snoopTailAnimation.play();
};