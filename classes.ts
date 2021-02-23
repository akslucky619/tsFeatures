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

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }
  public startDrive(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car(4, "red");
car.startDrive();
// car.honk();
