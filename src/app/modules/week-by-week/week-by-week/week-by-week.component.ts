import { Component, OnInit } from '@angular/core';
import {FuseAnimations} from "../../../../@fuse/animations/public-api";
@Component({
  selector: 'app-week-by-week',
  templateUrl: './week-by-week.component.html',
  styleUrls: ['./week-by-week.component.scss'],
  animations   : FuseAnimations,
})
export class WeekByWeekComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
