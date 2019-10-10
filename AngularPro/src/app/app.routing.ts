import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from './recipes/recipes.component';

export const AppRouting = RouterModule.forRoot([
    {path:'shoppinglist', component:ShoppingListComponent},
    {path:'recipies/:id', component:RecipesComponent}
    ])