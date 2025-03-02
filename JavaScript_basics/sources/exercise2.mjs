"use strict";

export function wordCount(str) {
    const words = str.split(" ");
    const wordCounts = {};

    for (const word of words) {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }

    return wordCounts;
}

export class WordL {
    constructor(str) {
        this.wordsCount = wordCount(str);
        this.words = Object.keys(this.wordsCount);
    }

    getWords() {
        return this.words;
    }

    maxCountWord() {
        let maxCount = this.words[0];
        for (const word of this.words) {
            if (this.wordsCount[word] > this.wordsCount[maxCount]) {
                maxCount = word;
            }
        }
        return maxCount;
    }

    minCountWord() {
        let minCount = this.words[0];
        for (const word of this.words) {
            if (this.wordsCount[word] < this.wordsCount[minCount]) {
                minCount = word;
            }
        }
        return minCount;
    }

    getCount(word) {
        return this.wordsCount[word];
    }

    applyWordFunc(f) {
        return this.words.map(f);
    }
}