import React, { useState } from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import SwitchSelector from 'react-native-switch-selector';

const options = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '5', value: '4' },
    { label: '6', value: '5' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
];

export function FloorMenu() {
    const [floorNumber, setFloorNumber] = React.useState("8");
    AsyncStorage.setItem("floorSelected", floorNumber);

    return(
        <SwitchSelector
            style={styles.selector} 
            options={options} 
            initial={6}
            buttonColor = {"#3ACCE1" }
            onPress={(value) => {setFloorNumber(value);}} 
        />
    );
}

export const styles = StyleSheet.create({
    selector: {
        height: "100%",
        width: "75%"
    }
});