import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlcoholService } from './service/alcohol/alcohol.service';
import { StoreComponent } from './component/store/store.component';
import { HostComponent } from './component/host/host.component';
import { SelfNoDataComponent } from './component/self-no-data/self-no-data.component';
import { SkipSelfComponent } from './component/skip-self/skip-self.component';
import { SelfComponent } from './component/self/self.component';
import { SetComponent } from './component/set/set.component';
import { BentoBoxComponent } from './component/bento-box/bento-box.component';



@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HostComponent,
    SelfNoDataComponent,
    SkipSelfComponent,
    SelfComponent,
    SetComponent,
    BentoBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlcoholService],
  bootstrap: [AppComponent]
})
export class AppModule { }
