//by adding ? to the end of the param it will be optional 

function recipes (quantity: string, ingredients: string, extra?: string) {
  console.log(`${quantity} : ${ ingredients }`);
}

recipes('1cp', 'flour'); //same error if you provide three params

recipes('2cp', 'flour', 'addSomeSugar'); // if you dont provide the third arguments it will give error 2554 [expected 2 but got 3]