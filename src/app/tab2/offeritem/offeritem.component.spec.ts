import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferitemComponent } from './offeritem.component';

describe('OfferitemComponent', () => {
  let component: OfferitemComponent;
  let fixture: ComponentFixture<OfferitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferitemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
