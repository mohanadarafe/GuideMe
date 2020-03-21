/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Main screen", () => {
  beforeEach(async () => {
    await reloadApp();
  });
  it.skip("Should click on the searchbar and type: hall building", async () => {
    await element(by.id("search")).tap();
    await element(by.id("search")).typeText("hall building");
    await element(by.id("search")).tapAtPoint({ x: 200, y: 75 });

    // TODO: Fix x and y coordinates so that it clicks on the BottomMenu
    // await element(by.id("search")).tapAtPoint({ x: 50, y: 890 });
  });
});