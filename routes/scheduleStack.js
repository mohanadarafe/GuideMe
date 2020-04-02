import { createStackNavigator } from "react-navigation-stack";
import CourseSchedule from "../screens/Menu/CourseSchedule";
import CourseScheduleDetails from "../screens/Menu/CourseScheduleDetails";
import DoubleSearch from "../screens/DoubleSearch";

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
};

const scheduleStack = createStackNavigator(screens);

export default scheduleStack; 