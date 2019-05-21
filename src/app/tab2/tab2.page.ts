import { Component, OnInit,  } from '@angular/core';
import { CruiseService } from '../tab1/cruise.service';
import { Cruise } from '../tab1/cruise.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  offers: Cruise[];
  constructor(private cruiseService: CruiseService) {}
  ngOnInit() {
    this.offers = this.cruiseService.cruises;
  }
  ionViewWillEnter() {
    this.offers = this.cruiseService.cruises;
  }
}
