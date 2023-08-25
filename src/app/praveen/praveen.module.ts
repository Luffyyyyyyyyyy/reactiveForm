import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PraveenRoutingModule } from './praveen-routing.module';
import { PraveenSinghComponent } from './praveen-singh/praveen-singh.component';


@NgModule({
  declarations: [
    PraveenSinghComponent
  ],
  imports: [
    CommonModule,
    PraveenRoutingModule
  ]
})
export class PraveenModule { }
