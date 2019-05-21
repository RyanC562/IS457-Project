export class Booking {
    constructor(
        public id: string,
        public cruiseId: string,
        public userId: string,
        public cruiseTitle: string,
        public cruiseImage: string,
        public firstName: string,
        public lastName: string,
        public guestNum: number,
        public startDate: Date,
        public endDate: Date
    ) {}
}
