import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditofferPage } from './editoffer.page';

describe('EditofferPage', () => {
  let component: EditofferPage;
  let fixture: ComponentFixture<EditofferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditofferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditofferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
