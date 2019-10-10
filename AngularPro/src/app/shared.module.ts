import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorChanger } from './shared/colorchanger.directive';
import { Recipe } from './shared/recipe.pipe';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    ColorChanger,
    Recipe,
    DropdownDirective
  ],
  exports: [
      ColorChanger,
      Recipe,
      DropdownDirective
      ],
  imports: [
    BrowserModule
  ],
  
})
export class SharedModule {}
