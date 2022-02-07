//function as parameters

function printLetter (str : string, callback : () => void) : void {
  console.log(str);
  callback();
};

