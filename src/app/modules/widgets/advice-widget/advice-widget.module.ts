import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdviceWidgetComponent } from './advice-widget.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
    declarations: [
        AdviceWidgetComponent
    ],
    exports: [
        AdviceWidgetComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AdviceWidgetModule { }
