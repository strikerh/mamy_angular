import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    LayoutComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatDividerModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class LayoutModule { }
