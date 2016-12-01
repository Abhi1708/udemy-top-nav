import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuBookAppComponent } from "./menu-book.component";
import { DropdownDirective } from "./dropdown.directive";
import { MenusComponent } from "./menus/menus.component";
import { MenuListComponent } from "./menus/menu-list/menu-list.component";
import { MenuDetailComponent } from "./menus/menu-detail/menu-detail.component";
import { MenuItemComponent } from "./menus/menu-list/menu-item.component";
import { MenuService } from "./menus/menu.service";

@NgModule({
  declarations: [
    MenuBookAppComponent,
    DropdownDirective,
    MenusComponent,
    MenuListComponent,
    MenuDetailComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ MenuService],
  bootstrap: [MenuBookAppComponent]
})
export class AppModule {}
