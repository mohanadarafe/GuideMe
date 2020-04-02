import { createStackNavigator } from "react-navigation-stack";
import NearbyInterest from "../screens/Menu/NearbyInterest";
import NearbyInterestDetails from "../screens/Menu/NearbyInterestDetails";

const screens = {
    NearbyInterest: {
        screen: NearbyInterest,
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