import {Component, OnInit} from '@angular/core';
import {FuseAnimations} from "../../../../@fuse/animations";
import {MmyBackendService} from "../../../services/mmy-backend.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-week-by-week',
  templateUrl: './week-by-week.component.html',
  styleUrls: ['./week-by-week.component.scss'],
  animations: FuseAnimations,
})
export class WeekByWeekComponent implements OnInit {
  weeklyFeeds: any;

  constructor(private _mmyApi: MmyBackendService) {
  }

  ngOnInit(): void {
    this._mmyApi.weeklyFeeds(1, 6).subscribe((weeklyFeeds) => {
debugger
      this.weeklyFeeds = weeklyFeeds.feeds
      console.log('this.weeklyFeeds', weeklyFeeds);
    })


  }

}
