let rocker; // hover over the type is assigned to the variable is "any"

// Now let's assign the string value to it

rocker = "How about now?"; // still it is any

// But now if you access the string method on that Typescript infer it as string

rocker.toLocaleUpperCase();

// Can you assign the number value to it?

rocker = 1;
// No error , because this variable is evolving any , Typescript evolve the understanding the type of the variable each time it assign to a new value

rocker.toLocaleString();

//rocker.toLocaleUpperCase(); // Error 2339 : - Property doesnot exist on type number
