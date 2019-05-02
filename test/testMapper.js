const assert = require("assert");
const flyMapper = require("../models/mapper/flyMapper");

describe("Content formated by mapper", function() {
    it("should formate AIR_JAZZ item", function() {
        let data = [{id: "c2e91bdf-ccc0-45d5-b4ea-ef75bc932ae8", price: 511.78, dtime: "9:15 PM", atime: "5:35 AM"}],
            formatedData = flyMapper.jazzAllMapper(data),
            expected = [{provider: "AIR_JAZZ", price: 511.78, departure_time: "9:15 PM", arrival_time: "5:35 AM" }];
        assert.deepStrictEqual(formatedData, expected);
    });
    it("should formate AIR_MOON item", function() {
        let data = [{"id": "e597f52b-02ad-40f5-8810-8aa7d8d8769c", "price": 486.88, "departure_time": "7:02 AM", "arrival_time": "2:50 AM"}],
            formatedData = flyMapper.moonAllMapper(data),
            expected = [{provider: "AIR_MOON", price: 486.88, departure_time: "7:02 AM", arrival_time: "2:50 AM" }];
        assert.deepStrictEqual(formatedData, expected);
    });
    it("should formate AIR_BEAM item", function() {
        let data = "id,p,departure,arrival\n14e6f085-b5b5-48f7-b3c5-6c6202d50f48,501.33,4:12 AM,5:02 AM\n46ea7e60-c0a4-429a-8917-3917d903236d,497.0,7:22 PM,5:58 AM",
            formatedData = flyMapper.beamAllMapper(data),
            expected = [
                {provider: "AIR_BEAM", price: 501.33, departure_time: "4:12 AM", arrival_time: "5:02 AM" },
                {provider: "AIR_BEAM", price: 497.0, departure_time: "7:22 PM", arrival_time: "5:58 AM" }
            ];
        assert.deepStrictEqual(formatedData, expected);
    });
});