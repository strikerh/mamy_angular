import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyWidgetComponent } from './family-widget/family-widget.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        FamilyWidgetComponent
    ],
    exports: [
        FamilyWidgetComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule
  ]
})
export class FamilyWidgetModule { }
