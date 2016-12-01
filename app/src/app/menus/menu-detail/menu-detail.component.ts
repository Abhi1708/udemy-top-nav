import { Component, OnInit, Input } from '@angular/core';

import { Menu } from "../menu";

@Component({
  selector: 'rb-menu-detail',
  templateUrl: 'menu-detail.component.html'
})
export class MenuDetailComponent implements OnInit {
  @Input() selectedMenu: Menu;

  constructor() {}

  ngOnInit() {
  }

  
}
