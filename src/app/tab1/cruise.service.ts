import { Injectable } from '@angular/core';
import { Cruise } from './cruise.model';


@Injectable({
  providedIn: 'root'
})
export class CruiseService {
  private _cruises: Cruise[] = [
    new Cruise(
      'c1',
      'Bahamas Cruise',
      'A getaway to the calm and beautiful islands of the Bahamas.',
      '../assets/imgs/BahamasCruise.jpg',
      300.00,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'u1',
    ),
    new Cruise(
      'c2',
      'Hawaii Cruise',
      'A trip to the renowned tropical islands of Hawaii.',
      '../assets/imgs/HawaiiCruise.jpg',
      150.00,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'u1',
    ),
    new Cruise(
      'c3',
      'Mexico Cruise',
      'Explore the distinct and culturally rich ports of Mexico',
      '../assets/imgs/MexicoCruise.jpg',
      275.00,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'u1',
    ),
  ];
  get cruises() {
    return[...this._cruises];
  }
  constructor() {}

  getCruise(id: string) {
    return {...this.cruises.find(c => c.id === id)};
  }

  addCruise(
    title: string,
    description: string,
    price: number,
    startDate: Date,
    endDate: Date) {

    const newCruise = new Cruise(
    Math.random().toString(),
    title,
    description,
    '../assets/imgs/BahamasCruise.jpg',
    price,
    startDate,
    endDate,
    'u1'
    );
  }
  updateOffer(cruiseId: string, title: string, description: string) {
    const updatedCruiseIndex = this._cruises.findIndex(cr => cr.id === cruiseId);
    const updatedCruise = [...this._cruises];
    const oldCruise = updatedCruise[updatedCruiseIndex];
    updatedCruise[updatedCruiseIndex] = new Cruise(
      oldCruise.id,
      title,
      description,
      oldCruise.image,
      oldCruise.price,
      oldCruise.startDate,
      oldCruise.endDate,
      oldCruise.userId
    );
    this._cruises.splice(updatedCruiseIndex, 1);
    this._cruises.push(updatedCruise[updatedCruiseIndex]);
  }
}
