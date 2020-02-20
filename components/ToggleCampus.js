import React from 'react';
import { Switch } from 'react-native';
import { styles } from '../screens/Map'


function ToggleCampus(props){
    return (
        <Switch
            style={styles.switch}
            value={props.val}
            onValueChange = {(val) => props.onChange(val)}
            trackColor={{true: "green", false: "red"}}
        ></Switch>
    );
}

export { ToggleCampus };