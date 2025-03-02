"use strict";

import {fibonaIt,fiboRec,fiboArr,fibonaMap} from "../sources/exercise1.mjs";

// Tests for fibonaIt
console.log(fibonaIt(0));
console.log(fibonaIt(1));
console.log(fibonaIt(5));
console.log(fibonaIt(42));

// Tests for fiboRec
console.log(fiboRec(8));
console.log(fiboRec(13));
console.log(fiboRec(21));
console.log(fiboRec(34));

// Tests for fiboArr
console.log(fiboArr([3,5]));
console.log(fiboArr([8,13]));
console.log(fiboArr([21,34]));

// Tests for fibonaMap
console.log(fibonaMap([3,5]));
console.log(fibonaMap([8,13]));
console.log(fibonaMap([21,34]));
