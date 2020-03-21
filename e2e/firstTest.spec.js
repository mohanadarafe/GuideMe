/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Main screen", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it("should have a map and a searchbar", async () => {
    await expect(element(by.id("mapview"))).toBeVisible();
    await element(by.id("search")).tap();
  });
});