function greeting(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
;
// greeting('John'); // give an error 
// greeting('John', Date()) // Argument of type 'string' is not assignable to parameter of type 'Date'.ts(2345) because Date() return string
greeting('John', new Date());


// tsc --target es2015 will convert the code into es2015 version by default it convert es3