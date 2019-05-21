export class Cruise {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public image: string,
        public price: number,
        public startDate: Date,
        public endDate: Date,
        public userId: string
    ) {}
}
