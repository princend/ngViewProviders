import { Component, Host, OnInit } from '@angular/core';
import { AlcoholService } from 'src/app/service/alcohol/alcohol.service';
import { HostService } from 'src/app/service/host/host.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  providers: [{ provide: AlcoholService, useClass: HostService }]
})
export class HostComponent implements OnInit {
  item = '';
  constructor(@Host() private alcohol: AlcoholService) {
    this.item = this.alcohol.item;
  }

  ngOnInit(): void {

  }

}
