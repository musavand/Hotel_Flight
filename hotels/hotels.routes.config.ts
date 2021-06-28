import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';

export class HotelsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'HotelsRoutes');
    }

    configureRoutes() {

       
            
    //GetAllNationalities
    this.app.route('/GetAllNationalities')
    .get((req: express.Request, res: express.Response) => {
        res.status(200).send('List of Hotels Nationalities');
    })
    //GetCancellationPolicies
    this.app.route('/GetCancellationPolicies')
    .post((req: express.Request, res: express.Response) => {
        res.status(200).send('List of Hotels Cancellation Policies');
    })
     //Confirm
     this.app.route('/Confirm')
     .post((req: express.Request, res: express.Response) => {
         res.status(200).send('Confirm');
     })
     //HotelContent
     this.app.route('/HotelContent')
     .post((req: express.Request, res: express.Response) => {
         res.status(200).send('HotelContent');
     })
     //Inquiry
     this.app.route('/Inquiry')
     .post((req: express.Request, res: express.Response) => {
         res.status(200).send('Inquiry');
     })
     //SearchHotel
     this.app.route('/SearchHotel')
     .post((req: express.Request, res: express.Response) => {
         res.status(200).send('SearchHotel');
     })
        return this.app;
    }

}