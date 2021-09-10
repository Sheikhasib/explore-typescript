class Car{
    model: string;
    price: Number;
    private _mileage: number;
    constructor(model: string, price: number){
        this.model = model;
        this.price = price;
        this._mileage = 10000;
    }
    getActualMileage():number {
        const realMileage = this._mileage + 50000;
        return realMileage;
    }
    getTotalPrice(tax: number): number {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}