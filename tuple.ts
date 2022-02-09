//useState tuple implementation 

function stringState (str: string) : [() => string, (s: string) => void] {
  return [
    () => str,
    (v: string) => str = v
  ]
}


const [strGetter, strSetter] = stringState("hello");
const [str1Getter, str1Setter] = stringState("John")
console.log(strGetter());
console.log(str1Getter());
console.log(strSetter("goodbye"));
console.log(str1Setter("Doe"));