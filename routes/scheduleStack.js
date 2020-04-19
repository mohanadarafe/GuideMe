import { createStackNavigator } from "react-navigation-stack";
import CourseSchedule from "../screens/Menu/CourseSchedule";
import { constantStacks } from "../constants/constantStack";

const additionalScreens = constantStacks;

const screens = {
    CourseSchedule: {
        screen: CourseSchedule,
        navigationOptions: {
            headerShown: false,
        }
    },
};

const scheduleStack = createStackNavigator({ ...screens, ...additionalScreens });

export default scheduleStack; 