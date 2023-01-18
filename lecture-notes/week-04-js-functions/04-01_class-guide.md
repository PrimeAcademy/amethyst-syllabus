# Tier 1 Week 4 Remote Class Guide

Week 4 class is remote via Go To Meeting.

## What’s going on at Prime

- What are the other cohorts doing?
- Does Prime have any upcoming events? 

## Encourage people to work together

- Recap of onsite study group
- Any study groups?
- Any planned study groups? 

## Next week in-person (maybe)!

- The main objective of in-person class is to _provide fobs to students_.
- Secondary objective is to give students a chance to get to campus and iron out transportation/parking stuff.
  - These make for a much smoother first day of Tier 2.
- If no in-person class, have a plan for making fob pickups happen. (Example: Students could stop by campus between 1:00 and 4:00 during Week 6).
- In-person class may include pizza, which Student Life can order. 🙂

## Content Notes

### Terms

Talk about them as you work through the code snippet

- `let` in all for loops, including for...in and for...of
- Differences between loops
- Accessing an item in an array
- `index` vs `value at index` (`i` and `array[i]`)
- Good habits: commenting your code
- Good habits: committing often with commit messages (trick of starting with "this will")

### Code Snippet:

Start with the comment. Pause at different points and have students enter what they think will be logged in the chat and then say "hit enter in 3... 2... 1... enter!"

```JavaScript
// 10. Reassign `myValue` to 3. Then, loop through your array, logging the value
//     of each array item. If any item matches `myValue`, then also log "Hurray!"
let myValue = 3;
let numbers = [3, 5, 7, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log('Item value is', numbers[i]);
    if (numbers[i] === myValue) {
        console.log('Hurray!');
    }
}
```

## Discussion

- What do you do when you're getting frustrated?
- Practical Teamwork: Imposter Syndrome

## Assignment overview/instructions

- For weeks 4 and 5, call your functions in the JavaScript file

## Q&A
