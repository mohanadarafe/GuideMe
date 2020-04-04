import React from "react";
import renderer from "react-test-renderer";
import MoreDetails, { createLists, fetchData } from "../../screens/MoreDetails";

describe("MoreDetails component", () => {
    test("renders correctly", () => {
        const navigation = { getParam: (param, defaultValue) => {
            return "JMSB";
          }};
        const tree = renderer.create(<MoreDetails navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("fetch data returns list of data", () => {
        const data = fetchData("JMSB");
        var response = [
            [{id: 1, name: "Accountancy"}, {id: 2, name: "Supply Chain and Business Technology Management"},
            {id: 3, name: "Finance"}, {id: 4, name: "Management"}, {id: 5, name: "Marketing"}],
            
            [{id: 6, name: "Career Management Services"}, {id: 7, name: "John Molson Executive Centre"},
            {id: 8, name: "Performing Arts Facilities"}],
            
            [{id: 9, name: "Credit Card: No"}, {id: 10, name: "Bicycle Parking: No"}, {id: 11, name: "Wheelchair Accessibility: No"}, 
            {id: 12, name: "Info Center: No"}, {id: 13, name: "Parking: No"}]
        ];
        expect(data).toEqual(response);
    });

    test("creates list for more details page", () => {
        var testCases = [
            [
                [{id: 1, name: "Accountancy"}, {id: 2, name: "Supply Chain and Business Technology Management"},
                {id: 3, name: "Finance"}, {id: 4, name: "Management"}, {id: 5, name: "Marketing"}],
                
                [{id: 6, name: "Career Management Services"}, {id: 7, name: "John Molson Executive Centre"},
                {id: 8, name: "Performing Arts Facilities"}],
                
                [{id: 9, name: "Credit Card: No"}, {id: 10, name: "Bicycle Parking: No"}, {id: 11, name: "Wheelchair Accessibility: No"}, 
                {id: 12, name: "Info Center: No"}, {id: 13, name: "Parking: No"}]
            ],
            [
                ["None"], ["None"], ["None"]
            ]
        ]
        var departments = [];
        var departmentsResults = [
            ["Accountancy", "Supply Chain and Business Technology Management", "Finance", "Management", "Marketing"],
            ["None"]
        ]
        
        var services = [];
        var servicesResults = [
            ["Career Management Services", "John Molson Executive Centre", "Performing Arts Facilities"],
            ["None"]
        ];
        
        var accessibility = [];
        var accessibilityResults = [
            ["Credit Card: No", "Bicycle Parking: No", "Wheelchair Accessibility: No", "Info Center: No", "Parking: No"],
            ["None"]
        ];

        testCases.forEach((element, index) => {
            createLists(element, departments, services, accessibility, departments);
            expect(departments).toEqual(departmentsResults[index]);
            expect(services).toEqual(servicesResults[index]);
            expect(accessibility).toEqual(accessibilityResults[index]);
            departments = [];
            services = [];
            accessibility = [];
        }); 
    });
})
