import Car from "../../img/services/servicesCar.jpg";
import SUV from "../../img/services/servicesSUV.jpg";
import Truck from "../../img/services/servicesTruck.jpg";

const content = [
    {
        carImage: Car,
        icon: "fas fa-car",
        title: "Car/Coupe",
        Description: "Starting at $35.00",
        source: "./services"
    },
    {
        carImage: SUV,
        icon: "fas fa-truck-pickup",
        title: "Small/Mid SUV",
        Description: "Starting at $45.00",
        source: "./services.jsx"
        
    },
    {
        carImage: Truck,
        icon: "fas fa-truck-monster",
        title: "Large SUV/Truck",
        Description: "Starting at $55.00",
        source: "./services.jsx"
    }
];
export default content;
