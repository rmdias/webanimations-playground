const AnimationsKeyframes = {
  tailShakeKeyframes: [
    {transform: 'rotate(0deg)'},
    {transform: 'rotate(20deg)'},
    {transform: 'rotate(0deg)'}
  ],
  wakeupKeyframes: [
    {opacity: '0'},
    {opacity: '1'}
  ],
  sleepKeyframes: [
    {opacity: '1'},
    {opacity: '0'}
  ],
  cloudXKeyframes: [
    {transform: 'translateX(0)'},
    {transform: 'translateX(95%)'},
    {transform: 'translateX(0)'}    
  ],
  cloudYKeyframes: [
    {marginTop: 0},
    {marginTop: '2px'},
    {marginTop: 0} 
  ],
  cloud2XKeyframes: [
    {transform: 'translateX(95%)'},
    {transform: 'translateX(0)'},
    {transform: 'translateX(95%)'}   
  ],
  FishKeyframes: {
    swimingYmoves: [
      {transform: 'rotate(-20deg)', marginTop: '-2px'},
      {transform: 'rotate(20deg)', marginTop: '2px'},
      {transform: 'rotate(-20deg)', marginTop: '-2px'}
    ],
    fish1SwimingXmoves: [
      {marginLeft: '-20%'},
      {marginLeft: '100%'}
    ],
    fish2SwimingXmoves: [
      {marginRight: '-20%'},
      {marginRight: '100%'}
    ],
    seaYKeyframes: [
      {transform: 'translateY(-2px)'},
      {transform: 'translateY(2px)'},
      {transform: 'translateY(-2px)'}
    ],
    seaXKeyframes: [
      {backgroundPositionX: '5px'},
      {backgroundPositionX: '0'},
      {backgroundPositionX: '5px'}
    ]
  }
};