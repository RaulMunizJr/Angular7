import { Component, OnInit, Input } from '@angular/core';
import { dbConnect } from 'src/app/shared/dbConnect.service';
import { Recipe } from "../recipe";
import { NgForm } from '@angular/forms';

@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  
  loadedPosts:any[]=[];
  
  addRecipe(nf:NgForm){
    //   console.log("Recipe Added!", nf.value);
      this.db.addRecipeToDB(nf.value);
  }
  
    loadRecipies(){
      this.db.loadRecipeFromDB().subscribe(
          posts=>{this.loadedPosts=posts;
              console.log(this.loadedPosts);
          });
          
          
        // console.log(this.loadedPosts);
  }
  constructor(private db:dbConnect) {}

  ngOnInit() {
  }

}
