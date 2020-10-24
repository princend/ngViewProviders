import { Component, OnInit, SkipSelf, Self } from '@angular/core';
import { AlcoholService } from 'src/app/service/alcohol/alcohol.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [AlcoholService]
})
export class StoreComponent implements OnInit {

  constructor(private alcohol: AlcoholService) { }

  ngOnInit(): void {
  }

}
