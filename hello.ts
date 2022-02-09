function greeting(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
};

// greeting('John'); // give an error 

// greeting('John', Date()) // Argument of type 'string' is not assignable to parameter of type 'Date'.ts(2345) because Date() return string

greeting('John', new Date())