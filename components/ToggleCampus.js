import React from 'react';
import { StyleSheet, Switch, AsyncStorage } from 'react-native';


function ToggleCampus () {
    const [togVal, setTogVal] = React.useState(true);
    AsyncStorage.setItem("toggle", togVal.toString());

    return (
        <Switch
            value={togVal}
            onValueChange={(val) => setTogVal(val)}
            trackColor={{ true: "green", false: "red" }}
        ></Switch>
    );
}

export { ToggleCampus };