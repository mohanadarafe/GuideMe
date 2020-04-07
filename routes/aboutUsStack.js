import { createStackNavigator } from "react-navigation-stack";
import AboutUs from "../screens/Menu/AboutUs";

const screens = {
    
    AboutUs:{
        screen: AboutUs,
        navigationOptions:{
            headerShown: false,
        }
    }
};

const aboutUsStack = createStackNavigator(screens);

export default aboutUsStack; 