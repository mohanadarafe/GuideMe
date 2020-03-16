import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeMap from "../screens/Map";
import Directions from "../components/Directions";
import MoreDetails from "../screens/MoreDetails";
import DoubleSearch from "../screens/DoubleSearch";
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
        screen: Directions,
        navigationOptions: {
            headerShown: false
        }  
    },
    DoubleSearch: {
        screen: DoubleSearch,
        navigationOptions: {
            headerShown: false
        }
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);