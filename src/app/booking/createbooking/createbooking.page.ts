import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Cruise } from 'src/app/tab1/cruise.model';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.page.html',
  styleUrls: ['./createbooking.page.scss'],
})
export class CreatebookingPage implements OnInit {
  @Input() selectedCruise: Cruise;
  @Input() selectedMode: 'select';
  @ViewChild('f') form: NgForm;
  startDate: string;
  endDate: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    const startDate = new Date(this.selectedCruise.startDate);
    const endDate = new Date(this.selectedCruise.endDate);
    {
      this.startDate = new Date(
        startDate.getTime() +
        Math.random() *
        (endDate.getTime() - startDate.getTime())
      ).toISOString();

      this.endDate = new Date(
        new Date(this.startDate).getTime() +
        Math.random() *
        (endDate.getTime() - new Date(this.startDate).getTime())
      ).toISOString();
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  onBookCruise() {
    this.modalCtrl.dismiss(
      {
        bookingData: {
          firstName: this.form.value['first-name'],
          lastName: this.form.value['last-name'],
          guestNumber: this.form.value['guest-number'],
          startDate: this.form.value['start-date'],
          endDate: this.form.value['end-date']
        }
      },
      'confirm'
    );
  }
}
