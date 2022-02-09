// An interface declaration is another way to name an object type

interface Points {
  x: number;
  y: number;
}

function locationCoordinates(point : Points): Points {
  return {
    ...point,
  }
};

console.log(locationCoordinates({x:12, y:78}));


// differences between Interface and Point

// a type cannot be re-opened to add new properties vs an interface which is always extendable.

type Animal = { 
  name : string;
}

interface Animal2 extends Animal { 
  eat : () => boolean;
}

// type Animal = { } // Duplicates identifier error 

interface Animal2 {
  walk : () => boolean;
}

function animal(animal: Animal2) {
  console.log(animal.name) // here you get name, eat, walk all properties of Animal2
}