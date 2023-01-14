# Union Type

A union type is combination two or more types.

```typescript
let answer: string | number;
```

Typescript allow only those method which are common to these types only.

Like, here the methods which are present in both `number` and `string` type will only allowed other it gives you an error.

You can assign type in any order.

For more reference see : [union.ts](union.ts)
