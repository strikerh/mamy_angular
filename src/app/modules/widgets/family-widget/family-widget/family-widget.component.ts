import {Component, OnInit} from '@angular/core';
import {FuseAnimations} from "../../../../../@fuse/animations";

@Component({
  selector: 'app-family-widget',
  templateUrl: './family-widget.component.html',
  styleUrls: ['./family-widget.component.scss'],
  animations: FuseAnimations,
})
export class FamilyWidgetComponent implements OnInit {

  constructor() {
  }

  selectedKid: { imgUrl: string; dob: string; name: string; disc: string; age: string } = {
    imgUrl: '',
    dob: '',
    name: '',
    disc: '',
    age: ''
  } ;

  family = [
    {
      name: 'فيروز',
      imgUrl: 'https://i.imgur.com/qgNOije.jpeg',
      dob: '12/04/2020',
      age: 'سنتسن و 3 أشهر',
      disc: 'الأبن الأكبر',
    },
    {
      name: 'أحلام',
      imgUrl: 'https://i.imgur.com/2EB2IrC.jpeg',
      dob: '12/04/2020',
      age: 'سنة و 3 أشهر',
      disc: 'الأبن الوسطاني',
    },
    {
      name: 'أحمد',
      imgUrl: 'https://i.imgur.com/I6EfdEP.jpeg',
      dob: '22/08/2021',
      age: ' 3 أشهر',
      disc: 'آخر العنقود',
    }
  ]
  tab = 0

  ngOnInit(): void {

  }

  selectKid(kid: { imgUrl: string; dob: string; name: string; disc: string; age: string } ) {
    this.selectedKid = kid;
    this.tab=1
  }
}
