import { Component, OnInit } from '@angular/core';
import { CruiseService } from './cruise.service';
import { Cruise } from './cruise.model';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  loadedCruises: Cruise[];
  constructor(private cruiseService: CruiseService) {}
  ngOnInit() {
    this.loadedCruises = this.cruiseService.cruises;
  }
  ionViewWillEnter() {
    this.loadedCruises = this.cruiseService.cruises;
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
