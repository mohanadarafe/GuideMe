import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import Nearby from "../screens/Menu/Nearby";

// Add screens here
const screens = {
    
    Nearby:{
        screen: Nearby,
        navigationOptions:{
            headerShown: false,
        }
    }


};

const NearbyStack = createStackNavigator(screens);

export default NearbyStack; 