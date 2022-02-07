// define type to parameters and return type
function addNumber(a: number, b: number): number {
  return a + b;
}

export default addNumber;
// arraow function
export const addString = (str1: string, str2: string): string => `${str1} ${str2}`;

//union type 
// here params can be string or number 
export const format = (title: string, params: string | number) : string => `${title} ${params}`;

//promise type
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);