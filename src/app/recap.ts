import { NgIfContext } from "@angular/common";

const username: string = 'diego';
const sum = (a: number, b: number) => {
    return a + b;
}
console.log(sum(1,2));

class Person {
    constructor(public age: number, public lastName: string){}
}

const diego = new Person(15,'Perez');

