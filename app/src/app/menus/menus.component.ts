import { Component, OnInit } from '@angular/core';

import { Menu } from "./menu";

@Component({
  selector: 'rb-menus',
  templateUrl: 'menus.component.html'
})
export class MenusComponent implements OnInit {
  selectedMenu: Menu;

  constructor() {}

  ngOnInit() {
  }
}
