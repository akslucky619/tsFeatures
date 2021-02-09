let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// arrays
let colors: String[] = ["red", "blue", "green"];
let myNums: number[] = [1, 2, 3];
let truthys: boolean[] = [true, true, false];

// classes
class Car {}

let car: Car = new Car();

// objects
let point: { x: number; y: number } = {
  x: 20,
  y: 20,
};

// function

const logNumber: (i:number) => void = (i: number) => {
console.log(i);

}