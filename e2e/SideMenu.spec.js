/* eslint-disable no-undef */
const { reloadApp } = require("detox-expo-helpers");

describe("Exploring the side menu", () => {
    /**USER STORIES COVERED
     * US-21 - As a user, I would like to view the Concordia shuttle bus schedule for both campuses.
     * US-34 - As a user, I would like to see the nearest outdoor points of interest.
     * US-36 - As a user, I would like to see a detailed description of the selected places.
     */

    /** BEFORE Each Test
     * 1. Load the app
     * 2. Display main screen
     */
    beforeEach(async () => {
        await reloadApp();
    });

    /** Scenario: View the shuttle bus schedule
     * US-21 - As a user, I would like to view the Concordia shuttle bus schedule for both campuses.
     * 1. Check that the menu icon exists
     * 2. Click on the menu icon
     * 3. Click on shuttle Bus to view the schedule
     */
    it.skip("View shuttle bus schedule", async () => {
        await expect(element(by.id("Menu_icon"))).toExist();
        await element(by.id("Menu_icon")).tap();
        await expect(element(by.id("Shuttlebus_icon"))).toExist();
        await element(by.id("Shuttlebus_icon")).tap();
    });

    /** Scenario: View the shuttle bus schedule
     * US-34 - As a user, I would like to see the nearest outdoor points of interest.
     * 1. Check that the menu icon exists
     * 2. Click on the menu icon
     * 3. Click on Points of Interest to view the  nearest outdoor points of interest.
     * 4. Toggle between both campuses
     */
    it.skip("View nearest points of interest", async () => {
        await expect(element(by.id("Menu_icon"))).toExist();
        await element(by.id("Menu_icon")).tap();
        await expect(element(by.id("Food_icon"))).toExist();
        await element(by.id("Food_icon")).tap();
        await element(by.id("Title_text")).tapAtPoint({ x: 200, y: 100 }); //200 , 80
    });

    /** Scenario: View the shuttle bus schedule
    * US-36 - As a user, I would like to see a detailed description of the selected places.
    * 1. Check that the menu icon exists
    * 2. Click on the menu icon
    * 3. Click on Points of Interest to view the  nearest outdoor points of interest.
    * 4. Choose one
    * 5. View detailed description
    */
    it.skip("View nearest points of interest", async () => {
        await expect(element(by.id("Menu_icon"))).toExist();
        await element(by.id("Menu_icon")).tap();
        await expect(element(by.id("Food_icon"))).toExist();
        await element(by.id("Food_icon")).tap();
        await element(by.id("Title_text")).tapAtPoint({ x: 200, y: 300 }); //200 , 80

    });
});
