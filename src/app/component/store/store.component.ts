import { Component, OnInit, SkipSelf, Self } from '@angular/core';
import { AlcoholService } from 'src/app/service/alcohol/alcohol.service';
import { FoodService } from 'src/app/service/food/food.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [{ provide: AlcoholService, useValue: { item: '🍺' } }],//啤酒
  viewProviders: [{ provide: FoodService, useValue: { item: '🍤' } }] //炸物
})
export class StoreComponent implements OnInit {

  constructor(public alcohol: AlcoholService, public food: FoodService) { }

  ngOnInit(): void {
  }

}
