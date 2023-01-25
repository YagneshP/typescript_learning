const poet = {
  name: "KabirDas",
  born: 1857,
};

// typescript will infers 'poet' object type with properties type as well

//poet.new = 'nhh'; // ❌ gives error that 'new' does not exist in type {name:string, born:number}

// ❓ Why i can't assign the new property to poem object ??? structure Typing or excessive property check?

/**
 * Declaring Object Types
 */

let poetLater: {
  name: string;
  born: number;
};

// here we declare the structure of the object now you can assign the properties with values
// here poetLater is objectTypeLiteral, you can't do
// poetLater.name = 'Tulsidas' // ❌ because poetLater variable is not assigned with any value

poetLater = {
  name: "Tulsidas",
  born: 1667,
};

/**
 *  Aliased Object Type
 */

// That means you can use 'object type name' to assign the type

// Using 'type' keyword

type Kavi = {
  name: string;
  born: number;
};

let surdas: Kavi = {
  name: "Surdas",
  born: 1770,
};

/**
 *  Usage Checking
 */

// When providing value to location with object type meaning you assigned the variable with type(object) and the value using object literal (({...})), then all properties( declared in type) must be present in that value.

// here declaring the type object

type FirstNameAndLastName = {
  firstName: string;
  lastName: string;
};

// Here we are declaring variable 'hasBoth' and assigned type 'FirstNameAndLastName'
// and also assigning value at location, that means it must have properties 'fistName' and 'lastName'
// 📌 try to uncomment one of the properties , typescript will throe error of missing property
const hasBoth: FirstNameAndLastName = {
  firstName: "Sarojini",
  lastName: "Naidu",
};

/**
 * Excess Property Check
 */

type Student = {
  name: string;
  studentId: number;
};

// OK
let john: Student = {
  name: "John",
  studentId: 1234,
};
// Here we are assigning the value at location with objec literal
let janny: Student = {
  name: "Janny",
  studentId: 234,
  // school_Name : "St.Xavier's"  // ❌ This is excess property
};

// existing object
let studentWithSchoolName = {
  name: "Peter",
  studentId: 788,
  school_Name: "St.Xavier's",
};

// Here we are assigning value with existing object 'studentWIthSchoolName' so typescript won't trigger the excess property check
let peter: Student = studentWithSchoolName;
