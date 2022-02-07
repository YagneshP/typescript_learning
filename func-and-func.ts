//function as parameters

function printLetter (str : string, callback : () => void) : void {
  console.log(str);
  callback();
};

//define type function

type Mutations = (v: number) => number;

function numberMutations (numbers: number[], cb : Mutations) : number[] {
  return numbers.map(cb);
}

console.log(numberMutations([1,2,3,4,5,6], (v) => v*10));


//function returning functions

type AddNumber = () => number;

function Adder(num: number): AddNumber{
  return function addOne(): number {
    return 1 + num;
  } 
};

console.log(Adder(2)());


// callSignature

// - function can have properties but type function doesnt allow for declaring propeties, so we need to type in 'object'

type functionWithProp = {
  description: string, 
  (a:string):string // using  : instead of =>
}

function doSomething(fn : functionWithProp): string {
  return `${fn.description} and call ${fn('a')}`
}

// function overload


interface Coordinate {
  x: number,
  y: number
};


// function parseCoordinateWithObject(obj: Coordinate): Coordinate {
//   return { ...obj }
// }

// function parseCoordinateWithNumbers(x: number, y: number): Coordinate {
//   return { x, y }
// };

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;

function parseCoordinate (arg1: unknown, arg2?: unknown): Coordinate {
  let coords: Coordinate = {
    x: 0,
    y: 0
  }
  if(typeof arg1 === 'object') {
    coords = {...arg1 as Coordinate}
  } else {
    coords = {x : arg1 as number, y : arg2 as number}
  }

  return coords
}