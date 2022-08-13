import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-navigation',
  templateUrl: './week-navigation.component.html',
  styleUrls: ['./week-navigation.component.scss']
})
export class WeekNavigationComponent implements OnInit {
  weeks: any[] = [10,9,8,7,6,5];

  constructor() { }

  ngOnInit(): void {
  }

}
