import { createStackNavigator } from "react-navigation-stack";
import ShuttleBus from "../screens/Menu/ShuttleBus";

const screens = {
    ShuttleBus: {
        screen: ShuttleBus,
        navigationOptions: {
            headerShown: false,
        }
    }
};

const shuttleBusStack = createStackNavigator(screens);

export default shuttleBusStack; 