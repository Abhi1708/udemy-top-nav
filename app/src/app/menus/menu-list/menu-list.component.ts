import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Menu } from '../menu';
import { MenuService } from "../menu.service";

@Component({
  selector: 'rb-menu-list',
  templateUrl: 'menu-list.component.html'
})
export class MenuListComponent implements OnInit {
  menus: Menu[] = [];

  @Output() menuSelected = new EventEmitter<Menu>();

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menus = this.menuService.getMenus();
  }

  onSelected(menu: Menu) {
    this.menuSelected.emit(menu);
  }

}
