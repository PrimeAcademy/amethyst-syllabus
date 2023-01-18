// ********** VARIABLES

let color = 'pink';
let shade = 'hot';
color = shade + color;
// console.log(color);
// QUIZ ONE
  //🦊 'pink'
  //🌵 'hotpink'
  //🌈 'pinkhot'
  //🌎 undefined



let articleOfClothing = 'trousers';
color = color + articleOfClothing;
// console.log(color);
// QUIZ TWO
  //🦊 'hotpinkarticleOfClothing'
  //🌵 'trousershotpink'
  //🌈  pinktrousers
  //🌎 'hotpinktrousers'




















// ********** CONDITIONALS

let sockCount = 24;
let sockDrawerCapacity = 32;

// if (sockCount > sockDrawerCapacity) {
//   console.log('too many socks!')
// } else if (sockCount < sockDrawerCapacity) {
//   console.log('plenty of room for socks!')
// } else {
//   console.log('🧦 🧦 🧦 🧦 🧦')
// }
// QUIZ THREE
  //🦊 'too many socks!'
  //🌵 'plenty of room for socks!'
  //🌈 '🧦 🧦 🧦 🧦 🧦'
  //🌎 undefined



sockCount += 8;

// if (sockCount > sockDrawerCapacity) {
//   console.log('too many socks!')
// } else if (sockCount < sockDrawerCapacity) {
//   console.log('plenty of room for socks!')
// } else {
//   console.log('🧦 🧦 🧦 🧦 🧦')
// }
// QUIZ FOUR
  //🦊 'too many socks!'
  //🌵 'plenty of room for socks!'
  //🌈 '🧦 🧦 🧦 🧦 🧦'
  //🌎 undefined



let mattIsWearingSocks = true;
//
// if (sockCount === 32 && mattIsWearingSocks === false) {
//   console.log('apple')
// } else if (sockCount < 32 || mattIsWearingSocks === false) {
//   console.log('banana')
// } else if (sockCount <=32 && mattIsWearingSocks) {
//   console.log('coconut')
// } else {
//   console.log('dinosaurs')
// }
// QUIZ FIVE
  //🦊 'apple'
  //🌵 'banana'
  //🌈 'coconut'
  //🌎 'dinosaurs'




















// ********** ARRAYS

let someCookies = ['choc chip', 'pb', 'monster', 'gingerbread', 'sugar']

// console.log(someCookies[someCookies.length - 2])
// QUIZ SIX
  //🦊 'sugar'
  //🌵 'gingerbread'
  //🌈 'monster'
  //🌎 'pb'



// console.log(someCookies.pop())
// QUIZ SEVEN
  //🦊 'sugar'
  //🌵 'gingerbread'
  //🌈 'monster'
  //🌎 'pb'



// console.log(someCookies[someCookies.length - 2])
// QUIZ EIGHT
  //🦊 'sugar'
  //🌵 'gingerbread'
  //🌈 'monster'
  //🌎 'pb'



let attemptToConfuse = [ ['a', 'b', 'c'], ['d', 'e', 'f'] ]
// console.log(attemptToConfuse[0][2])
// QUIZ NINE
  //🦊 'a'
  //🌵 'c'
  //🌈 'd'
  //🌎 'e'



// console.log(attemptToConfuse[1][0])
// QUIZ TEN
  //🦊 'a'
  //🌵 'c'
  //🌈 'd'
  //🌎 'e'




















// ********** LOOPS

let colors = ['red', 'green', 'blue']

// for (i=0; i<colors.length; i++) {
//   if (i === 2) {
//     console.log(colors[i])
//   }
// }
// QUIZ ELEVEN
  //🦊 'red'
  //🌵 'green'
  //🌈 'blue'
  //🌎 undefined



// for (let color of colors) {
//   if (color === 'yellow') {
//     console.log('red')
//   } else if (color === 'blue') {
//     console.log('green')
//   }
// }
// QUIZ TWELVE
  //🦊 'red'
  //🌵 'green'
  //🌈 'blue'
  //🌎 undefined



for (color of colors) {
  let nothing = undefined;
}
// console.log(color)
// QUIZ THIRTEEN
  //🦊 'red'
  //🌵 'hotpinktrousers'
  //🌈 'blue'
  //🌎 undefined



let whatIsThis = '';

for (let color of colors) {
    whatIsThis += color
}
// console.log(whatIsThis)
// QUIZ FOURTEEN
  //🦊 'red'
  //🌵 'redgreen'
  //🌈 'redgreenblue'
  //🌎 undefined



let andWhatIsThis = '';
for (let color of colors) {
    andWhatIsThis += color[0]
}
// console.log(andWhatIsThis)
// QUIZ FIFTEEN
  //🦊 'rgb'
  //🌵 'redgreenblue'
  //🌈 'bluegreenred'
  //🌎 undefined
