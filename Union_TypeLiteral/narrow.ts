let my_name: string | number;

// Typescipt allow to change the type to string
my_name = "hello";
// but it won't allow to use different type
// my_name = true;
// above we narrow down the type string by assigning string value to the variable

my_name = Math.random() > 0.5 ? "hi" : 1;

//using 'typeof' operator , and with condition we are narrowing the type to number
if (typeof my_name === "number") {
  my_name.toFixed();
  // my_name.toUpperCase();  // This will give error
} else {
  my_name.toUpperCase();
  // my_name.toFixed(); // Here this wont work because Typescript know now the type must be string
}
