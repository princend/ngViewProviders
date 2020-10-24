import { Component } from '@angular/core';
import { AlcoholService } from './service/alcohol/alcohol.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AlcoholService]
})
export class AppComponent {
  title = 'ngViewProviders';
  item = ''
  /**
   *
   */
  constructor(private alcohol: AlcoholService) {

    this.item = this.alcohol.item;
  }
}
