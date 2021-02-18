const add = (a: number, b: number): number => {
  return a + b;
};

// ts error when write annotations for return value
// i.e it will infer return as void
const substract = (a: number, b: number) => {
  a - b;
};


function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function multiply(a: number, b: number): number {
  return a * b;
};
