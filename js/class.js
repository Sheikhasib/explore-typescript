"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._mileage = 10000;
    }
    getActualMileage() {
        const realMileage = this._mileage + 50000;
        return realMileage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
