class FlyDto {
    constructor() {
        this.provider = null;
        this.price = null;
        this.departure_time = null;
        this.arrival_time = null;
    };

    getProvider() {
        return this.provider;
    };

    setProvider(provider) {
        return this.provider = provider;
    };

    getPrice() {
        return this.price;
    };

    setPrice(price) {
        return this.price = price;
    };

    getDepartureTime() {
        return this.departure_time;
    };

    setDepartureTime(departure_time) {
        return this.departure_time = departure_time;
    };

    getArrivalTime() {
        return this.arrival_time;
    };

    setArrivalTime(arrival_time) {
        return this.arrival_time = arrival_time;
    };

    toObject() {
        return {
            provider: this.getProvider(),
            price: this.getPrice(),
            departure_time: this.getDepartureTime(),
            arrival_time: this.getArrivalTime()
        };
    }
}

module.exports = FlyDto;
