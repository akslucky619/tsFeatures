const add = (a: number, b: number): number => {
  return a + b;
};

// ts error when write annotations for return value 
// i.e it will infer return as void
const substract = (a: number, b: number) => {
 a - b;
};
