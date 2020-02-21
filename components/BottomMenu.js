import React, { useEffect } from 'react';
import { CurrentBuilding } from "./CurrentBuilding";
import { View, AsyncStorage, Text, StyleSheet } from "react-native";
import { ToggleCampus } from './ToggleCampus';

function BottomMenu () {
    const [selectedBuilding, setSelectedBuilding] = React.useState("");
    var currentBuilding = CurrentBuilding();

    buildingSelected = async() => {
        let name = await AsyncStorage.getItem('buildingSelected');
        setSelectedBuilding(name);
    }    

    useEffect(() => {
        const intervalId = setInterval(() => {
            buildingSelected();
        }, 100)
        return () => clearInterval(intervalId);
    })

    return (
        <View style={styles.rectangle}>
            <Text style={styles.mainLabel}>Hall Building</Text>
            <View style={styles.toggle}>
                <ToggleCampus />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rectangle: {
        width: '100%',
        height: 150,
        position: 'absolute',
        borderRadius: 30.5,
        backgroundColor: '#2A2E43',
        justifyContent: 'center',
        bottom: -40
    },
    toggle: {
        position: 'absolute', 
        top: '50%', 
        left: '70%', 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    mainLabel: {
        position: 'absolute', 
        top: '20%', 
        left: '15%', 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 20
    }
  });

export { BottomMenu };