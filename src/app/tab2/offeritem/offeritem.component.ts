import { Component, OnInit, Input } from '@angular/core';
import { Cruise } from 'src/app/tab1/cruise.model';

@Component({
  selector: 'app-offeritem',
  templateUrl: './offeritem.component.html',
  styleUrls: ['./offeritem.component.scss'],
})
export class OfferitemComponent implements OnInit {
  @Input() offer: Cruise;
  constructor() { }

  ngOnInit() {}
  getDummyDate() {
    return new Date();
  }
}
