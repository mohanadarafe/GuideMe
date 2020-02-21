import React from 'react';
import { Switch, AsyncStorage } from 'react-native';
import { styles } from '../screens/Map'


function ToggleCampus () {
    const [togVal, setTogVal] = React.useState(true);
    AsyncStorage.setItem("toggle", togVal.toString());
    
    switchVal = async() => {
        let val = await AsyncStorage.getItem("toggle");
        setTogVal(val);
    }    

    return (
        <Switch
            style={styles.switch}
            value={togVal}
            onValueChange={(val) => setTogVal(val)}
            trackColor={{ true: "green", false: "red" }}
        ></Switch>
    );
}

export { ToggleCampus };