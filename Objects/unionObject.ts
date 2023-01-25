/**
 * You want to two more object types to assign to a variable , they have slight different prop
 */

/**
 *  Inferred Object type
 *
 *  if variable intial value can be multiple object types TS will infers the type to be a union of object types
 *  Possible properties will be optional in other object type where it is not present
 *
 */

let sunroof = "yes";
let car =
  sunroof === "yes"
    ? { name: "Civic S16", sunroof: true }
    : { name: "CivicF34", door: 4 };

// car Type : { name : string , sunroof : bool, door?: undefined} | {name : string , sunroof? : undefined, door: number}
//car.door  Type :  number | undefined

/**
 * Explicit Object Type
 *
 * You can asssign union object type by your self , which gives more control.
 * if the value assign with union of objects, then the props which are present in all objects can be accesible
 *
 */
type PoemWithPages = {
  name: string;
  pages: number;
};
type PoemWithRhymes = {
  name: string;
  rhymes: string;
};

type Poem = PoemWithPages | PoemWithRhymes; // Uninon of Object types

const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double", pages: 7 }
    : { name: "Her Kind", rhymes: "true" };

poem.name; // This is ok beacuse both object type has 'name' prop

// poem.pages  This wont access 'pages' prop because 'page' is not available in both object types

// Benefit of that you can narrow down the object based on property exists in object
