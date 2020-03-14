import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeMap from "../screens/Map";
import Directions from "../screens/Directions";
import MoreDetails from "../screens/MoreDetails";
// Add screens here
const screens = {
    Map: {
        screen: HomeMap,
        navigationOptions: {
            headerShown: false
        }  
    },
    buildingMoreDetails: {
        screen: MoreDetails
    },
    MapDirections: {
        screen: Directions
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);