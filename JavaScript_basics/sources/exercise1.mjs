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
export function fiboRec(n) {
    if (n <= 1) return n;
    return fiboRec(n - 1) + fiboRec(n - 2);
}

// Process array, no map
export function fiboArr(t) {
    let arr = [];
    for (let i = 0; i < t.length; i++) {
        let a, b, c;
        a = 0;
        b = 1;
        for (let j = 2; j <= t[i]; j++) {
            c = a + b;
            a = b;
            b = c;
        }
        if (t[i] === 0) arr.push(a);
        else arr.push(b);
    }
    return arr;
}

// No loop
export function fibonaMap(t) {
    return t.map(n => {
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
    });
}