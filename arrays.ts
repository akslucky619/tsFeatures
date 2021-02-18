// const carMakers:string[] = []
// when initialising an array
const carMakers = ["ford", "mustang", "ferrari"];
const dates = [new Date(), new Date()];

const bikeMakers = [["yamaha"], ["honda"], ["kawasaki"]];
// const bikeMakers:string[][] = [];

// help with inference when extracting values from an array
const car1 = carMakers[0];

// prevent incompatible values
carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car;
});

// flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("iisisis");
importantDates.push(new Date());
importantDates.push(100); //adding wrong type
