import {Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],


})
export class LayoutComponent implements OnInit {
  isSticky: boolean = false;

  constructor() {
  }


  @ViewChild('titleToolbar') titleToolbar: MatToolbar | undefined;
  @ViewChild('container1') container1: any;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const titleToolbarElem: any = this.titleToolbar?._elementRef.nativeElement
    // console.log('asd1',asd1 );
    this.isSticky = titleToolbarElem.getBoundingClientRect().top <= 0;

  }

  ngOnInit(): void {

  }

  log($event: Event) {
console.log('sadasd')
  }
}
