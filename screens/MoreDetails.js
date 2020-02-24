import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { Icon, Button, Right, Separator } from 'native-base';


function MoreDetails(props) {
    return (

        <View style={styles.container}>
            <View style={styles.imageContainer}>

                <Image style={styles.buildingImage} source={require('./../assets/Hall_Building.png')} />
            </View>


            <Text style={styles.mainLabel}>{props.name}</Text>
            <Text style={styles.reviewLabel}>19 Reviews</Text>
            <View style={styles.scrollTextContainer}></View>
            <Text style={styles.shortLabel}>Description</Text>

            <Button style={styles.mapButton}>
                <View style={styles.iconContainer}>
                    <Icon type="Feather" name="map-pin" style={styles.mapPin}>
                    </Icon></View>
                <View style={styles.separator}></View>
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.mapPinLabel}>
                        1455 Boulevard de Maisonneuve  O,  Montreal, QCH3G 1M8</Text>
                </View>

            </Button>

            <Button style={styles.phoneButton}>
                <View style={styles.iconContainer}>
                    <Icon type="Feather" name="phone" style={styles.phone}>
                    </Icon></View>
                <View style={styles.separator}></View>
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.phoneLabel}>+1(514)-848-2424</Text>
                </View>
            </Button>
            <Button style={styles.directionButton}><Text style={{ color: 'white' }}>Get Directions</Text></Button>
        </View>
    );
}

export const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%'
    },

    mainLabel: {
        color: '#FFFFFF',
        left: '10%',
        position: 'absolute',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'encodeSansExpanded',
        top: '16%'
    },

    shortLabel: {
        position: 'absolute',
        top: '30%',
        left: '10%',
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'encodeSansExpanded'
    },

    reviewLabel: {
        position: 'absolute',
        top: '21%',
        left: '10%',
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'encodeSansExpanded'
    },

    scrollTextContainer: {
        backgroundColor: '#ff7878',
        width: '85%',
        height: '40%',
        top: '27%',
        position: 'absolute'
    },

    directionButton: {
        width: '85%',
        height: '8%',
        fontSize: 25,
        bottom: '10%',
        justifyContent: 'center',
        backgroundColor: '#3ACCE1',
        borderRadius: 10,
    },

    imageContainer: {
        width: '100%',
        height: '25%',
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


    mapButton: {
        top: '150%',
        backgroundColor: '#74d2b3',
        height: '8%',
        width: "85%"

    },

    mapPin: {
        color: '#FFFFFF',
        position: 'absolute',


    },

    mapPinLabel: {
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'encodeSansExpanded',
        position: 'absolute',


    },

    phoneButton: {
        top: '70%',
        backgroundColor: '#074e67',
        height: '8%',
        width: '85%',

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

    iconContainer: {
        height: '100%',
        width: '16%',
        backgroundColor: '#353A50',
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    buttonTextContainer: {
        height: '100%',
        width: '80%',
        backgroundColor: '#b39a2d',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },

    separator: {
        height: '100%',
        width: '4%',
        backgroundColor: '#522759',
        justifyContent: 'center',
    }

});


export { MoreDetails }