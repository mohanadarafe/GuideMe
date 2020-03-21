/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Main screen", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  /**
  * The following source code represents the following automated test scenario
  * 1. Load the app
  * 2. Display main screen
  * 3. Click on the searchbar
  * 4. Type the query: "hall building"
  * 5. Select the corresponding item from the dropdown list
  * 6. Click on the bottom menu (not yet implemented)
  * 7. Scroll down and read the information provided (not yet implemented)
  */

  it("Should click on the searchbar and type: hall building", async () => {
    await element(by.id("search")).tap();
    await element(by.id("search")).typeText("hall building");
    await element(by.id("search")).tapAtPoint({ x: 200, y: 75 });

    // TODO: Fix x and y coordinates so that it clicks on the BottomMenu
    // await element(by.id("search")).tapAtPoint({ x: 50, y: 890 });
  });
});