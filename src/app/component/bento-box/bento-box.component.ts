import { Component, Host, OnInit, SkipSelf } from '@angular/core';
import { AlcoholService } from 'src/app/service/alcohol/alcohol.service';
import { FoodService } from 'src/app/service/food/food.service';

@Component({
  selector: 'app-bento-box',
  templateUrl: './bento-box.component.html',
  styleUrls: ['./bento-box.component.scss'],
  providers: [{ provide: AlcoholService, useValue: { item: '🍺' } }],
  viewProviders: [{ provide: FoodService, useValue: { item: '🍤' } }],
  // viewProviders: [{ provide: FoodService, useValue: { item: '🍝' } }]


})
export class BentoBoxComponent implements OnInit {

  constructor(public alcohol: AlcoholService, public food: FoodService) { }

  /**
   *  使用SkipSelf() viewProviders原本顯示的炸蝦會變牛排
   */
  // constructor(public alcohol: AlcoholService, @SkipSelf() public food: FoodService) { }


  ngOnInit(): void {
  }

}
