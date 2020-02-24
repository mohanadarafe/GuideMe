import React, { useEffect } from 'react';
import { View, AsyncStorage, Text, StyleSheet, Image } from "react-native";
import { ToggleCampus } from './ToggleCampus';
import { Icon, Button, Right } from 'native-base';
import { AppLoading } from 'expo';

function InfoPage() {

    const [selectedBuilding, setSelectedBuilding] = React.useState("");

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

    return (
        <View style={styles.container}>



            <Text style={styles.shortLabel}>Description</Text>

            <View style={styles.imageContainer}>
                <Image style={styles.buildingImage} source={require('./../assets/Hall_Building.png')} />
            </View>
            <Icon name="ios-arrow-down" style={styles.arrow} />
            <Button style={styles.directionButton}><Text style={{ color: 'white' }}>Get Directions</Text></Button>
            <Text style={styles.mainLabel}>{selectedBuilding}Hall Building</Text>

            <View style={styles.scrollTextContainer}></View>
            <View style={styles.buttonContainer}>
                
                <Button style={styles.mapButton}>
                    <Icon type="Feather" name="map-pin" style={styles.mapPin}></Icon>
                    <Text style={styles.mapPinLabel}>
                        1455 Boulevard de Maisonneuve  O,  Montreal, QCH3G 1M8</Text>
                </Button>

                <Button style={styles.phoneButton}>
                    <Icon type="Feather" name="phone" style={styles.phone}></Icon>
                    <Text style={styles.phoneLabel}>+1(514)-848-2424</Text>
                </Button>

            </View>



        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 30.5,
        backgroundColor: '#2A2E43',
    },

    imageContainer: {
        width: '100%',
        height: 280,
        top: '0%',
        position: 'absolute',
        backgroundColor: '#000000',
        opacity: 0.3

    },

    buildingImage: {
        width: '100%',
        height: 300,
        top: '0%',
        position: 'relative'
    },

    arrow: {
        color: '#FFFFFF',
        left: '48%',
        top: '7%',
        alignItems: "center",
        justifyContent: "center"

    },

    scrollTextContainer:{
        backgroundColor: '#ff7878',
        height: '24%',
        width:  '85%',
        top: '42%',
        left: '8%',
        position: 'absolute'
    },

    mapButton: {
        top: '2%',
        backgroundColor: '#74d2b3',
        height: "50%"

    },

    mapPin: {
        color: '#FFFFFF',
        

    },

    mapPinLabel: {
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'encodeSansExpanded',
        position: 'absolute',


    },

    phoneButton:{
        bottom: '2%',
        backgroundColor: '#074e67',
        height: "50%"

    },

    phone: {
        position: 'absolute',
        color: '#FFFFFF',

    },

    phoneLabel: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'encodeSansExpanded'

    },

    buttonContainer: {
        width: '85%',
        height: 170,
        bottom: '13%',
        left: '8%',
        position: 'absolute',
        backgroundColor: '#000000',
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'flex-start'
    },

    mainLabel: {
        position: 'absolute',
        top: '23%',
        left: '12.5%',
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'encodeSansExpanded'
    },

    shortLabel: {
        position: 'absolute',
        top: '37%',
        left: '12.5%',
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'encodeSansExpanded'
    },

    directionButton: {
        width: 300,
        height: 60,
        position: 'absolute',
        bottom: '5%',
        left: '15%',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3ACCE1',
        borderRadius: 10,
    }


});


export { InfoPage };