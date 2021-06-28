import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';

export class FlightsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'FlightsRoutes');
    }

    configureRoutes() {

    //CheckPrice
    this.app.route('/CheckPrice')
    .post((req: express.Request, res: express.Response) => {
        res.status(200).send('CheckPrice  For Flights');
    })
     //Condition
     this.app.route('/Condition')
     .post((req: express.Request, res: express.Response) => {
         res.status(200).send('Flight Condition');
     })
     //GetPassengerInfo
     this.app.route('/GetPassengerInfo')
     .post((req: express.Request, res: express.Response) => {
         res.status(200).send('GetPassengerInfo');
     })
     //IssueReservation
     this.app.route('/IssueReservation')
     .post((req: express.Request, res: express.Response) => {
         res.status(200).send('IssueReservation');
     })
     //Reservation
     this.app.route('/Reservation')
     .post((req: express.Request, res: express.Response) => {
         res.status(200).send('Reservation');
     })
    //SearchFlight
    this.app.route('/SearchFlight')
    .post((req: express.Request, res: express.Response) => {
        res.status(200).send('SearchFlight');
    })
        return this.app;
    }

}