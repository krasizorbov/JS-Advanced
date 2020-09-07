function solution(car) {
  let model = car.model;
  let power = car.power;
  let color = car.color;
  let carriage = car.carriage;
  let wheelsize = car.wheelsize;

  class Car {
    constructor(model, power, color, carriage, wheelsize) {
      this.model = model;
      this.engine = {};
      if (power <= 90) {
        this.engine = { power: 90, volume: 1800 };
      } else if (power > 90 && power < 120) {
        this.engine = { power: 120, volume: 2400 };
      } else if (power >= 120) {
        this.engine = { power: 200, volume: 3500 };
      }
      this.carriage = { type: carriage, color: color };
      this.wheels = [];
      if (wheelsize % 2 === 1) {
        this.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
      } else {
        wheelsize -= 1;
        this.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
      }
    }
  }
  return new Car(model, power, color, carriage, wheelsize);
}
console.log(
  solution({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
