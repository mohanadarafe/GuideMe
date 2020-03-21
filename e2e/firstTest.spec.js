/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Main screen", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it.skip("should have a map and a searchbar", async () => {
    await expect(element(by.id("mapview"))).toBeVisible();
    await expect(element(by.id("search"))).toBeVisible();
  });
  it.skip("Should click on the searchbar and type: hall building", async () => {
    await element(by.id("search")).tap();
    await element(by.id("search")).typeText("hall building");
  });
});