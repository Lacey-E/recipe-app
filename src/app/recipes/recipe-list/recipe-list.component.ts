import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'test desc', 'https://www.forkinthekitchen.com/wp-content/uploads/2022/01/220113.stir_.fry_.sauce-0216-683x1024.jpg')
  ];

  constructor() { }
  
  ngOnInit() {   
  }
  
  
  }
  
