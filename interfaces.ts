// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
// }

interface Reportable {
  summary(): string;
}

// const oldCivic = {
//   name: "Civic",
//   year: 2000,
//   broken: true,
// };

const oldCivic = {
  name: "Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
