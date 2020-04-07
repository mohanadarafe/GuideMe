/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Main screen", () => {
  /** BEFORE Each Test
   * 1. Load the app
   * 2. Display main screen
   */
  beforeEach(async () => {
    await reloadApp();
  });
});