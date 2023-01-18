# Tier 1 Week 3 Remote Class Guide

Week 3 class is remote via Go To Meeting.

## What’s going on at Prime

- What are the other cohorts doing?
- Upcoming events?

## Encourage people to work together

- Recap of onsite study group
- Recap of other study groups?
- Any planned study groups? 
- Why do we encourage this?

## Content Notes

### Terms

Talk about them as you work through the code snippet

- `let` and `const`
- strings vs numbers vs booleans
- Git: how to handle errors, what to do when it isn't working, what to do when your assignment is due and you can't push
- String concatenation
- Conditionals
- `=` vs `==` vs `===`
- Testing/edge cases
- Refactoring
- Good habits: Importance of code formatting

### Code Snippet:

Start with the comment. Pause at different points and have students enter what they think will be logged in the chat and then say "hit enter in 3... 2... 1... enter!"

```JavaScript
// 16 - Write a conditional that assigns the value of the `pets` variable
// to a new variable called `mostPets` IF `pets` is greater than `friendsPets`.
// If `friendsPets` is greater than `pets`, assign the value of the `friendsPets`
// variable to `mostPets`. Console log the value of `mostPets`.
const pets = 5;
const friendsPets = 8;

let mostPets;

if (pets > friendsPets) {
    mostPets = pets;
} else if (friendsPets > pets) {
    mostPets = friendsPets;
} else if (friendsPets === pets) {
    mostPets = pets;
}

console.log(mostPets);
```

Optional Refactor:

```JavaScript
let mostPets = pets;

if (pets > friendsPets) {
    mostPets = pets;
}
```

Optional Refactor:

```JavaScript
const mostPets = Math.max(pets, friendsPets);
```

## Discussion

- If time: can have a discussion about study habits, what is working, what isn't, etc.
- Practical Teamwork: asking good questions

## Q&A
