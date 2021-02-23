class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }
  protected honk(): void {
    console.log("Honk honk");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

// class Car extends Vehicle {
//   private drive(): void {
//     console.log("vroom");
//   }
//   public startDrive(): void {
//     this.drive();
//     this.honk();
//   }
// }

// // const vehicle = new Vehicle();
// // vehicle.drive();
// // vehicle.honk();

// const car = new Car();
// car.startDrive();
// car.honk();
