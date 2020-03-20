import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeMap from "../screens/Map";
import MoreDetails from "../screens/MoreDetails";
import DoubleSearch from "../screens/DoubleSearch";
import MapDirections from "../screens/Directions";
import PreviewDirections from "../screens/PreviewDirections";
import PreferenceMenu from "../screens/PreferenceMenu";

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

    }




};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);