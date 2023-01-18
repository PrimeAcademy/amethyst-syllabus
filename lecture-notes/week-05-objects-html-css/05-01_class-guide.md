# Tier 1 Week 5 Remote Class Guide

## Content Notes -- Function Review ~40 min

### Reminders

Good habits:
- smaller more frequent practice sessions are better than 1-2 long ones
- testing your code
- commenting your code
- committing often with commit messages (trick of starting with "this will")

### Function Review

Functions are critical to understand moving forward! 

Example function definition:
```
function sayHello( name ){
  return 'Hello, ' + name;
  // OR
  // return `Hello, ${name}`;
}
```

Calling the function:
```
let message = sayHello;
console.log( 'The message is', message );
```

Key parts: 
 - function name - `sayHello`
 - input parameters - `name`
 - output or return value

#### Assignment Code Walkthrough
Work through Stretch goal for `isFull` - using a function inside another function.

Can write `addItem` or start with the following:
```JavaScript
basket = [];
maxItems = 3;

function addItem( item ) {
    basket.push(item);
    return true;
}

// Remember to test your functions!!!
console.log('Basket is:', basket);
console.log('Add apple: ', addItem('apple'));
console.log('Add banana: ', addItem('banana'));
console.log('Add orange: ', addItem('orange'));
console.log('Add kiwi: ', addItem('kiwi'));
console.log('Basket is:', basket);
```

Work toward:
```JavaScript
basket = [];
maxItems = 3;

function addItem( item ) {
  let full = isFull();
  if ( full ){
    return false;
  } else {
    basket.push(item);
    return true;
  }
}

// Remember to test your functions!!!
console.log('Basket is:', basket);
console.log('Add apple: ', addItem('apple'));
console.log('Add banana: ', addItem('banana'));
console.log('Add orange: ', addItem('orange'));
console.log('Add kiwi - expect false now: ', addItem('kiwi'));
console.log('Basket is:', basket);

function isFull() {
  if (basket.length >= maxItems){
    return true;
  }
  return false;
}
basket = [1, 2, 3]
console.log('Basket is:', basket);
console.log('isFull? - true', isFull());
basket = [ 1 ]
console.log('Basket is:', basket);
console.log('isFull? - false', isFull());
```


## T2 Logistics ~ 20 min

## Day 1

- 9:00 Start Time on First Day (get yourself ready for this schedule if you aren't yet).
  - Don't be too early, the front doors are locked until 9! Class will kickoff at 915.
  - After the first day, you will have a FOB and can access campus before 9am! Class will start at 9am normally.
  - [Written directions and parking info](https://primedigitalacademy.notion.site/Prepare-for-In-Person-Learning-3a859553d6564a428ebb6191ebb0d36a) with descriptions of campus and building amenities. **Note that you can only get in through the Gateway Skyway entrance if you have a FOB.**

  - [Video of walking to the 4th Street entrance](https://vimeo.com/728881753) with visuals of the Gateway Ramp and the best entrance into the Grain Exchange.
- Classroom `your classroom number`
- There will be a seating chart, find your desk, there will be goodies for you on your desk.
- Parking
	- Gateway ramp, $7/day if parked before 10am.
- Balance payment is due on Monday. For specific questions Slack @Bill Stephenson or email him at bill@primeacademy.io


## What to Bring

- Computer, mouse, keyboard, there is a secondary monitor
- notebook, pens, etc for taking notes
- how does lunch work?
- Bike parking, space is available
- an open mind and a positive attitude


## Differences from Tier 1:
- busy, faster paced
- full time++ job


## What should I do this weekend?

- Your week 5 work due as usual Sunday night.
- You can go back and review previous content if you'd like but...
- *DO NOT CRAM this weekend!*
	- we will review all the content. granted, it is faster but we will touch on all of it
	- Get some rest
	- Spend time with your family, you will not see much of them

