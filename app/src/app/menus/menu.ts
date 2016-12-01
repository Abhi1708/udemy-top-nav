import { Ingredient } from "../shared";

export class Menu {
  constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {}
}
