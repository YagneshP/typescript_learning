/**
 * Discriminated Union
 *
 * - object have prop that indicate what type of shape of object it is
 * - TypeScript is able to perform type narrowing for code that type guards on discriminant properties.
 */

type PoemWithPages_1 = {
  name: string;
  pages: number;
  type: "pages"; // Discrimated Object
};

type PoemWithRhymes_1 = {
  name: string;
  rhymes: boolean;
  type: "rhymes"; // Discrimated Object
};
