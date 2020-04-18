import React from "react";
import renderer from "react-test-renderer";
import MoreDetails, { fetchData } from "../../screens/MoreDetails";

describe("MoreDetails component", () => {
    test("renders correctly", () => {
        const navigation = { getParam: (param, defaultValue) => {
            return "MB Building";
          }};
        const tree = renderer.create(<MoreDetails navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("fetch data returns list of data", () => {
        const data = fetchData("MB Building");
        var response = {
            fullName: "John Molson Building",
            name: "MB Building",
            address: "1450 Rue Guy, Montreal, QC, H3H 0A1",
            coordinates:  {
            latitude: 45.495304,
            longitude: -73.579044,
            },
            accessibilityItems: [ "Credit Card: No",
            "Bicycle Parking: No",
            "Handicap Accessibility: No",
            "Info-Center: No",
            "Car Parking: No",],
            departments: [
                "Accountancy",
                "Supply Chain and Business Technology Management",
                "Finance",
                "Management",
                "Marketing",
            ],
            services: [
                "Career Management Services",
                "John Molson Executive Centre",
                "Performing Arts Facilities",
            ]
        }
        expect(data).toEqual(response);
    });
})
