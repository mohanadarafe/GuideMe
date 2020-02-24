import React, { useEffect } from 'react';
import { View, AsyncStorage, Text, StyleSheet, Image } from "react-native";
import { ToggleCampus } from './ToggleCampus';
import { Icon, Button, Right } from 'native-base';
import { MoreDetails } from '../screens/MoreDetails';

function BottomMenu() {
    const [selectedBuilding, setSelectedBuilding] = React.useState("");
    const [iconSelected, setIconSelected] = React.useState(false);

    const buildingSelected = async () => {
        let name = await AsyncStorage.getItem('buildingSelected');
        setSelectedBuilding(name);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            buildingSelected();
        }, 100)
        return () => clearInterval(intervalId);
    })

    if (iconSelected && selectedBuilding) {
        return (
            <View style={styles.moreDetails}>
                <MoreDetails name={selectedBuilding} />
                <Icon name="ios-arrow-down" style={styles.arrowDown} onPress={() => { setIconSelected(false) }} />
            </View>
        );
    }

    else if (iconSelected && !selectedBuilding) {
        return (
            <View style={styles.moreDetails}>
                <Icon name="ios-arrow-down" style={styles.arrowDown} onPress={() => { setIconSelected(false) }} />
            </View>
        );
    }

    if (!selectedBuilding) {
        return (
            <View style={styles.container}>
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={() => { setIconSelected(true) }} />
                <Text style={styles.mainLabel}>Nearby</Text>
                <Text style={styles.shortLabel}>Food, drinks & more</Text>
                <View style={styles.toggle}>
                    <ToggleCampus />
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={() => { setIconSelected(true) }} />
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
    moreDetails: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#2A2E43',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    arrowUp: {
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
    },

    imageContainer: {
        width: '100%',
        height: '30%',
        top: '0%',
        position: 'absolute',
        backgroundColor: '#000000',
        opacity: 0.3

    },

    buildingImage: {
        width: '100%',
        height: '100%',
        top: '0%',
        position: 'relative'
    },

    arrowDown: {
        color: '#ffffff',
        top: '5%',
        fontSize: 54,
        position: 'absolute'
    },



});

export { BottomMenu };