class Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  //* comment out this method to remove error
  // activeTurnSignal(s : string) : void {
  //   console.log(`Turn ${s}`);
  // }
}

let sedan = new Car('Honad', 'Accord', 2019);
console.log('sedan:',sedan);

// wrong type property also give error
// let wrongSedan = new Car(2019, 'Hyundai', 'i20'); // make it right?  (ref line 16)



// if no method found in your class, gives error
// wrongSedan.activeTurnSignal("right");  //🚧 make it right? (ref line 10)