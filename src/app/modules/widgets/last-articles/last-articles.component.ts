import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.scss']
})
export class LastArticlesComponent implements OnInit {

  constructor() {
  }

  @Input() lastNews: any = [];
  activeLink = 0;
  days = ['سبت', 'أحد', 'أثنين', 'ثلاثاء', 'أربع', 'خميس', 'جمعة']

  ngOnInit(): void {
  }

  log($event: number) {
    this.activeLink =  $event;
    console.log('$event', $event)
  }
}
