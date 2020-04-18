import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import MapDirections from "../screens/Directions";
import DoubleSearch from "../screens/DoubleSearch";
import IndoorMapView from "../screens/Indoor/IndoorMapView";
import HomeMap from "../screens/Map";
import MoreDetails from "../screens/MoreDetails";
import PreferenceMenu from "../screens/PreferenceMenu";
import PreviewDirections from "../screens/PreviewDirections";

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
    IndoorMapView: {
        screen: IndoorMapView,
        navigationOptions: {
            headerShown: false,
        }
    },
};

const routeStack = createStackNavigator(screens);

export default routeStack;