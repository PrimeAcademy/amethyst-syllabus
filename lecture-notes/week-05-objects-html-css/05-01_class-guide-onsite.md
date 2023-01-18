# Tier 1 Week 5 On Site Class Guide

Week 5 class is in-person, and held at Prime.

As people come in, have them put on a name tag

If the classroom instructor is planning on doing Bingo on day 1, have each person fill out a square on a [bingo sheet](https://docs.google.com/document/d/1NIORJhU75KVcNfuQBzhJ0jopcOaQp3bqVpQYPA9EAk8/edit)

## Introductions - 10 Minutes

Go around the circle and tell us:

- Your name
- 1 word to describe yourself

These should be one minute long.

## What’s going on at Prime - 5 minutes

- What are the other cohorts doing?
- Does Prime have any upcoming events?


## Pair Activity: Micro Checkpoints - 25 minutes
In pairs/groups have students solve the first three micro checkpoints: [https://github.com/PrimeAcademy/daily-checkpoints](https://github.com/PrimeAcademy/daily-checkpoints)

Working these out on paper or on a whiteboard seems to encourage more discussion and collaboration.

## Group Activity: Function Fort - 20 minutes

Prep: 
Paper,
Tape,
Foam Cubes,
Markers,
Notecard labeled 'true',
Notecard label 'false',
Notecard label 'undefined',
Envelope 

Have students build a fort using cubes (can build against wall or corner to conserve cubes). Fort should hold 1 person, the Function Worker, and have a separate places for input and output.
 
Have one instructor build the function on the monitor.
As the function is declared on the screen, instructor2 labels parts of the fort: 

- When the function is given a name, tape a paper sign on the fort with the given name.

- When the parameter is given a name, label the envelope with that name and place it in the 'input/parameter' window of the fort.

- When the local array is declared and defined, write it on a piece of paper and put that in the fort so that it is not visible from outside of the fort.

When assigning words to the array, have students name silly words.

Function name: put a paper sign on the for with that name

Parameter: write the name of the parameter on an envelope and place it at the fort input.

Because the function will return a boolean, give the Function Worker 3 cards, labeled `true` and `false`, and `undefined` if you're going to 'run' the function before putting in a return statement.

Function Worker Tasks:
- Verbally announce any console logs.
- pass out Notecard of what is returned from the function through the output window (false, true, or undefined).

If the local array where global instead, it would be like it was written on the whiteboard. Everyone could see it, including the function worker.

Function to use for Function Fort:

```JavaScript
function isWordSilly( aWord ){
 
  let sillyWords = [ 'squeegee', 'barnacle', 'barbecue', 'quagmire', 'bog', 'loofah' ];

  if( sillyWords.includes( aWord ) ){
    return true
  } else {
    return false
  } 
 } 
```

OR, to also review for loops:

```JavaScript
function isWordSilly( aWord ){
 
  let sillyWords = [ 'squeegee', 'barnacle', 'barbecue', 'quagmire', 'bog', 'loofah' ];

  for(var i = 0; i<sillyWords.length; i++){
    if( sillyWords[i] === aWord){
      return true;
    }
  }
  
  return false;
 } 
```


## Q&A
