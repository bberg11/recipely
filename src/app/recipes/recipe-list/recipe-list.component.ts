import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe One',
      'Description of Recipe One. Yadda yadda yadda',
      'https://via.placeholder.com/150'
    ),
    new Recipe(
      'Recipe Two',
      'Description of Recipe Two. Nom nom nom',
      'https://via.placeholder.com/150'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  randomNumber(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }
}
