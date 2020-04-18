import { TransitionPresets } from "react-navigation-stack";
import DoubleSearch from "../screens/DoubleSearch";
import PreviewDirections from "../screens/PreviewDirections";
import MapDirections from "../screens/Directions";
import PreferenceMenu from "../screens/PreferenceMenu";

export const constantStacks = {

    DoubleSearch: {
        screen: DoubleSearch,
        navigationOptions: {
            headerShown: false,
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
    PreferenceMenu: {
        screen: PreferenceMenu,
        navigationOptions: {
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS
        }
    },
    
}

