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

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotaions
// 1) Function that returns type any
const json = '{"x":10, "y":20}';
// const coordinates = JSON.parse(json); previous
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we decare a variable on one line
// and initialise it later
let words = ["red", "blue", "green"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}
