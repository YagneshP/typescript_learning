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

console.log(Adder(2)())
