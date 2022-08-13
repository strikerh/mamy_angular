import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekByWeekComponent } from './week-by-week/week-by-week.component';
import {Route, RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {FamilyWidgetModule} from "../widgets/family-widget/family-widget.module";
import { WeekNavigationComponent } from './week-by-week/components/week-navigation/week-navigation.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import {AdviceWidgetModule} from "../widgets/advice-widget/advice-widget.module";
import {LastArticlesModule} from "../widgets/last-articles/last-articles.module";
import {SelectedForYouModule} from "../widgets/selected-for-you/selected-for-you.module";
import {FacebookFeedsWidgetModule} from "../widgets/facebook-feeds-widget/facebook-feeds-widget.module";

const academyRoutes: Route[] = [
  {
    path     : '',
    component: WeekByWeekComponent,
  }
];


@NgModule({
  declarations: [
    WeekByWeekComponent,
    WeekNavigationComponent
  ],
    imports: [
        RouterModule.forChild(academyRoutes),
        CommonModule,
        MatCardModule,
        FamilyWidgetModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        AdviceWidgetModule,
        LastArticlesModule,
        SelectedForYouModule,
        FacebookFeedsWidgetModule
    ]
})
export class WeekByWeekModule { }
