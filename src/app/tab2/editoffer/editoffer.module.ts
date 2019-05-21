import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditofferPage } from './editoffer.page';

const routes: Routes = [
  {
    path: '',
    component: EditofferPage
  },
  {
    path: ':cruiseId',
    component: EditofferPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditofferPage]
})
export class EditofferPageModule {}
