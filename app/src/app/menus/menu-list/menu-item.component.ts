import { Component, OnInit, Input } from '@angular/core';

import { Menu } from '../menu';

@Component({
  selector: 'rb-menu-item',
  template: `<ng-content></ng-content>`
})
export class MenuItemComponent implements OnInit {
  @Input() menu: Menu;
  menuId: number;

  constructor() {}

  ngOnInit() {
  }

}
