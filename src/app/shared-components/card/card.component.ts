import {
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {
  CdkDragDrop,
  CdkDragMove,
  CdkDragStart,
} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() activeTap: any = 0;
  tabs: string[] = [''];
  tapCount: number = 0;
  @Input() tabTitles?: string[];
  @Input() title?: string;
  @Output() archive = new EventEmitter<string>();
  @ViewChild('box') private box: ElementRef<HTMLDivElement> | undefined;
  boxHeight?: number = 0;
  dragDirection: 'left' | 'right' = 'left';
  opacity = 0;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.boxHeight = this.box?.nativeElement.clientHeight;
    debugger
  }

  ngOnInit(): void {
  }

  tabNavigate(i: number) {
    this.activeTap = i;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('tabTitles' in changes) {
      if (this.tabTitles && this.tabTitles?.length > 0) {
        this.tapCount = this.tabTitles.length;
      }
    }
  }

  dragStarted($event: CdkDragStart) {
    this.boxHeight = this.box?.nativeElement.offsetHeight;
  }

  dragDropped($event: CdkDragDrop<any>) {
    console.log('dragDropped', $event.distance)
    if (Math.abs($event.distance.x) > 150) {
      console.log('Doo Action')
      this.archive.emit(this.dragDirection);
    }
  }


  dragMoved($event: CdkDragMove) {
    this.dragDirection = $event.distance.x > 0 ? 'left' : 'right';
    this.opacity = Math.abs($event.distance.x)  / 150 ;
  }
}
