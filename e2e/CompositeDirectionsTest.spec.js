/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Composite Directions Feature", () => {
  /**USER STORIES COVERED
   * US-15 : As a user, I want to be able to view directions on the map
   * US-25 : AS a user, I would like to be able to search for a room
   * US-26 : As a user, I would like to be able to set a room as my start or destination
   * US-33 : AS a user, I would like to be able to be given directions between classes from two different campuses
   */

  /** BEFORE Each Test
   * 1. Load the app
   * 2. Display main screen
   */
  beforeEach(async () => {
    await reloadApp();
  });

  /**Scenario: Getting Directions from 1 room to another room on different campuses (SGW to LoyoLa)
   * US-15 : As a user, I want to be able to view directions on the map
   * US-25 : AS a user, I would like to be able to search for a room
   * US-26 : As a user, I would like to be able to set a room as my start or destination
   * US-33 : AS a user, I would like to be able to be given directions between classes from two different campuses
   * 1. Click on the search bar
   * 2. Enter the number of a room from Loyola Campus: "VL103"
   * 3. Select the corresponding item from the dropdown list
   * 4. Click on GET DIRECTIONS button
   * 5. Check that TO search bar is filled with "VL103"
   * 6. Click on the FROM search bar
   * 7. Enter the number of a room on the SGW Campus: "H820"
   * 8. Select the corresponding item from the dropdown list
   * 9. Click on VIEW ROUTE
   * TODO: Checking the path for directions is shown (need to play)
   */    
  it.skip("Getting Directions from 1 room to another room on different campuses (Hall to LoyoLa)", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("VL103");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await expect(element(by.id("DoubleSearch_ToSearchBar"))).toHaveText("VL103");
    await element(by.id("DoubleSearch_FromSearchBar")).tap();
    await element(by.id("DoubleSearch_FromSearchBar")).typeText("H820");
    //TODO: Check the x and y coordinates of the corresponding item in the dropdown list given relative position to the FROM Search Bar
    //Fix possible: using items at index
    await element(by.id("DoubleSearch_FromSearchBar")).atIndex(0).tapAtPoint();
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    //TODO: Checking the path for directions is shown (need to play)
  });
});