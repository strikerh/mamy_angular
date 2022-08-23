import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule,
        DragDropModule,
        MatMenuModule
    ]
})
export class SharedComponentsModule { }
