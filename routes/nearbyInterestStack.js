import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import NearbyInterest from "../screens/Menu/NearbyInterest";
import NearbyInterestDetails from "../screens/Menu/NearbyInterestDetails";
import DoubleSearch from "../screens/DoubleSearch";
import PreviewDirections from "../screens/PreviewDirections";
import MapDirections from "../screens/Directions";

const screens = {
    NearbyInterest: {
        screen: (props) => <NearbyInterest {...props} fromSideMenu={"side menu"} />,
        navigationOptions: {
            headerShown: false,
        }
    },
    NearbyInterestDetails: {
        screen: NearbyInterestDetails,
        navigationOptions: {
            headerShown: false,
        }
    },
    DoubleSearch: {
        screen: DoubleSearch,
        navigationOptions: {
            headerShown: false,
        }
    },
    PreviewDirections: {
        screen: PreviewDirections,
        navigationOptions: {
            headerShown: false
        }
    },
    Directions: {
        screen: MapDirections,
        navigationOptions: {
            headerShown: false
        }
    },
};

const nearbyInterestStack = createStackNavigator(screens);

export default nearbyInterestStack; 