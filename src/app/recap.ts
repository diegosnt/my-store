const unsername: string = 'diego';
const sum = (a: number, b: number) => a + b;

console.log(sum(1, 2));

class Person {
  constructor(public age: number, public lastName: string) {}
}

const nico = new Person(15, 'Molina');

console.log(nico.age);
