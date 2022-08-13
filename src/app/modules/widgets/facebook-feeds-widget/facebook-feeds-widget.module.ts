import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookFeedsWidgetComponent } from './facebook-feeds-widget.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [
    FacebookFeedsWidgetComponent
  ],
  exports: [
    FacebookFeedsWidgetComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class FacebookFeedsWidgetModule { }
