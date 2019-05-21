import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'cruisedetail', loadChildren: './tab1/cruisedetail/cruisedetail.module#CruisedetailPageModule' },
  { path: 'offerdetail', loadChildren: './tab2/offerdetail/offerdetail.module#OfferdetailPageModule' },
  { path: 'newoffer', loadChildren: './tab2/newoffer/newoffer.module#NewofferPageModule' },
  { path: 'editoffer', loadChildren: './tab2/editoffer/editoffer.module#EditofferPageModule' },
  { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule' },
  { path: 'createbooking', loadChildren: './booking/createbooking/createbooking.module#CreatebookingPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
