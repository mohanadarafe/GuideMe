import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import CourseSchedule from "../screens/Menu/CourseSchedule";

const screens = {
    
    CourseSchedule:{
        screen: CourseSchedule,
        navigationOptions:{
            headerShown: false,
        }
    }


};

const CourseScheduleStack = createStackNavigator(screens);

export default CourseScheduleStack; 