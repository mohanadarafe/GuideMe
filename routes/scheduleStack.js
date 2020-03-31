import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import CourseSchedule from "../screens/Menu/CourseSchedule";
import SideMenuMoreDetails from "../screens/Menu/SideMenuMoreDetails";

const screens = {
    
    CourseSchedule:{
        screen: CourseSchedule,
        navigationOptions:{
            headerShown: false,
        }
    },

    SideMenuMoreDetails: {
        screen: SideMenuMoreDetails, 
        navigationOptions:{
            headerShown: false,
        }
    }


};

const CourseScheduleStack = createStackNavigator(screens);

export default CourseScheduleStack; 