"use strict";

import { Std, ForeignStud } from "../sources/exercise3.mjs";

var student = new Std("Dupond", "John", 1835);
console.log(student.toString()); 

var foreignStudent = new ForeignStud("Juchum Chagas", "João Pedro", 432, "Brazilian");
console.log(foreignStudent.toString()); 
