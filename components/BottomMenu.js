import React, { useEffect } from 'react';
import { CurrentBuilding } from "./CurrentBuilding";
import { View, AsyncStorage, Text, StyleSheet } from "react-native";
import { ToggleCampus } from './ToggleCampus';
import { AppLoading } from 'expo';

function BottomMenu () {
    
    const [selectedBuilding, setSelectedBuilding] = React.useState("");
    //var currentBuilding = CurrentBuilding();

    // buildingSelected = async() => {
    //     let name = await AsyncStorage.getItem('buildingSelected');
    //     setSelectedBuilding(name);
    // }

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         buildingSelected();
    //     }, 100)
    //     return () => clearInterval(intervalId);
    // })

    if (styles) {
        return (
            <View style={styles.container}>
                {/* <Text style={styles.mainLabel}>{selectedBuilding}</Text> */}
                <Text style={styles.shortLabel}>More info</Text>
                <View style={styles.toggle}>
                    <ToggleCampus />
                </View>
            </View>
        )
    } else {
        return(
            <AppLoading />
        )
    }
    
}

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 350,
        position: 'absolute',
        borderRadius: 30.5,
        backgroundColor: '#2A2E43',
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: -275
    },
    toggle: {
        left: "30%",
        top: "6.5%"
    },
    mainLabel: {
        position: 'absolute', 
        top: '5%', 
        left: '15%', 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'encodeSansExpanded'
    },
    shortLabel: {
        top: '8%', 
        right: '30%', 
        color: '#80828D',
        fontSize: 16,
        fontFamily: 'encodeSansExpanded'
    }
});

export { BottomMenu };