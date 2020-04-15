import { createStackNavigator } from "react-navigation-stack";
import CourseSchedule from "../screens/Menu/CourseSchedule";
import CourseScheduleDetails from "../screens/Menu/CourseScheduleDetails";
import DoubleSearch from "../screens/DoubleSearch";
import PreviewDirections from "../screens/PreviewDirections";
import MapDirections from "../screens/Directions";

const screens = {

    CourseSchedule: {
        screen: CourseSchedule,
        navigationOptions: {
            headerShown: false,
        }
    },
    CourseScheduleDetails: {
        screen: CourseScheduleDetails,
        navigationOptions: {
            headerShown: false,
        }
    },
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
};

const scheduleStack = createStackNavigator(screens);

export default scheduleStack; 