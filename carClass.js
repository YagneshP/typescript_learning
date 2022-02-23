class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
};


let sedan = new Car("Honda", "Civic", 2018);

console.log("sedan :", sedan);

// TypeError :  is not function because we dont know that sedan object has activeTurnSignal method
// sedan.activeTurnSignal("left"); 

let wrongSedan = new Car(2019, 'Hyundai', 'i10');
console.log("wrong Sedan :", wrongSedan);
