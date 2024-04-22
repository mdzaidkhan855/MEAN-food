import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  tags?:Tag[];

  constructor(foodService:FoodService,activatedRoute:ActivatedRoute,router:Router){
    // this.tags = foodService.getAllTags();

    console.log("Inside Tag component");
    
    foodService.getAllTags().subscribe((tags)=>{
      console.log("Inside getAllTags:" , tags);
      this.tags = tags;
    });
  }
}
