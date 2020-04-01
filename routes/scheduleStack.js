import { createStackNavigator } from "react-navigation-stack";
import CourseSchedule from "../screens/Menu/CourseSchedule";
import CourseScheduleDetails from "../screens/Menu/CourseScheduleDetails";

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
    }
};

const CourseScheduleStack = createStackNavigator(screens);

export default CourseScheduleStack; 