import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import NearbyInterest from "../screens/Menu/NearbyInterest";
import NearbyInterestDetails from "../screens/Menu/NearbyInterestDetails";

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
    }
};

const nearbyInterestStack = createStackNavigator(screens);

export default nearbyInterestStack; 