import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import NearbyInterest from "../screens/Menu/NearbyInterest";
import NearbyInterestDetails from "../screens/Menu/NearbyInterestDetails";


// Add screens here
const screens = {
    NearbyInterest:{
        screen: NearbyInterest,
        navigationOptions:{
            headerShown: false,
        }
    },
    NearbyInterestDetails:{
        screen: NearbyInterestDetails,
        navigationOptions:{
            headerShown: false,
        }
    }


};

const NearbyStack = createStackNavigator(screens);

export default NearbyStack; 