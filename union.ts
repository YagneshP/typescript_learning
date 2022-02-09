//A union type is combination two or more types , representing the value any of these types 

function printId(id: number | string) {
  console.log("Id is" + id);
};

printId("34") //OK
printId(3) //OK
// printId({a: 1}) // Not OK

// Typescript only allow the operation which is common for all types

function printIDS(id: number | string) {
  // console.log("Id is :" + id.toUpperCase()); //Property 'toUpperCase' does not exist on type 'number'
};


// You can "Narrowing" the type with typeof operator 

function printIds(id: number | string) {
  if(typeof id === "string") {
    console.log("Id is :" + id.toUpperCase());
  } else {
    console.log("Id is:", id) // Typescript will figure out that typeof id now is number
  }
}

//Array.isArray also use for Narrowing if one of the type is Array