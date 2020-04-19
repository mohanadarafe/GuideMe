/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Outdoor Directions Feature", () => {
  /**USER STORIES COVERED
  * US-15 : As a user, I want to be able to view directions on the map.
  * US-16 : As a user, I would like to be able to be given directions between campuses
  * US-18 : As a user, I should be able to choose "walking" as a means of transportation.
  * US-19 : As a user, I should be able to choose public transport as a means of transportation.
  * US-20 : As a user, I should be able to choose "driving" as a means of transportation.
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
  * 20. Check that the TO location is the expected one
  * 21. Check that the FROM location is the expected one
  * 22. Check that the path is visible on preview directions
  */
  it.skip("Getting the preview directions for 1 building to another (from different campuses)", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("VL Building");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tap();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).typeText("Hall Building");
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    await expect(element(by.id("PreviewDirections_NavigationHeaderView"))).toExist();
    //await expect(element(by.id("PreviewDirections_ToLocationText"))).toHaveText("VL Building");
    //await expect(element(by.id("PreviewDirections_FromLocationText"))).toHaveText("Hall Building");
    //await expect(element(by.id("PreviewDirection_MapViewPolyline"))).toExist();
    //await expect(element(by.id("PreviewDirection_MapViewDefaultPolyline"))).toExist();
    await element(by.id("PreviewDirections_GoBackIcon")).tap();
    //await expect(element(by.id("DoubleSearch_ScreenView"))).toExist();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tap();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tapBackspaceKey();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).typeText("Ev Building");
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    await expect(element(by.id("PreviewDirections_NavigationHeaderView"))).toExist();
    // //await expect(element(by.id("PreviewDirections_ToLocationText"))).toHaveText("VL Building");
    // //await expect(element(by.id("PreviewDirections_FromLocationText"))).toHaveText("EV Building");
    //await expect(element(by.id("PreviewDirection_MapViewPolyline"))).toExist();
  });

  /**Scenario: Choosing from different Navigation options 
  * US-18 : As a user, I should be able to choose "walking" as a means of transportation.
  * US-19 : As a user, I should be able to choose public transport as a means of transportation.
  * US-20 : As a user, I should be able to choose "driving" as a means of transportation.
  * US-40 : As a user, I should be able to choose "biking" as a means of transportation.
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
  it.skip("Getting the preview directions for 1 building to another (from different campuses)", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("VL Building");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 75 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tap();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).typeText("Hall Building");
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    //await expect(element(by.id("PreviewDirection_MapViewPolyline"))).toExist();
    //await expect(element(by.id("PreviewDirection_MapViewDefaultPolyline"))).toExist();
    await element(by.id("BottomMenu_arrowUpToPreferenceMenuIcon")).tapAtPoint({ x: 10, y: 20 });
    await expect(element(by.id("PreferenceMenu_ScreenView"))).toExist();
    //TODO: 11. Check that "driving" is the means of transportation selected
    await element(by.id("PreferenceMenu_WalkingButton")).tap();
    await element(by.id("PreferenceMenu_GoBackIcon")).swipe('down', "slow");
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    //await expect(element(by.id("PreviewDirection_MapViewPolyline"))).toExist();
    await element(by.id("BottomMenu_arrowUpToPreferenceMenuIcon")).tapAtPoint({ x: 10, y: 20 });

    await expect(element(by.id("PreferenceMenu_TransitButton"))).toExist();
    await element(by.id("PreferenceMenu_TransitButton")).tap();
    await element(by.id("PreferenceMenu_GoBackIcon")).swipe('down', "slow");
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    //await expect(element(by.id("PreviewDirection_MapViewPolyline"))).toExist();
    await element(by.id("BottomMenu_arrowUpToPreferenceMenuIcon")).tapAtPoint({ x: 10, y: 20 });
    await expect(element(by.id("PreferenceMenu_BicyclingButton"))).toExist();
    await element(by.id("PreferenceMenu_BicyclingButton")).tap();
    await element(by.id("PreferenceMenu_GoBackIcon")).swipe('down', "slow");
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    //await expect(element(by.id("PreviewDirection_MapViewPolyline"))).toExist();

  });


  /**Scenario: Exploring route direactions
  * US-
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
  * 12. Click the directions button three times will checking
  */
  it.skip("Get directions between buildings and route directions", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("EN Building");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tap();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).typeText("Hall Building");
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    await expect(element(by.id("BottomMenu_PreferenceStartButton"))).toExist();
    await element(by.id("BottomMenu_PreferenceStartButton")).tap();

    await expect(element(by.id("Directions_BottomRightButton"))).toExist();
    await element(by.id("Directions_BottomRightButton")).tap();

    await expect(element(by.id("Directions_BottomRightButton"))).toExist();
    await element(by.id("Directions_BottomRightButton")).tap();

    await expect(element(by.id("Directions_BottomRightButton"))).toExist();
    await element(by.id("Directions_BottomRightButton")).tap();

  });

  /**Scenario: Get directions from a classroom to a building
    * US-
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
    * 14. The eigth floor is examined and scrolled through
    */
  it("Get directions between building and classroom and route directions", async () => {
    await element(by.id("Map_searchBar")).tap();
    await element(by.id("Map_searchBar")).typeText("H819");
    await element(by.id("Map_searchBar")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("BottomMenu_getDirectionsButton")).tap();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tap();
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).typeText("D Building");
    await element(by.id("DoubleSearch_FromSearchBarViewFrom")).tapAtPoint({ x: 200, y: 80 });
    await element(by.id("DoubleSearch_enabledViewRouteButton")).tap();
    await expect(element(by.id("PreviewDirections_MapView"))).toExist();
    await expect(element(by.id("BottomMenu_PreferenceStartButton"))).toExist();
    await element(by.id("BottomMenu_PreferenceStartButton")).tap();

    await expect(element(by.id("Directions_BottomRightButton"))).toExist();
    await element(by.id("Directions_BottomRightButton")).tap();

    await expect(element(by.id("Directions_BottomRightButton"))).toExist();
    await element(by.id("Directions_BottomRightButton")).tap();

    await expect(element(by.id("Directions_BottomRightButton"))).toExist();
    await element(by.id("Directions_BottomRightButton")).tap();

    await expect(element(by.id("Directions_InsideBuildingButton"))).toExist();
    await element(by.id("Directions_InsideBuildingButton")).tap();

    await expect(element(by.id("IndoorMapView_FloorScrollView"))).toExist();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "slow", 0.5);

    await element(by.id("FloorMenu_floorBarMenuView")).tapAtPoint({ x: 180, y: 23 });

    await expect(element(by.id("IndoorMapView_FloorScrollView"))).toExist();
    await element(by.id("IndoorMapView_FloorScrollView")).swipe("left", "slow");

  });

});