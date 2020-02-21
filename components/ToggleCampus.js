import React from 'react';
import { StyleSheet, Switch, AsyncStorage } from 'react-native';


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

const styles = StyleSheet.create({
    switch: {
        height: 140,
        width: 70
    },
})

export { ToggleCampus };