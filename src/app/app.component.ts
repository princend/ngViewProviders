import { Component } from '@angular/core';
import { AlcoholService } from './service/alcohol/alcohol.service';
import { FoodService } from './service/food/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngViewProviders';

  /**
   *
   */
  constructor(public alcohol: AlcoholService, public food: FoodService) {

  }
}
