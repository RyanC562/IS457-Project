import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruisedetailPage } from './cruisedetail.page';

describe('CruisedetailPage', () => {
  let component: CruisedetailPage;
  let fixture: ComponentFixture<CruisedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruisedetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruisedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
