import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CruisedetailPage } from './cruisedetail.page';

const routes: Routes = [
  {
    path: '',
    component: CruisedetailPage
  },
  {
    path: ':cruiseId',
    component: CruisedetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CruisedetailPage]
})
export class CruisedetailPageModule {}
