var Bike = /** @class */ (function () {
    function Bike(price, speed) {
        this.price = price;
        this.speed = speed;
        this.miles = 0;
    }
    Bike.prototype.displayInfo = function () {
        console.log("Price: " + this.price + " Speed: " + this.speed + " Miles: " + this.miles);
        return this;
    };
    Bike.prototype.ride = function () {
        this.miles += 10;
        return this;
    };
    Bike.prototype.reverse = function () {
        this.miles -= 5;
        return this;
    };
    return Bike;
}());