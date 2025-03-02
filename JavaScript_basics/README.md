# LAB 1 - JavaScript basics
The purpose of this lab is to study the concepts discussed during INF203 on Web technologies and in particular JavaScript. The goal of this lab is to program in JavaScript without using the browser. Another lab session will concern JavaScript in the browsers.

## Exercise 1 - Numbers, loops, arrays, functions and recursion
**Question 1a:** Write a function named fibonaIt which calculates the nth number of the Fibonacci sequence iteratively (with a for-loop or while). fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2)

**Question 1b:** Write a function named fiboRec which calculates the Fibonacci sequence recursively.

**Question 1c:** Write a function fiboArr that takes an array of numbers and returns the array of results of fiboRec called on the numbers without using the JS function map. You may reuse functions from previous questions.

**Question 1d:** Write a function named fibonaMap equivalent to the function from Question 1c using the JS function map.

### To use
-> run `node exercise1_test.mjs` in the terminal

## Exercise 2 - Strings, Objects, Anonymous Functions

**Question 2a:** Write a wordCount function which, for each word within a string, counts the number of occurrences of this word in this string. The function shall return an object whose properties are the words and the values of these properties are the occurrence numbers. Make sure this function works on a string of at least 500 words. The input string is assumed to contain no punctuation and only small caps.

*Example*: on the string “fish bowl fish bowl fish”, the result is `{fish: 3, bowl:2}`

**Question 2b:** Create a class WordL with a constructor which takes as input a string and that returns an object with the following methods:

* `getWords()` which returns an array of words present in the original text, lexicographically sorted and without duplicates,
* `maxCountWord()` which returns the word with the most occurrences, and if there are several words with the same number of occurrences, returns the first of them in the lexicographically sorted list from getWords()
* `minCountWord()` which returns the word with the least number of occurrences, and if there are several words with the same number of occurrences, returns the first of them in the lexicographically sorted list from getWords() 
* and `getCount(word)` which gives the number of occurrences for a given word.

**Question 2c:** Add to WordL an applyWordFunc(f) method to apply any function to each word in lexicographic order and to return an array of results, for example:

``` JavaScript
function f (word) {return word.length;}
wordList.applyWordFunc(f)
```
then returns the array of lengths of words.

## Exercise 3 - Object-Oriented Programming in JavaScript
**Question 3a:** Create a `Std` class with attributes named `lastName`, `firstName` and `id` in that order, so that one can write the following code:

```JavaScript
var student = new Std("Dupond", "John", 1835);
```

**Question 3b:** Add a `toString` method that does not take a parameter, and which returns a string of characters built from the properties of the object in the form:

`"student: Dupond, Jean, 1835"`

**Question 3c:** Create a `class ForeignStud` extending `Std` that also allows to give a nationality to a student, so the arguments of the constructor are `lastName, firstName, id and nationality`. Add a `toString` method that takes the result of the basic class and adds the nationality, with a field of name nationality as follows:

`"student: Doe, John, 432, American"`

## Exercise 4 - Module in JavaScript
