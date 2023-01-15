# Union Type

A union type is combination two or more types.

```typescript
let answer: string | number;
```

Typescript allow only those method which are common to these types only.

Like, here the methods which are present in both `number` and `string` type will only allowed other it gives you an error.

You can assign type in any order.

For more reference see : [union.ts](union.ts)

## Narrowing

You can narrow down the types by assigning, using condition, typeof check.

For more reference see : [narrow.ts](narrow.ts)

## Literal Types

```typescript
const literal_value = "Yagnesh";
```

Here the type for the `literal_value` is specifically 'Yagnesh'.
With `const` keyword the type for the variable become its type.
**primitive Types** are union to literal type, meaning here 'string' is union for the 'Yagnesh' type.

### Strict Null checking

`strictNullChecks` allows how to define 'null' and 'undefined' type to variable.

if it is `false` , Typescript add union type `null|undefined` for the variable.

It is best practice to set it to be `true`
