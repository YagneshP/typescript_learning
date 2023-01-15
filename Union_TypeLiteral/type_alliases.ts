// defining type alliases

type MyType = string | number | undefined;

// Type aliases are not complied in js file, only exist in typescript

//###--combinig type alliases---###

type Id = string | number;

type IdMayBe = Id | null; // using type Id alliase

// You can declare as well type aliase later before it usage
