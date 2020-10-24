import { Component, OnInit, SkipSelf } from '@angular/core';
import { AlcoholService } from 'src/app/service/alcohol/alcohol.service';

@Component({
  selector: 'app-skip-self',
  templateUrl: './skip-self.component.html',
  styleUrls: ['./skip-self.component.scss'],
  providers: [{ provide: AlcoholService, useValue: { item: '幹，你是喝到假酒喔?!' } }]
})
export class SkipSelfComponent implements OnInit {
  item = ''
  constructor(
    @SkipSelf() private alcohol: AlcoholService
  ) { this.item = this.alcohol.item; }

  ngOnInit(): void {
  }

}
