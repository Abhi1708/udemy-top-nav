import { Injectable } from '@angular/core';

import { Menu } from "./menu";
import { Ingredient } from "../shared";

@Injectable()
export class MenuService {
  private menus: Menu[] = [
    new Menu('Loans', '', '', [
      new Ingredient('form 1034E', 2),
      new Ingredient('Bill of sale', 1)
    ]),
    new Menu('Contracts', '', '', [
      new Ingredient('view contracts', 2),
      new Ingredient('contract results', 1)
      ])
  ];

  constructor() {}

  getMenus() {
    return this.menus;
  }

}
