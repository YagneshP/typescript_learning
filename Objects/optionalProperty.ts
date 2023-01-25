/**
 * Optional Properties
 *
 * You can include '?' after property name and before colon ':' to indicate that this property is an optional
 * Some props are not required in object so you can assign them as optional
 */

type BookWithOptionalProp = {
  author: string;
  pages?: number; // here 'pages' is optional // 📌 try to remove '?' in front of pages
};

// For this below object we are not assigning 'pages' prop, because 'pages' is optional TS is not giving any error

const theJungleBook_1: BookWithOptionalProp = {
  author: "Rudyarg Hipling",
};

//💡 if the property is optional it can not be exist in object , this is okay , but with union type if prop assigned 'undefined' then it must be present in the object
type Writers = {
  author: string | undefined;
  editor?: string;
};

// Ok: author is provided as undefined
const hasRequired: Writers = {
  author: undefined,
  // here editor prop is not provided , still it is okay because editor is optional
};

// But here author is not provided , it is assigned undefined still it required to be present

// const missingRequired: Writers = {
//   editor: 'The Editor'
// };
