import { Component } from '@angular/core';
import {CocktailModel} from '../../models/cocktailModel'
import {CocktailService} from '../../services/cocktail.service'

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent {
  title = 'app';
  constructor(private cocktailService:CocktailService){}
  cocktails: CocktailModel[];

  getCocktails():void{
        var response = this.cocktailService.getCocktails().subscribe((data:CocktailModel[])=>this.cocktails=data);
        console.log(response);  
    }
}