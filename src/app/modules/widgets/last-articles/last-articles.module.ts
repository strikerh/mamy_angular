import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastArticlesComponent } from './last-articles.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {SharedComponentsModule} from "../../../shared-components/shared-components.module";



@NgModule({
    declarations: [
        LastArticlesComponent
    ],
    exports: [
        LastArticlesComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule,
        SharedComponentsModule
    ]
})
export class LastArticlesModule { }
