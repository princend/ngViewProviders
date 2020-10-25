import { Component, OnInit } from '@angular/core';
import { AlcoholService } from 'src/app/service/alcohol/alcohol.service';
import { FoodService } from 'src/app/service/food/food.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {

  constructor(public alcohol: AlcoholService, public food: FoodService) { }

  ngOnInit(): void {
  }

}
