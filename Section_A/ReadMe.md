# Section A

## Intro feedback

Hi Gershwen, thank you for your submission. I appreciate the time and effort you put in towards this task.
You have come a long way in your progress. I would like to give you some feedback on your solution. See below:

## Correctness

Overall you on the right track to getting to the correct outcome however I noticed i had an issue displaying it in my console. This was due to line 58 making use of print instead of console.log.
Your function makes good use of es6 arrow functions however at line 5 your function is declared as: const caesar_cipher<T> = (string: T, shift: string) => {...
Try removing <T> from your function.

## Efficiency

At line 2 you have type Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
You should declare the type when declaring the variable eg. const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

## Style

Overall style was good. You made good use of the while loop. You could always shorten your code by using a for loop in this case.

## Documentation

I see you made good attempts on commenting. Try to be abit more decriptive in your comments.
Describe how each line of code works and what its doing. 

## Conclusion 

I believe you made a good attempt and you on the right track. Apply these suggestions and keep growing. 

### Some resources that may help you

1. https://www.typescriptlang.org/docs/handbook/2/functions.html#handbook-content

2. https://www.youtube.com/watch?v=4XLM2ZvtnlA&t=445s&ab_channel=JavaScriptMastery

## Installation 

Use npm istall on windows or yarn install on iOS. 
