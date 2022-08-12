import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekByWeekComponent } from './week-by-week/week-by-week.component';
import {Route, RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {FamilyWidgetModule} from "../widgets/family-widget/family-widget.module";

const academyRoutes: Route[] = [
  {
    path     : '',
    component: WeekByWeekComponent,
  }
];


@NgModule({
  declarations: [
    WeekByWeekComponent
  ],
  imports: [
    RouterModule.forChild(academyRoutes),
    CommonModule,
    MatCardModule,
    FamilyWidgetModule
  ]
})
export class WeekByWeekModule { }
