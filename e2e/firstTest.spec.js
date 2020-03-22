/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Main screen", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  /** TEST 1
   * The following source code represents the following automated test scenario
   * 1. Load the app
   * 2. Display main screen
   * 3. Click on Hall Building from the Map
   * 4. Checks if the bottom menu changed
   * 5. Click the GET INSIDE button
   * 6. Change floors
   * 7. Scroll across the floor map
   * 8. Click EXIT BUILDING button
   */
  // it("Get inside building and scroll through different floors", async () => {
  //   await element(by.id("search")).tapAtPoint({ x: 165, y: 370 });
  //   await expect(element(by.id("getInside"))).toExist();
  //   await element(by.id("getInside")).tapAtPoint({ x: 350, y: 45 });
  //   await expect(element(by.id("floorBarMenu"))).toExist();
  //   await element(by.id("floorBarMenu")).tapAtPoint({ x: 192, y: 23 });

  //   await expect(element(by.id("insideScrollView"))).toExist();
  //   await element(by.id("insideScrollView")).swipe("left", "fast");

  //   await expect(element(by.id("insideView"))).toExist();
  //   await element(by.id("insideView")).tapAtPoint({ x: 350, y: 45 });
  // });

  /** TEST 2
   * The following source code represents the following automated test scenario
   * 1. Load the app
   * 2. Display main screen
   * 3. Click on the searchbar
   * 4. Type the query: "hall building"
   * 5. Select the corresponding item from the dropdown list
   * 6. Click on the bottom menu (not yet implemented)
   * 7. Scroll down and read the information provided (not yet implemented)
   */
  // it("Should click on the searchbar and type: hall building", async () => {
  //   await element(by.id("search")).tap();
  //   await element(by.id("search")).typeText("hall building");
  //   await element(by.id("search")).tapAtPoint({ x: 200, y: 75 });
  //   await expect(element(by.id("iconBottom2"))).toExist();
  //   await element(by.id("iconBottom2")).tapAtPoint({ x: 30, y: 40 });
  // });

  /** TEST 3
   * The following source code represents the following automated test scenario
   * 1. Load the app
   * 2. Display main screen
   * 3. Verify the map is present
   * 4. Click the toggle button to switch the map to Loyola
   * 5. Verifies the map is present
   * 6. Returns back to SGW campus
   */
  it("Toggle button switch to Loyola and back", async () => {
    await expect(element(by.id("mapview"))).toExist();
    await expect(element(by.id("iconBottomInital"))).toExist();
    await expect(element(by.id("toggleButton"))).toExist();

    await element(by.id("toggleButton")).longPress();
    await expect(element(by.id("mapview"))).toExist();
    await element(by.id("toggleButton")).longPress();
  });
});
