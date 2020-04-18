/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Indoor Directions Feature", () => {
  /**USER STORIES COVERED
 * US-15 : As a user, I want to be able to view directions on the map
 * US-25 : AS a user, I would like to be able to search for a room
 * US-26 : As a user, I would like to be able to set a room as my start or destination
 * US-31 : As a user, I would like to be able to generate directions to rooms between floors
 */

  /** BEFORE Each Test
   * 1. Load the app
   * 2. Display main screen
   */
  beforeEach(async () => {
    await reloadApp();
  });

  /**Scenario: Getting Directions from 1 room to another room on different floors
   * US-15 : As a user, I want to be able to view directions on the map
   * US-25 : AS a user, I would like to be able to search for a room
   * US-26 : As a user, I would like to be able to set a room as my start or destination
   * US-31 : As a user, I would like to be able to generate directions to rooms between floors
   * 1. Click on the search bar
   * 2. Enter the number of a room: "H813"
   * 3. Select the corresponding item from the dropdown list
   * 4. Click on GET DIRECTIONS button
   * 5. Check that TO search bar is filled with "H813"
   * 6. Click on the FROM search bar
   * 7. Enter the number of a room on a different floor: "H937"
   * 8. Select the corresponding item from the dropdown list
   * 9. Click on VIEW ROUTE
   * 10. Check that the selected floor corresponds to the FROM floor (9th floor)
   * 11. Check that the path on the FROM floor exists
   * 12. Select the TO room floor (8th floor)
   * 13. Check that the path on the TO floor exists
   */
  it.skip("Getting directions from 1 room to another room on different floors", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("H813");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    //TODO: Fix the workaround (next line) to check that "H813" is written in the To search bar  
    await expect(element(by.label("H813"))).toExist();
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("H937");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    //TODO: Adding Assertion to check that the floor is the desired one
    //TODO: Fixing assertion on next line
    await expect(element(by.id("DifferentFloorDirections_GraphDirectionsFloorFrom"))).toExist();
    //TODO: Fixing next line: clicking on the To floor
    //await element(by.label("8")).tap();
    await expect(element(by.id("DifferentFloorDirections_GraphDirectionsFloorTo"))).toExist();
  });

  /**Scenario: Getting Directions from 1 room to another room on the same floor
    * US-15 : As a user, I want to be able to view directions on the map
    * US-25 : AS a user, I would like to be able to search for a room
    * US-26 : As a user, I would like to be able to set a room as my start or destination
    * 1. Click on the search bar
    * 2. Enter the number of a room: "H813"
    * 3. Select the corresponding item from the dropdown list
    * 4. Click on GET DIRECTIONS button
    * 5. Check that TO search bar is filled with "H813"
    * 6. Click on the FROM search bar
    * 7. Enter the number of a room on the same floor: "H820"
    * 8. Select the corresponding item from the dropdown list
    * 9. Click on VIEW ROUTE
    * 10. Check that you are on the floor corresponding to the directions (8th floor)
    * 11. Check that the directions path exists
    */
  it.skip("Getting Directions from 1 room to another room on the same floor", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("H813");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    //TODO: Fix the workaround (next line) to check that "H813" is written in the To search bar  
    await expect(element(by.label("H813"))).toExist();
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("H937");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    //TODO: Adding Assertion to check that the floor is the desired one
    await expect(element(by.id("SameFloorDirections_GraphDirections"))).toExist();
  });
});