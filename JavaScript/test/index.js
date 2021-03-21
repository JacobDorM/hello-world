function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
};

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
};

Vehicle.prototype.honk = function(){
if(this.isRunning){
    return "beep!";
    } else{
        return "The vehicle is turned off";
    }
}

myVehicles= new Vehicle("car","mazda",2020);