"use strict";

// Programming with a loop
export function fibonaIt(n) {
    let a, b, c;
    a = 0;
    b = 1;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    if (n === 0) return a;
    else return b;
}

// Recursive programming
export function fiboRec(n) {}

// Process array, no map
export function fiboArr() {}

// No loop
export function fibonaMap() {}