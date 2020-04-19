/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Composite Directions Feature", () => {
  /**USER STORIES COVERED
   * US-15 : As a user, I want to be able to view directions on the map
   * US-25 : AS a user, I would like to be able to search for a room
   * US-26 : As a user, I would like to be able to set a room as my start or destination
   * US-33 : As a user, I would like to be able to be given directions between classes from 2 different campuses
   * US-37 : As a user, I would like to navigate through building floors
   */

  /** BEFORE Each Test
   * 1. Load the app
   * 2. Display main screen
   */
  beforeEach(async () => {
    await reloadApp();
  });

  /** Scenario: Get directions and navigate from a building (D building) to a classroom (H819)
  * US-15 : As a user, I want to be able to view directions on the map.
  * US-28 : As a user, I would like to show the shortest path possible between my start and destination point.
  * US-37 : As a user, I would like to navigate through building floors
  * 1. Click on the search bar
  * 2. Enter the name of the classroom (H819)
  * 3. Select the corresponding item from the dropdown list
  * 4. Click on GET DIRECTIONS button
  * 5. Click on the FROM search bar
  * 6. Enter the number of a building from the SGW campus: "D Building"
  * 7. Select the corresponding item from the dropdown list
  * 8. Click on VIEW ROUTE
  * 9. Check that the preview map view exists
  * 10. Check if the start button exists
  * 11. Check if the directions button exists
  * 12. Click the directions button three times will checking
  * 13. Once the destionation is reached the inside building button is clicked
  * 14. The first floor is examined and scrolled through
  * 15. The eigth floor is examined and scrolled through
  */
  it.skip("Get directions and naviagte from a building (D building) to a classroom (H819)", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("H819");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("D Building");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    await expect(element(by.id("BottomMenu_PreferenceStartButton"))).toBeVisible();
    await element(by.id("BottomMenu_PreferenceStartButton")).tap();
    await expect(element(by.id("Directions_GoToNextInstructionButton"))).toBeVisible();
    await element(by.id("Directions_GoToNextInstructionButton")).tap();
    await expect(element(by.id("Directions_GoToNextInstructionButton"))).toBeVisible();
    await element(by.id("Directions_GoToNextInstructionButton")).tap();
    await expect(element(by.id("Directions_GoToNextInstructionButton"))).toBeVisible();
    await element(by.id("Directions_GoToNextInstructionButton")).tap();
    await expect(element(by.id("Directions_InsideBuildingIcon_L2"))).toBeVisible();
    await element(by.id("Directions_InsideBuildingIcon_L2")).tap();
    await expect(element(by.id("IndoorMapView_FloorScrollView"))).toBeVisible();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "slow", 0.5);
    await element(by.id("FloorMenu_floorBarMenuView")).tapAtPoint({ x: 180, y: 23 });
    await expect(element(by.id("IndoorMapView_FloorScrollView"))).toExist();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "slow");
    //TODO: Find a solution for asserting the path shown on the map
  });

  /** Scenario: Get directions and navigate from a classroom (H815) to a classroom (VL103) on a different campus
  * US-15 : As a user, I want to be able to view directions on the map.
  * US-28 : As a user, I would like to show the shortest path possible between my start and destination point.
  * US-33 : As a user, I would like to be able to be given directions between classes from 2 different campuses
  * 1. Click on the search bar
  * 2. Enter the name of the classroom (VL103)
  * 3. Select the corresponding item from the dropdown list
  * 4. Click on GET DIRECTIONS button
  * 5. Click on the FROM search bar
  * 6. Enter the number of a class from the SGW campus: "H815"
  * 7. Select the corresponding item from the dropdown list
  * 8. Click on VIEW ROUTE
  * 9. Check that the preview map view exists
  * 10. Check if the start button exists
  * 11. Check if the directions button exists
  * 12. Click the directions button 11 times will checking (to reach destination)
  * 13. Once the destionation is reached, click the inside building button
  * 14. Check that it is the right building and right floor
  */
  it("Get directions and naviagte from a classroom (H815) to a classroom (VL103) on a different campus", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("VL103");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("H815");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    await expect(element(by.id("BottomMenu_PreferenceStartButton"))).toBeVisible();
    await element(by.id("BottomMenu_PreferenceStartButton")).tap();
    await expect(element(by.id("IndoorMapView_FloorScrollView"))).toBeVisible();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "slow");
    await expect(element(by.id("BottomMenu_IndoorMapExitBuildingButton"))).toBeVisible();
    await element(by.id("BottomMenu_IndoorMapExitBuildingButton")).tap();
    for (let i = 0; i < 11; i++) {
      await expect(element(by.id("Directions_GoToNextInstructionButton"))).toBeVisible();
      await element(by.id("Directions_GoToNextInstructionButton")).tap();
    }
    await expect(element(by.id("Directions_InsideBuildingIcon_L3"))).toExist();
    await element(by.id("Directions_InsideBuildingIcon_L3")).tap();
    //TODO: Find a solution for asserting the path shown on the map
  });
});