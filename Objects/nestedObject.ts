/**
 * Nested Object Type
 */

/*
  You can assign object type inside object type with {..} (syntax) , not with primitive type (object)
 */

type Book = {
  name: string;
  pages: number;
  // Nested object type
  author: {
    firstName: string;
    lastName: string;
  };
};

let theJungleBook: Book = {
  name: "The Jungle Book",
  pages: 206,
  author: {
    firstName: "Rudyard",
    lastName: "Hipling", // 📌 uncomment this property , Typescript gives an error of missing prop 'lastName'
  },
};

// You can refactor this code by extracting out 'author' object type into its own aliased type
// Which help you to provide with better error messages

/*
// New Author object type
type Author = {
  firstName: string;
  lastName: string;
}

type Book = {
  author : Author;
  name : string;
  pages : number;
}

*/
