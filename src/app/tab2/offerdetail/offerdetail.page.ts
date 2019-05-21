import { Component, OnInit } from '@angular/core';
import { Cruise } from 'src/app/tab1/cruise.model';
import { ActivatedRoute } from '@angular/router';
import { CruiseService } from 'src/app/tab1/cruise.service';

@Component({
  selector: 'app-offerdetail',
  templateUrl: './offerdetail.page.html',
  styleUrls: ['./offerdetail.page.scss'],
})
export class OfferdetailPage implements OnInit {
  cruise: Cruise;
  id: string;
  constructor(private route: ActivatedRoute, private cruiseService: CruiseService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('cruiseId');
    this.cruise = this.cruiseService.getCruise(this.id);
  }

}
