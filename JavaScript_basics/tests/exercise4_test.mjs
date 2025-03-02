"use strict";

import {Std, ForeignStud, Prom} from "../sources/exercise4.mjs";

// Example usage
const prom = new Prom();
prom.add(new Std("Dupond", "John", 1835));
prom.add(new ForeignStud("Doe", "John", 432, "American"));

console.log(prom.size());
console.log(prom.get(0).toString());
prom.print(); 

const jsonStr = prom.write();
console.log(jsonStr);

const newProm = new Prom();
newProm.read(jsonStr);
newProm.print();

prom.saveF('promotion.json');
const loadedProm = new Prom();
loadedProm.readF('promotion.json');
loadedProm.print();