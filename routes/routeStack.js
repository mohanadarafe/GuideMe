import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeMap from "../screens/Map";
import MapDirections from "../screens/Directions";
import MoreDetails from "../screens/MoreDetails";
// Add screens here
const screens = {
    Directions: {
        screen: MapDirections,
        navigationOptions: {
            headerShown: false
        }
    },
    Map: {
        screen: HomeMap,
        navigationOptions: {
            headerShown: false
        }  
    },
    buildingMoreDetails: {
        screen: MoreDetails
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);