import { Component, OnInit, Self } from '@angular/core';
import { AlcoholService } from 'src/app/service/alcohol/alcohol.service';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.scss'],
  providers: [{ provide: AlcoholService, useValue: { item: '幹，我喝到假酒' } }]
})
export class SelfComponent implements OnInit {

  item = ''
  constructor(@Self() alcohol: AlcoholService) {
    this.item = alcohol.item;
  }

  ngOnInit(): void {
  }

}
