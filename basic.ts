let userName: string = 'Yagnesh';

let isTrue: boolean = true;

userName += 'Parekh';

console.log(userName);

//array type
const arr: string[]  = userName.split(' ');
// you can specify array type like 'Array<number>' this also
const numArr: Array<number> = [1,2];

//object types

const myPerson: {
  firstName: string,
  lastName: string
} = {
  firstName: 'Yagnesh',
  lastName: 'Parekh'
};

// with interface keyword

interface Person {
  firstName: string,
  lastName: string
}


const anotherPerson: Person = {
  firstName: 'Jon',
  lastName: 'Doe'
}

// const newArr = [{a:'A', b:'B', c:'C'}, {d:'D', e:'E'}];

// const bArr = newArr.map(el => el.forEach()) // just checking if you try to excute array method on object then typescript gives you erro
