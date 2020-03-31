import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeMap from "../screens/Map";
import MoreDetails from "../screens/MoreDetails";
import DoubleSearch from "../screens/DoubleSearch";
import MapDirections from "../screens/Directions";
import PreviewDirections from "../screens/PreviewDirections";
import PreferenceMenu from "../screens/PreferenceMenu";
import IndoorMapView from "../screens/Indoor/IndoorMapView";
import Nearby from "../screens/Menu/Nearby";

// Add screens here
const screens = {

    Map: {
        screen: HomeMap,
        navigationOptions: {
            headerShown: false
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
    buildingMoreDetails: {
        screen: MoreDetails,
    },

    DoubleSearch: {
        screen: DoubleSearch,
        navigationOptions: {
            headerShown: false,
        }
    },

    PreferenceMenu: {
        screen: PreferenceMenu,
        navigationOptions: {
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS
        }
    },

    MoreDetails: {
        screen: MoreDetails,
        navigationOptions: {
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS
        }
    },

    IndoorMapView:{
        screen: IndoorMapView,
        navigationOptions: {
            headerShown: false,
        }
    },
    // Nearby:{
    //     screen: Nearby,
    //     navigationOptions:{
    //         headerShown: false,
    //         ...TransitionPresets.ModalSlideFromBottomIOS
    //     }
    // }
    
};

const HomeStack = createStackNavigator(screens);

export default HomeStack;