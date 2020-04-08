import React from "react";
import { Search } from "../../components/Search";
import renderer from "react-test-renderer";
import { RetrieveSearchItems } from "../../components/MapData";
import { buildingData } from "../../constants/buildingData";
import { ClassRooms } from "../../constants/ClassRooms";

describe("Search component", () => {
  const searchItems = RetrieveSearchItems(buildingData(), ClassRooms())
    test("renders correctly", () => {
        const tree = renderer.create(<Search />).toJSON();
        expect(tree).toMatchSnapshot();
      });

    test("The searchItems list contains a classroom: H925", () => {
      expect(searchItems).toContain("H925");
    })
    test("The searchItems list contain a service: CSU Day Care & Nursery", () => {
      expect(searchItems).toContain("CSU Day Care & Nursery");
    })
    
});