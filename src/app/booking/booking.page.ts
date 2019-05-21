import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { IonItemSliding } from '@ionic/angular';
import { Booking } from './booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }
  onCancelBooking(bookingId: string, slidingEl: IonItemSliding) {
    this.bookingService.CancelBooking(bookingId);
    this.loadedBookings = this.bookingService.bookings;
    slidingEl.close();
  }
}
