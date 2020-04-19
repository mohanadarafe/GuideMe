/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Outdoor Directions Feature", () => {
  /**USER STORIES COVERED
  * US-15 : As a user, I want to be able to view directions on the map.
  * US-16 : As a user, I would like to be able to be given directions between campuses
  * US-18 : As a user, I should be able to choose "walking" as a means of transportation.
  * US-19 : As a user, I should be able to choose public transport as a means of transportation.
  * US-20 : As a user, I should be able to choose "driving" as a means of transportation.
  * US-27 : As a user, I would like to navigate from my desired start point/current location to my desired destination
  * US-28 : As a user, I would like to show the shortest path possible between my start and destination point.
  * US-40 : As a user, I should be able to choose "biking" as a means of transportation.
  */

  /** BEFORE Each Test
   * 1. Load the app
   * 2. Display main screen
   */
  beforeEach(async () => {
    await reloadApp();
  });

  /**Scenario: Getting the preview directions for 1 building to another (from different campuses)
  * US-15 : As a user, I want to be able to view directions on the map.
  * US-16 : As a user, I would like to be able to be given directions between campuses
  * US-28 : As a user, I would like to show the shortest path possible between my start and destination point.
  * 1. Click on the search bar
  * 2. Enter the name of a building from the Loyola Campus "VL building"
  * 3. Select the corresponding item from the dropdown list
  * 4. Click on GET DIRECTIONS button
  * 5. Click on the FROM search bar
  * 6. Enter the number of a building from the SGW campus: "Hall Building"
  * 7. Select the corresponding item from the dropdown list
  * 8. Click on VIEW ROUTE
  * 9. Check that the preview map view exists
  * 10. Check that the navigation header is present
  * 11. Check that the TO location is the expected one
  * 12. Check that the FROM location is the expected one
  * 13. Check that the path is visible on preview directions
  * 14. Go back to the Double Search Screen
  * 15. Check that you are on the Double Search Screen
  * 16. Click on the FROM Search bar
  * 17. Enter the name of a different building: "EV building"
  * 18. Select the corresponding item from the dropdown list
  * 19. Click on VIEW ROUTE
  * 20. Check that the preview map view exists
  * 21. Check that the navigation header is present
  * 22. Check that the TO location is the expected one
  * 23. Check that the FROM location is the expected one
  * 24. Check that the path is visible on preview directions
  */
  it.skip("Getting the preview directions for 1 building to another (from different campuses)", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("VL Building");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("Hall Building");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    await expect(element(by.id("PreviewDirections_NavigationHeaderView"))).toBeVisible();
    await expect(element(by.id("PreviewDirections_ToLocationText"))).toHaveLabel("VL Building");
    await expect(element(by.id("PreviewDirections_FromLocationText"))).toHaveLabel("Hall Building");
    //TODO: Find a solution for asserting the path shown on the map
    await element(by.id("PreviewDirections_GoBackIcon")).tap();
    await expect(element(by.id("DoubleSearch_ScreenView"))).toBeVisible();
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).tapBackspaceKey();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("Ev Building");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    await expect(element(by.id("PreviewDirections_NavigationHeaderView"))).toBeVisible();
    await expect(element(by.id("PreviewDirections_ToLocationText"))).toHaveLabel("VL Building");
    await expect(element(by.id("PreviewDirections_FromLocationText"))).toHaveLabel("EV Building");
    //TODO: Find a solution for asserting the path shown on the map
  });

  /**Scenario: Get Directions and choose from different navigation options 
  * US-15 : As a user, I want to be able to view directions on the map.
  * US-16 : As a user, I would like to be able to be given directions between campuses
  * US-18 : As a user, I should be able to choose "walking" as a means of transportation.
  * US-19 : As a user, I should be able to choose public transport as a means of transportation.
  * US-20 : As a user, I should be able to choose "driving" as a means of transportation.
  * US-40 : As a user, I should be able to choose "biking" as a means of transportation.
  * US-28 : As a user, I would like to show the shortest path possible between my start and destination point.
  * 1. Click on the search bar
  * 2. Enter the name of a building from the Loyola Campus "VL building"
  * 3. Select the corresponding item from the dropdown list
  * 4. Click on GET DIRECTIONS button
  * 5. Click on the FROM search bar
  * 6. Enter the number of a building from the SGW campus: "Hall Building"
  * 7. Select the corresponding item from the dropdown list
  * 8. Click on VIEW ROUTE
  * 9. Check that the preview map view exists
  * 10. Check that the path is visible on preview directions
  * 11. Check that "driving" is the means of transportation selected
  * 12. Choose "walking" as a means of transportation
  * 13. Check that the path is switched to walking
  * 14. Choose "transit" as a means of transportation
  * 15. Check that the path is switched to transit
  * 16. Choose "biking" as a means of transportation
  * 17. Check that the path is swtiched to biking
  */
  it.skip("Get directions and choose from different navigation options", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("VL Building");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("Hall Building");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    //TODO: Find a solution for asserting the path shown on the map
    await element(by.id("BottomMenu_arrowUpToPreferenceMenuIcon")).tapAtPoint({ x: 10, y: 20 });
    await expect(element(by.id("PreferenceMenu_ScreenView"))).toBeVisible();
    //TODO: 11. Check that "driving" is the means of transportation selected
    await element(by.id("PreferenceMenu_WalkingButton")).tap();
    await element(by.id("PreferenceMenu_GoBackIcon")).swipe('down', "slow");
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    //TODO: Find a solution for asserting the path shown on the map
    await element(by.id("BottomMenu_arrowUpToPreferenceMenuIcon")).tapAtPoint({ x: 10, y: 20 });
    await expect(element(by.id("PreferenceMenu_TransitButton"))).toBeVisible();
    await element(by.id("PreferenceMenu_TransitButton")).tap();
    await element(by.id("PreferenceMenu_GoBackIcon")).swipe('down', "slow");
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    //TODO: Find a solution for asserting the path shown on the map
    await element(by.id("BottomMenu_arrowUpToPreferenceMenuIcon")).tapAtPoint({ x: 10, y: 20 });
    await expect(element(by.id("PreferenceMenu_BicyclingButton"))).toBeVisible();
    await element(by.id("PreferenceMenu_BicyclingButton")).tap();
    await element(by.id("PreferenceMenu_GoBackIcon")).swipe('down', "slow");
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    //TODO: Find a solution for asserting the path shown on the map
  });

  /**Scenario: Get Directions and navigate from a desired start point to a desired destination
  * US-15 : As a user, I want to be able to view directions on the map.
  * US-27 : As a user, I would like to navigate from my desired start point/current location to my desired destination
  * US-28 : As a user, I would like to show the shortest path possible between my start and destination point.
  * 1. Click on the search bar
  * 2. Enter the name of a building from the Loyola Campus "EN building"
  * 3. Select the corresponding item from the dropdown list
  * 4. Click on GET DIRECTIONS button
  * 5. Click on the FROM search bar
  * 6. Enter the number of a building from the SGW campus: "Hall Building"
  * 7. Select the corresponding item from the dropdown list
  * 8. Click on VIEW ROUTE
  * 9. Check that the preview map view exists
  * 10. Check if the start button exists
  * 11. Check if the directions button exists
  * 12. Click the directions button three times while checking
  */
  it.skip("Get directions and navigate from a desired start point to a desired destination", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("EN Building");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).tap();
    await element(by.id("DoubleSearch_FromSearchBarView")).typeText("Hall Building");
    await element(by.id("DoubleSearch_FromSearchBarView")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    await expect(element(by.id("BottomMenu_PreferenceStartButton"))).toBeVisible();
    await element(by.id("BottomMenu_PreferenceStartButton")).tap();
    await expect(element(by.id("Directions_BottomRightButton"))).toBeVisible();
    await element(by.id("Directions_BottomRightButton")).tap();
    await expect(element(by.id("Directions_BottomRightButton"))).toBeVisible();
    await element(by.id("Directions_BottomRightButton")).tap();
    await expect(element(by.id("Directions_BottomRightButton"))).toBeVisible();
    await element(by.id("Directions_BottomRightButton")).tap();
    //TODO: Find a solution for asserting the path shown on the map
  });


  it("Get directions and navigate from a classroom in Loyola to a classroom in Hall building", async () => {

    //11 right buttons


    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("VL103");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tap();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).typeText("H815");
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();

    await expect(element(by.id("BottomMenu_PreferenceStartButton"))).toBeVisible();
    await element(by.id("BottomMenu_PreferenceStartButton")).tap();

    await expect(element(by.id("IndoorMapView_FloorScrollView"))).toExist();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "fast");

    await expect(element(by.id("IndoorMapView_ExitBuildingButton"))).toExist();
    await element(by.id("IndoorMapView_ExitBuildingButton")).tap();



    await expect(element(by.id("Directions_BottomRightButton"))).toBeVisible();
    await element(by.id("Directions_BottomRightButton")).tap();

    for (let i = 0; i < 10; i++) {
      await expect(element(by.id("Directions_BottomRightButton"))).toBeVisible();
      await element(by.id("Directions_BottomRightButton")).tap();
    }

    await expect(element(by.id("Directions_InsideBuildingButton"))).toExist();
    await element(by.id("Directions_InsideBuildingButton")).tap();

    //TODO: Find a solution for asserting the path shown on the map
  });


});