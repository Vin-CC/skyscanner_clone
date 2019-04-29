const assert = require("assert");
const flyController = require("../controller/flyController");

describe("List of fly aggregated", function() {
    it("should be aggregated", function() {
        let data = [
            {
                "provider": "AIR_MOON",
                "price": 486.88,
                "departure_time": "7:02 AM",
                "arrival_time": "2:50 AM"
            },{
                "provider": "AIR_JAZZ",
                "price": 511.78,
                "departure_time": "9:15 PM",
                "arrival_time": "5:35 AM"
            },{
                "provider": "AIR_BEAM",
                "price": 501.33,
                "departure_time": "4:12 AM",
                "arrival_time": "5:02 AM"
            },{
                "provider": "AIR_BEAM",
                "price": 497.0,
                "departure_time": "7:22 PM",
                "arrival_time": "5:58 AM"
            }
        ];
        let listAggregated = flyController.aggregateFly(data);
        let expected = [
            {
                "provider": "AIR_MOON",
                "price": 486.88,
                "departure_time": "7:02 AM",
                "arrival_time": "2:50 AM"
            },{
                "provider": "AIR_BEAM",
                "price": 497.0,
                "departure_time": "7:22 PM",
                "arrival_time": "5:58 AM"
            },{
                "provider": "AIR_BEAM",
                "price": 501.33,
                "departure_time": "4:12 AM",
                "arrival_time": "5:02 AM"
            },{
                "provider": "AIR_JAZZ",
                "price": 511.78,
                "departure_time": "9:15 PM",
                "arrival_time": "5:35 AM"
            }
        ];

        assert.equal(listAggregated.length, expected.length);
    });
});
