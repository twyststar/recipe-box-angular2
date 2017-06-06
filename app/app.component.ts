import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Recipe Box</h1>
  <ul>
    <li class="clicky" *ngFor="let currentRecipe of recipes" (click)="showDetails(currentRecipe)"><h3>{{currentRecipe.title}}</h3>
    </li>
  </ul>
  <div *ngIf="selectedRecipe">

    <h3>{{selectedRecipe.title}}</h3>
    <ul>
      <li class="link" *ngFor="let currentIngredient of selectedRecipe.ingredients">{{currentIngredient}}</li>
    </ul>
    <h4>Directions:</h4>
    <p><em>{{selectedRecipe.directions}}</em></p>
    <button (click)="goAway()">Hide Details</button>
    <button (click)="edit(selectedRecipe)">Edit Recipe</button>
    <div  *ngIf="editRecipe">
      <h4>Edit Recipe:</h4>
      <label>Enter Recipe Title:</label>
      <input class="form-control"[(ngModel)]="selectedRecipe.title">
      <label>Enter Recipe Directions:</label>
      <textarea class="form-control" rows="3" [(ngModel)]="selectedRecipe.directions"></textarea>


      <label>Enter Recipe Ingredients:</label>
      <input class="form-control" *ngFor="let selected of selectedRecipe.ingredients; let i = index; trackBy $index" [(ngModel)]="selectedRecipe.ingredients[i]">

      <button (click)="editAway()">Done Editing</button>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Burrito', 'Wrap all the bits in tortilla. Heat if desired, drink beer.', [' tortilla', ' meat', ' cheese', ' whatever else is on hand', ' beer']),

    new Recipe('Chicken Parm', 'Bread the chicken, cook it, serve with pasta, drink beer.', [' chicken breast', ' bread crumbs', ' egg', ' pasta', ' marinara sauce', ' cheese', ' beer']),

    new Recipe('Steak and Eggs', 'Cook eggs, cook steak, drink beer.', [' Steak', ' eggs', ' mashed potato', ' beer'])
  ];

  editRecipe = null;
  selectedRecipe = null;
  showDetails(currentRecipe){
    this.selectedRecipe = currentRecipe;
  }
  goAway(){
    this.selectedRecipe = null;
  }
  edit(currentRecipe){
    this.editRecipe = currentRecipe;
  }
  editAway(){
    this.editRecipe = null;
  }
}

export class Recipe {
  constructor(public title: string, public directions: string, public ingredients: string[]) { }

}


// <ul>
//   <li *ngFor="let currentIngredient of currentRecipe.ingredients">{{currentIngredient}}</li>
// </ul>
// <h4>Directions:</h4>
// <p><em>{{currentRecipe.directions}}</em></p>
