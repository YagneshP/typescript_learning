function pluck <DataType, KeyType extends keyof DataType> (items : DataType[], key: KeyType): DataType[KeyType][] {
  return items.map(item => item[key] );
};

const vessel = [
  { name : 'Tapeli', size : '2L'},
  { name : 'Bottle', shape: 'cylinder', size: '3L'}
];

console.log(pluck(vessel, 'size'));


interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart : BaseEvent & { quantity: number, productId: string},
  checkOut : BaseEvent
}

function sendEvent <Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
  console.log([name, data]);
};


sendEvent("addToCart", {quantity: 1, productId: "12", 'time' : 12, 'user':'baz'});