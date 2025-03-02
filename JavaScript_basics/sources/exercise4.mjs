"use strict";

import {Std, ForeignStud} from "./exercise3.mjs";
import fs from 'fs';

export {Std, ForeignStud};

export class Prom {
    
    constructor () {
        this.students = [];
    }

    add(student) {
        this.students.push(student);
    }

    size() {
        return this.students.length;
    }

    get(i) {
        return this.students[i];
    }

    print() {
        const result = this.students.map(student => student.toString()).join('\n');
        console.log(result);
        return result;
    }

    write() {
        return JSON.stringify(this.students);
    }

    read(str){
        const data = JSON.parse(str);
        this.students = data.map(student => {
            if(student.nationality) {
                return new ForeignStud(student.lastName, student.firstName, student.id, student.nationality);
            } else {
                return new Std(student.lastName, student.firstName, student.id);
            }
        });
    }

    saveF(fileName) {
        const data = this.write();
        fs.writeFileSync(fileName, data, 'utf8');
    }

    readF(fileName) {
        const data = fs.readFileSync(fileName, 'utf8');
        this.read(data);
    }
}

