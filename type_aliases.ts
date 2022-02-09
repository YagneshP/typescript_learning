//type aliases

//it is common to use same "type" more then once


type Point = { x: number, y: number} // can use ',' or ';'
type Coords = { x: number; y: number} 

function addCoordinates (point1 : Point, point2 : Coords): Coords{
  return { x: point1.x + point2.x, y: point1.y + point2.y}
};

console.log(addCoordinates({x: 2, y: 0},{x:1, y:3}));

//can not create different versions of type