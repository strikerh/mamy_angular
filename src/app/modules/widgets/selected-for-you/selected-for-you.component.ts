import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-selected-for-you',
  templateUrl: './selected-for-you.component.html',
  styleUrls: ['./selected-for-you.component.scss']
})
export class SelectedForYouComponent implements OnInit {

  constructor() {
  }

  @Input() selectedArticles: any = [];

  ngOnInit(): void {
    setTimeout(() => {
      console.log('selectedArticles', this.selectedArticles)
    }, 1000);


  }
}
