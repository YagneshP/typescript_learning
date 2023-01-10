# Typescript Notes

##### Install typcript globally at your machine

`npm i -g typescript`

you can run now typescript from your command line with `tsc` command

(tsc - **T**ype **S**cript **C**ompiler)

check your typescript version with `--version` flag

`tsc --version`

##### Install Typescript to The Project (dev)

`npm install typescript`

##### Install TS-Node (dev)

`npm install ts-node`

##### set for tsconfig.json

` npx tsc --init`

- tsconfig.json is used for settings that tells Typescript to how to compile and analyze the code

### Type Anotation

When the variable doesnt have intial value , Typescript won't infer the type for that variable , and by default it will assign the type `any` to that variable. This Variable are **\*evolving any.** \*

Check [evolvingAny.ts]()

### Primitive types

Check [primitive.ts]()

### Array

Check [array.ts](array.ts)

### any

- when you don't want to check for type you can assign type any

### Function

check [function.ts](function.ts)

### optional

- check [optional.ts](optional.ts)

### class

- check [carClass-ts.ts](carClass-ts.ts)
