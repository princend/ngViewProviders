import { Component, OnInit, Optional, Self } from '@angular/core';
import { AlcoholService } from 'src/app/service/alcohol/alcohol.service';

@Component({
  selector: 'app-self-no-data',
  templateUrl: './self-no-data.component.html',
  styleUrls: ['./self-no-data.component.scss']
})
export class SelfNoDataComponent implements OnInit {
  item = ''

  constructor(@Self() @Optional() alcohol?: AlcoholService) {
    // this.item = alcohol.item;
  }

  ngOnInit(): void {
  }

}
