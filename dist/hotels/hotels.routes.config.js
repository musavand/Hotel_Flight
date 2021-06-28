"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
class HotelsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'HotelsRoutes');
    }
    configureRoutes() {
        //GetAllNationalities
        this.app.route('/GetAllNationalities')
            .get((req, res) => {
            res.status(200).send('List of Hotels Nationalities');
        });
        //GetCancellationPolicies
        this.app.route('/GetCancellationPolicies')
            .post((req, res) => {
            res.status(200).send('List of Hotels Cancellation Policies');
        });
        //Confirm
        this.app.route('/Confirm')
            .post((req, res) => {
            res.status(200).send('Confirm');
        });
        //HotelContent
        this.app.route('/HotelContent')
            .post((req, res) => {
            res.status(200).send('HotelContent');
        });
        //Inquiry
        this.app.route('/Inquiry')
            .post((req, res) => {
            res.status(200).send('Inquiry');
        });
        //SearchHotel
        this.app.route('/SearchHotel')
            .post((req, res) => {
            res.status(200).send('SearchHotel');
        });
        return this.app;
    }
}
exports.HotelsRoutes = HotelsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWxzLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9ob3RlbHMvaG90ZWxzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQWtFO0FBR2xFLE1BQWEsWUFBYSxTQUFRLHlDQUFrQjtJQUNoRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGVBQWU7UUFJZixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7YUFDckMsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQTtRQUNGLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQzthQUN6QyxJQUFJLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFBO1FBQ0QsU0FBUztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQzthQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQTtRQUNGLGNBQWM7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUE7UUFDRixTQUFTO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQ3pCLElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsYUFBYTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUM3QixJQUFJLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUNDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBRUo7QUExQ0Qsb0NBMENDIn0=