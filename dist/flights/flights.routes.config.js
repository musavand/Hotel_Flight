"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
class FlightsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'FlightsRoutes');
    }
    configureRoutes() {
        //CheckPrice
        this.app.route('/CheckPrice')
            .post((req, res) => {
            res.status(200).send('CheckPrice  For Flights');
        });
        //Condition
        this.app.route('/Condition')
            .post((req, res) => {
            res.status(200).send('Flight Condition');
        });
        //GetPassengerInfo
        this.app.route('/GetPassengerInfo')
            .post((req, res) => {
            res.status(200).send('GetPassengerInfo');
        });
        //IssueReservation
        this.app.route('/IssueReservation')
            .post((req, res) => {
            res.status(200).send('IssueReservation');
        });
        //Reservation
        this.app.route('/Reservation')
            .post((req, res) => {
            res.status(200).send('Reservation');
        });
        //SearchFlight
        this.app.route('/SearchFlight')
            .post((req, res) => {
            res.status(200).send('SearchFlight');
        });
        return this.app;
    }
}
exports.FlightsRoutes = FlightsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0cy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZmxpZ2h0cy9mbGlnaHRzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQWtFO0FBR2xFLE1BQWEsYUFBYyxTQUFRLHlDQUFrQjtJQUNqRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGVBQWU7UUFFZixZQUFZO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO2FBQzVCLElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUE7UUFDRCxXQUFXO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQzNCLElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUE7UUFDRixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7YUFDbEMsSUFBSSxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQTtRQUNGLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzthQUNsQyxJQUFJLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsYUFBYTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUM3QixJQUFJLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUNILGNBQWM7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUE7UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUVKO0FBeENELHNDQXdDQyJ9