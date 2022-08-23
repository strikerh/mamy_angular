import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedForYouComponent } from './selected-for-you.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {SharedComponentsModule} from "../../../shared-components/shared-components.module";



@NgModule({
    declarations: [
        SelectedForYouComponent
    ],
    exports: [
        SelectedForYouComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        SharedComponentsModule
    ]
})
export class SelectedForYouModule { }
