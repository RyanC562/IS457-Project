import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [];

  get bookings() {
    return [...this._bookings];
    }
    constructor() { }

    addBooking(
      cruiseId: string,
      cruiseTitle: string,
      cruiseImage: string,
      firstName: string,
      lastName: string,
      guestNum: number,
      startDate: Date,
      endDate: Date
    ) { const newBooking = new Booking(
        Math.random().toString(),
        cruiseId,
        'u1',
        cruiseTitle,
        cruiseImage,
        firstName,
        lastName,
        guestNum,
        startDate,
        endDate
        );
        this._bookings.push(newBooking);
        console.log(this._bookings);
    }
    CancelBooking(bookingId: string) {
      const position = this._bookings.findIndex((bookingEl: Booking) => {
        return bookingEl.id === bookingId;
      });
      this._bookings.splice(position, 1);
    }
  }
