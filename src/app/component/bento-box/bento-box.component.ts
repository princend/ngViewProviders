import { Component, OnInit } from '@angular/core';
import { AlcoholService } from 'src/app/service/alcohol/alcohol.service';
import { FoodService } from 'src/app/service/food/food.service';

@Component({
  selector: 'app-bento-box',
  templateUrl: './bento-box.component.html',
  styleUrls: ['./bento-box.component.scss'],
  providers: [{ provide: AlcoholService, useValue: { item: '🍺' } }],
  viewProviders: [{ provide: FoodService, useValue: { item: '🍤' } }]
})
export class BentoBoxComponent implements OnInit {

  constructor(public alcohol: AlcoholService, public food: FoodService) { }

  ngOnInit(): void {
  }

}
