import React, { useEffect } from 'react';
import { View, AsyncStorage, Text, StyleSheet } from "react-native";
import { ToggleCampus } from './ToggleCampus';
import { AppLoading } from 'expo';
import { Icon } from 'native-base';

function BottomMenu () {
    
    const [selectedBuilding, setSelectedBuilding] = React.useState("");

    const buildingSelected = async() => {
        let name = await AsyncStorage.getItem('buildingSelected');
        setSelectedBuilding(name);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            buildingSelected();
        }, 100)
        return () => clearInterval(intervalId);
    })

    if (!selectedBuilding) {
        return (
            <View style={styles.container}>
                <Icon name="ios-arrow-up" style={styles.arrow} />
                <Text style={styles.mainLabel}>Nearby</Text>
                <Text style={styles.shortLabel}>Food, drinks & more</Text>
                <View style={styles.toggle}>
                    <ToggleCampus />
                </View>
            </View>
        )
    } else {
        return(
            <View style={styles.container}>
                <Icon name="ios-arrow-up" style={styles.arrow} />
                <Text style={styles.mainLabel}>{selectedBuilding}</Text>
                <Text style={styles.shortLabel}>More info</Text>
                <View style={styles.toggle}>
                    <ToggleCampus />
                </View>
            </View>
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
        bottom: -275
    },
    arrow: {
        color: '#ffffff',
        left: '5%',
        top: '7%'
    },
    toggle: {
        position: 'absolute',
        left: "80%",
        top: "6.5%"
    },
    mainLabel: {
        position: 'absolute', 
        top: '5%', 
        left: '12.5%', 
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'encodeSansExpanded'
    },
    shortLabel: {
        position: 'absolute', 
        top: '12%',
        left: '12.5%', 
        color: '#80828D',
        fontSize: 16,
        fontFamily: 'encodeSansExpanded'
    }
});

export { BottomMenu };