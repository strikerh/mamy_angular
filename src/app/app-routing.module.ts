import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout/layout.component";

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'week-by-week', pathMatch: 'full'},
      {
        path: 'week-by-week',
        loadChildren: () => import('./modules/week-by-week/week-by-week.module').then(m => m.WeekByWeekModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
