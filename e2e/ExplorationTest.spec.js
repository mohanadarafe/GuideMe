/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Exploring the map Feature", () => {
  /**USER STORIES COVERED
   * US-6 : As a user I would like to switch between the SGW and Loyola Maps
   * US-37 : As a user, I would like to navigate through building floors
   * US-13 : As a user, I want to be able to select a destination building by typing its name
   */

  /** BEFORE Each Test
   * 1. Load the app
   * 2. Display main screen
   */
  beforeEach(async () => {
    await reloadApp();
  });

  /** Scenario: Explore different campuses
   * US-6 : As a user I would like to switch between the SGW and Loyola Maps
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
   * US-37 : As a user, I would like to navigate through building floors
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

  /** Scenario: Select a building as a destination point by typing its name
   * US-13 : As a user, I want to be able to select a destination building by typing its name
   * 1. Click on the searchbar
   * 2. Enter the name of a building: "hall building"
   * 3. Select the corresponding item from the dropdown list
   * 4. Check that the GET DIRECTIONS button exist
   * 5. Click Get DIRECTIONS button
   * 6. Check you get to the get directions screen and the view route button is disabled
   * 7. Check that TO search bar is filled with "Hall building"
   */
  it.skip("Select a building as a destination point by typing its name", async () => {
    await element(by.id("searchBar")).tap();
    await element(by.id("searchBar")).typeText("hall building");
    await element(by.id("searchBar")).tapAtPoint({ x: 200, y: 75 });
    await expect(element(by.id("getDirectionsButton"))).toExist();
    await element(by.id("getDirectionsButton")).tap();
    await expect(element(by.id("disabledViewRouteButton"))).toExist();
    //Added step (step 7) for checking US-13 at the same time. Might have problems with the displaying if the name vs full name
    await expect(element(by.id("DoubleSearch_ToSearchBar"))).toHaveText("Hall building");
  });
});
