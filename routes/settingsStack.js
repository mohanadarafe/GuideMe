import { createStackNavigator, TransitionPresets } from "react-navigation-stack";
import Settings from "../screens/Menu/Settings";

const screens = {
    
    Settings:{
        screen: Settings,
        navigationOptions:{
            headerShown: false,
        }
    }


};

const SettingsStack = createStackNavigator(screens);

export default SettingsStack; 