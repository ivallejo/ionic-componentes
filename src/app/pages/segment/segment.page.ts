import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  superHeroes: Observable<any>;
  publisher = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getSuperHeores();
  }
  segmentChanged(event) {
    this.publisher = event.detail.value === 'todos' ? '' : event.detail.value;
    // console.log(event);
  }
}
