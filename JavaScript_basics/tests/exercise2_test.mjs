"use strict";

import {wordCount, WordL} from "../sources/exercise2.mjs";

// Test the wordCount function
let str1 = "fish bowl fish bowl fish";
let str2 = "fish fish fish fish fish";
let str3 = "group of fish in a fish in a group of fish"

console.log(wordCount(str1));
console.log(wordCount(str2));
console.log(wordCount(str3));

// Test the WordL class
let wl1 = new WordL(str1);
let wl2 = new WordL(str2);
let wl3 = new WordL(str3);

console.log(wl1.getWords());
console.log(wl2.getWords());
console.log(wl3.getWords());

console.log(wl1.maxCountWord());
console.log(wl2.maxCountWord());
console.log(wl3.maxCountWord());

console.log(wl1.minCountWord());
console.log(wl2.minCountWord());
console.log(wl3.minCountWord());

console.log(wl1.getCount("fish"));
console.log(wl2.getCount("fish"));
console.log(wl3.getCount("fish"));

// Test the applyWordFunc method
function f (word) {return word.length;}
console.log(wl1.applyWordFunc(f));
console.log(wl2.applyWordFunc(f));
console.log(wl3.applyWordFunc(f));