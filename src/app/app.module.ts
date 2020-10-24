import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlcoholService } from './service/alcohol/alcohol.service';
import { StoreComponent } from './component/store/store.component';
import { HostComponent } from './component/host/host.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlcoholService],
  bootstrap: [AppComponent]
})
export class AppModule { }
