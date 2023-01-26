/**
 * InterSection Types
 *
 *  using '&' operator you can combine more than two object types
 *  usally used with aliased types
 *
 */

type ArtWork = {
  genre: string;
  name: string;
};

type Writing = {
  pages: number;
  name: string;
};

// Intersectin Type

type WrittenArt = ArtWork & Writing;

/*
type WrittenArt = {
  name: string;
  page: number;
  genre: string;
}
 */

/**
 *  Drawback of using complex intersection type
 *
 *  1) Long assignability Error
 *  2) 'never'  - Intersection type can be used an some time it create an impossible type
 *              - like assigning two primitive types (number & string) would create 'never' type
 */
