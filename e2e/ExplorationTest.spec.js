/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Main screen", () => {
  /** BEFORE Each Test
   * 1. Load the app
   * 2. Display main screen
   */
  beforeEach(async () => {
    await reloadApp();
  });

  /** Scenario: Explore different campuses
   * The following source code represents the following automated test scenario
   * 1. Check the map is present
   * 2. Check the toggle button exists
   * 3. Click the toggle button to switch the map to Loyola
   * 5. Check the map is present
   * 6. Return back to SGW campus
   * 7. Check the map is present
   */
  it.skip("Explore different campuses", async () => {
    await expect(element(by.id("mapView"))).toExist();
    await expect(element(by.id("bottomMenuInitalView"))).toExist();
    await expect(element(by.id("intialBottomMenuToggleButton"))).toExist();
    await element(by.id("intialBottomMenuToggleButton")).longPress();
    await expect(element(by.id("mapView"))).toExist();
    await element(by.id("intialBottomMenuToggleButton")).longPress();
    await expect(element(by.id("mapView"))).toExist();
  });

  /** Scenario: Navigate through different indoor floors (Hall)
   * The following source code represents the following automated test scenario
   * 1. Click on Hall Building from the Map
   * 2. Check if the GET INSIDE Button appears on the bottom menu
   * 3. Click the GET INSIDE button
   * 4. Check that the floor bar menu exists
   * 5. Change floors
   * 6. Check that indoor map scroll view exists
   * 7. Scroll across the floor map
   * 8. Check that the EXIT BUILDING button exists
   * 9. Click EXIT BUILDING button
   * 10. Check the map is present
   */
  it.skip("Navigate through different indoor floors (Hall)", async () => {
    await element(by.id("searchBar")).tapAtPoint({ x: 165, y: 370 });
    await expect(element(by.id("getInsideButton"))).toExist();
    await element(by.id("getInsideButton")).tap();
    await expect(element(by.id("floorBarMenu"))).toExist();
    await element(by.id("floorBarMenu")).tapAtPoint({ x: 192, y: 23 });
    await expect(element(by.id("indoorMapFloorScrollView"))).toExist();
    await element(by.id("indoorMapFloorScrollView")).swipe("left", "fast");
    await expect(element(by.id("indoorMapExitBuildingButton"))).toExist();
    await element(by.id("indoorMapExitBuildingButton")).tap();
    await expect(element(by.id("mapView"))).toExist();
  });

  /** Scenario: Get more details about a building (Hall)
    * The following source code represents the following automated test scenario
    * 1. Click on Hall Building from the Map
    * 2. Check if the bottom menu arrow-up appears 
    * 3. Click on the bottom menu arrow-up
    * 4. Check the more info page is present
    * 5. Scroll through the different departments and faculities
    * 6. Check that the arrow-down exists on the page
    * 7. Tap the arrow down key
    * 8. Check the map is present
    */
  it.skip("Get more details about a building (Hall)", async () => {
    await element(by.id("searchBar")).tapAtPoint({ x: 165, y: 370 });
    await expect(element(by.id("getInsideIcon"))).toExist();
    await element(by.id("getInsideIcon")).tapAtPoint({ x: 10, y: 20 });
    await expect(element(by.id("moreInfoScrollView"))).toExist();
    await element(by.id("moreInfoScrollView")).swipe("up");
    await expect(element(by.id("bottomArrowIcon"))).toExist();
    await element(by.id("bottomArrowIcon")).tap();
    await expect(element(by.id("mapView"))).toExist();
  });

  /** Scenario: Access the Get Directions screen from the search bar
   * The following source code represents the following automated test scenario
   * 1. Click on the searchbar
   * 2. Type the query: "hall building"
   * 3. Select the corresponding item from the dropdown list
   * 4. Check that the GET DIRECTIONS button exist
   * 5. Click Get DIRECTIONS button
   * 6. Check you get to the get directions screen
   */
  it.skip("Access the Get Directions screen from the search bar", async () => {
    await element(by.id("searchBar")).tap();
    await element(by.id("searchBar")).typeText("hall building");
    await element(by.id("searchBar")).tapAtPoint({ x: 200, y: 75 });
    await expect(element(by.id("getDirectionsButton"))).toExist();
    await element(by.id("getDirectionsButton")).tap();
    await expect(element(by.id("disabledViewRouteButton"))).toExist();
  });
});
