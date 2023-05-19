/**
 *
 * TypeScript allows you to declare the type of function parameters with a type annotation.
 *
 * functionName (parameter : type) {}
 *  simply (parameter: string)
 */

// define type to parameters and return type
function addNumber(a: number, b: number): number {
  return a + b;
}

export default addNumber;
// arraow function
export const addString = (str1: string, str2: string): string =>
  `${str1} ${str2}`;

/**
 *  Required Parameter,
 *  TypeScript assumes that all parameters declared on a function are required.
 *  If a function is called   with a wrong number of arguments,
 *  TypeScript will protest in the form of a type error.
 */

function withRequiredParas(arg1: string, arg2: string) {
  console.log(`These are the arguments: ${arg1}, ${arg2}`);
}
// two arguments requires
withRequiredParas("Hello", "Yagnesh");

// TS will give an error that required argument is missing
// withRequiredParas("Hello"); // In JS file it logs out "Hello undefined"

/**
 *
 * Optional Parameter
 *
 * You can add parameter as optional by using (?) before (:)
 * Optional parameter has (| undefined) union type along with specified type
 * Optional parameter must be provided at the last parameter in func or TS will throw an error
 * If parameter explicity union type of string | undefined than it must be provided at function call
 */

//union type
// here params can be string or number
export const format = (title: string, params: string | number): string =>
  `${title} ${params}`;

//promise type
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);
