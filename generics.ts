function myForEach <T> (items: T[], callback: (v : T) => void): void{
  items.reduce((acc, item) => {
    callback(item);
    return undefined;
  }, undefined);
};

myForEach([1,2,3,4], (num) => {console.log(num)});

function myFilter <T> (items: T[], filterFunction: (v : T) => boolean) : T[] {
 return items.reduce((a, v) => filterFunction(v) ? [...a, v] : a,[] as T[]);
};

const filteredArray = myFilter([1,2,3,4,5,6,7,8,9], (v) => v % 2 === 0);

console.log(filteredArray);


function myMap <T, K>(items: T[], mapFunction: (v: T) => K) : K[] {
  return items.reduce((acc, item) => [...acc, mapFunction(item)],[] as K[])
}