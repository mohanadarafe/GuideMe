/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Exploring the map Feature", () => {
  /**USER STORIES COVERED
   * US-6 : As a user I would like to switch between the SGW and Loyola Maps
   * US-7 : As a user, I would like to know the departments provided inside a building
   * US-8 : As a user, I would like to know the services provided inside a building
   * US-9 : As a user, I would like to know the accessibility of a building
   * US-12 : As a user, I want to be able to select a destination building by clicking on it
   * US-13 : As a user, I want to be able to select a destination building by typing its name
   * US-37 : As a user, I would like to navigate through building floors
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
    await expect(element(by.id("Map_mapView"))).toExist();
    await expect(element(by.id("BottomMenu_initalView"))).toExist();
    await expect(element(by.id("intialBottomMenuToggleButton"))).toExist();
    await element(by.id("BottomMenu_ToggleButton")).longPress();
    await expect(element(by.id("Map_mapView"))).toExist();
    await element(by.id("BottomMenu_ToggleButton")).longPress();
    await expect(element(by.id("Map_mapView"))).toExist();
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
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 165, y: 370 });
    await expect(element(by.id("BottomMenu_getInsideButton"))).toExist();
    await element(by.id("BottomMenu_getInsideButton")).tap();
    await expect(element(by.id("FloorMenu_floorBarMenuView"))).toExist();
    await element(by.id("FloorMenu_floorBarMenuView")).tapAtPoint({ x: 192, y: 23 });
    await expect(element(by.id("IndoorMapView_FloorScrollView"))).toExist();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "fast");
    await expect(element(by.id("IndoorMapView_ExitBuildingButton"))).toExist();
    await element(by.id("IndoorMapView_ExitBuildingButton")).tap();
    await expect(element(by.id("Map_mapView"))).toExist();
  });

  /** Scenario: Get more details about a building (Hall building))
   * US-7 : As a user, I would like to know the departments provided inside a building
   * US-8 : As a user, I would like to know the services provided inside a building
   * US-9 : As a user, I would like to know the accessibility of a building
   * 1. Click on Hall Building from the Map
   * 2. Check if the bottom menu arrow-up appears 
   * 3. Click on the bottom menu arrow-up
   * 4. Check the more info page is present
   * 5. Check that the departments section is present
   * 6. Check that the services section is present
   * 7. Check that the accessibility section is present
   * 8. Scroll through the different departments and faculities
   * 9. Check that the arrow-down exists on the page
   * 10. Tap the arrow down key
   * 11. Check the map is present
   */
  it.skip("Get more details about a building (Hall)", async () => {
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 165, y: 370 });
    await expect(element(by.id("BottomMenu_arrowUpIcon"))).toExist();
    await element(by.id("BottomMenu_arrowUpIcon")).tapAtPoint({ x: 10, y: 20 });
    await expect(element(by.id("MoreDetails_moreInfoScrollView"))).toExist();
    await expect(element(by.text("Departments"))).toExist();
    await expect(element(by.text("Services"))).toExist();
    await expect(element(by.text("Accessibility"))).toExist();
    await element(by.id("MoreDetails_moreInfoScrollView")).swipe("up");
    await expect(element(by.id("MoreDetails_bottomArrowIcon"))).toExist();
    await element(by.id("MoreDetails_bottomArrowIcon")).tap();
    await expect(element(by.id("Map_mapView"))).toExist();
  });

  /** Scenario: Select a building as a destination point by typing its name (Hall building)
   * US-13 : As a user, I want to be able to select a destination building by typing its name
   * 1. Click on the searchBar
   * 2. Enter the name of a building: "hall building"
   * 3. Select the corresponding item from the dropdown list
   * 4. Check that the GET DIRECTIONS button exist
   * 5. Click Get DIRECTIONS button
   * 6. Check you get to the get directions screen and the view route button is disabled
   * 7. Check that TO search bar is filled with the building full name "Henry F. Hall Building"
   */
  it.skip("Select a building as a destination point by typing its name (Hall building)", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("hall building");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await expect(element(by.id("BottomMenu_getDirectionsButton"))).toExist();
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await expect(element(by.id("DoubleSearch_disabledViewRouteButton"))).toExist();
    //Added step (step 7) for checking US-13 at the same time. Might have problems with the displaying if the name vs full name
    await expect(element(by.id("DoubleSearch_ToSearchBar"))).toHaveText("Hall Henry F. Hall Building");
  });

  /** Scenario: Select a building as a destination point by clicking on it (Hall building)
   * US-12 : As a user, I want to be able to select a destination building by clicking on it
   * 1. Click on Hall building from the map
   * 2. Click on the bottom menu arrow-up
   * 3. Check that the GET DIRECTIONS button is present
   * 4. click on the GET DIRECTIONS button
   * 5. Check you get to the get directions screen and the view route button is disabled
   * 6. Check that TO search bar is filled with the building full name "Henry F. Hall Building"
   */
  it.skip("Select a building as a destination point by clicking on it (Hall building)", async () => {
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 165, y: 370 });
    await element(by.id("BottomMenu_arrowUpIcon")).tapAtPoint({ x: 10, y: 20 });
    await expect(element(by.id("MoreDetails_getDirectionsButton"))).toExist();
    await element(by.id("MoreDetails_getDirectionsButton")).tap();
    await expect(element(by.id("DoubleSearch_disabledViewRouteButton"))).toExist();
    //Added step (step 7) for checking US-13 at the same time. Might have problems with the displaying if the name vs full name
    await expect(element(by.id("DoubleSearch_ToSearchBar"))).toHaveText("Hall Henry F. Hall Building");
  });
});
