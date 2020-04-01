/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import SideMenu from "../screens/SideMenu";
import HomeStack from "./routeStack";
import NearbyStack from "./nearbyInterestStack";
import CourseScheduleStack from "./scheduleStack";
import ShuttleBus from "./shuttleBusStack";
import Settings from "./settingsStack";
import AboutUs from "./aboutUsStack";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

/**
 * Description: This constant is taking a createDrawerNavigator
 * and emboddies at the same all the stacks composed of screens 
 * to create the navigator that will be used for the side menu. 
 * Once the drawerNavigator is created, it will be placed inside the appCointaner
 * the appContainer will create the global navigation functionalities over the stacks,
 * The app container will be finally rendered in the App.js component
 * Returns a drawerNavigator object 
 */

const Drawer = createDrawerNavigator({

    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: "Map",
            drawerIcon: ({ tintColor }) => <Feather name="home" size={22} color={tintColor} />
        }
    },

    CourseSchedule: {
        screen: CourseScheduleStack,
        navigationOptions: {
            title: "Course Schedule",
            drawerIcon: ({ tintColor }) => <MaterialCommunityIcons name="calendar" size={22} color={tintColor} />
        }
    },

    ShuttleBus: {
        screen: ShuttleBus,
        navigationOptions: {
            title: "Shuttle Bus",

            drawerIcon: ({ tintColor }) => <MaterialCommunityIcons name="bus-clock" size={22} color={tintColor} />,
        }
    },

    NearbyInterest: {
        screen: NearbyStack,
        navigationOptions: {
            title: "Points of Interest",
            drawerIcon: ({ tintColor }) => <MaterialCommunityIcons name="food-fork-drink" size={22} color={tintColor} />,

        }
    },

    Settings: {
        screen: Settings,
        navigationOptions: {
            title: "Settings",
            drawerIcon: ({ tintColor }) => <Feather name="settings" size={22} color={tintColor} />
        }
    },

    AboutUs: {
        screen: AboutUs,
        navigationOptions: {
            title: "About Us",
            drawerIcon: ({ tintColor }) => <Feather name="info" size={22} color={tintColor} />
        }
    },

}, {
    contentComponent: props => <SideMenu {...props} />,

    drawerWidth: Dimensions.get("window").width * 0.62,
    hideStatusBar: "true",

    contentOptions: {
        activeBackgroundColor: "rgba( 77, 164, 253, 0.2)",
        activeTintColor: "#4DA4FD",
        labelStyle: {
            fontFamily: "encodeSansExpanded",
        },
        itemsContainerStyle: {
            marginTop: 16,
            marginHorizontal: 8
        },
        itemStyle: {
            borderRadius: 4
        }
    }
});

export default createAppContainer(Drawer);
