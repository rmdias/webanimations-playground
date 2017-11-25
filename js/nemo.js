const fishInWaves1 = document.querySelector('.fish1');
const fishInWaves2 = document.querySelector('.fish2');
const waves = document.querySelectorAll('.sea--waves')

// small fishes in waves
let fish1SwimingYmoves = fishInWaves1.animate(AnimationsKeyframes.FishKeyframes.swimingYmoves, {
  duration: 5000,
  iterations: Infinity,
  fill: 'forwards'  
});

let fish1SwimingXmoves = fishInWaves1.animate(AnimationsKeyframes.FishKeyframes.fish1SwimingXmoves, {
  duration: 20000,
  fill: 'forwards'
});

fish1SwimingXmoves.onfinish = () => {
  flipFish(fishInWaves1);
  fish1SwimingXmoves.reverse();
}

let fish2SwimingYmoves = fishInWaves2.animate(AnimationsKeyframes.FishKeyframes.swimingYmoves, {
  duration: 5000,
  iterations: Infinity,
  fill: 'forwards'  
});

let fish2SwimingXmoves = fishInWaves2.animate(AnimationsKeyframes.FishKeyframes.fish2SwimingXmoves, {
  duration: 20000,
  fill: 'forwards'
});

fish2SwimingXmoves.onfinish = () => {
  flipFish(fishInWaves2);
  fish2SwimingXmoves.reverse();
}


// random waves animation
for (let index = 0; index < waves.length; index++) {
  const wave = waves[index];
  const waveDelay = getRandomDelay(-1000, 1000)

  let seaYKeyframes = wave.animate(AnimationsKeyframes.FishKeyframes.seaYKeyframes, {
    duration: 3000,
    fill: 'forwards',
    iterations: Infinity,
    delay: waveDelay
  });
  
  let seaXKeyframes = wave.animate(AnimationsKeyframes.FishKeyframes.seaXKeyframes, {
    duration: 3000,
    fill: 'forwards',
    iterations: Infinity,
    delay: waveDelay    
  });
}


function flipFish(fishContainer) {
  let fish = fishContainer.getElementsByTagName('svg')[0];

  if (fish.style.transform === '') fish.style.transform = 'scaleX(-1)';
  else fish.style.transform = '';
}

function getRandomDelay(min, max) {
  return Math.random() * (max - min) + min;
}