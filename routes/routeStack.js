import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Map from '../screens/Map';

// Add screens here
const screens = {
    Map: {
        screen: Map,
        navigationOptions: {
            headerShown: false
        },
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);