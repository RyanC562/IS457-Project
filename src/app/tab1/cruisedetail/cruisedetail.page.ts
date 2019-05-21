import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cruise } from '../cruise.model';
import { CruiseService } from '../cruise.service';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { CreatebookingPage } from 'src/app/booking/createbooking/createbooking.page';
import { createHostListener } from '@angular/compiler/src/core';
import { BookingService} from 'src/app/booking/booking.service';

@Component({
  selector: 'app-cruisedetail',
  templateUrl: './cruisedetail.page.html',
  styleUrls: ['./cruisedetail.page.scss'],
})
export class CruisedetailPage implements OnInit {
  cruise: Cruise;
  id: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cruiseService: CruiseService,
    private modalCtrl: ModalController,
    private actionsheetCtrl: ActionSheetController,
    private bookingService: BookingService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('cruiseId');
    this.cruise = this.cruiseService.getCruise(this.id);
  }

  onBookCruise() {
    this.actionsheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler : () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });
  }
  async openBookingModal(mode: 'select') {
    console.log(mode);
    const modal = await this.modalCtrl.create({
      component: CreatebookingPage,
      componentProps: {selectedCruise: this.cruise, selectedMode: mode}
    });
    await modal.present();
    modal.onDidDismiss().then((result: any) => {
      if (result.role === 'confirm') {
        const data = result.data.bookingData;
        this.bookingService.addBooking(
          this.cruise.id,
          this.cruise.title,
          this.cruise.image,
          data.firstName,
          data.lastName,
          data.guestNumber,
          data.startDate,
          data.endDate
        );
      }
    });
  }
}
