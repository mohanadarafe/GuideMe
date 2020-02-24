import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { Icon, Button, Right } from 'native-base';


function MoreDetails(props) {
    return (

        <View style={styles.container}>
            <View style={styles.imageContainer}>

                <Image style={styles.buildingImage} source={require('./../assets/Hall_Building.png')} />
            </View>
            <Icon name="ios-arrow-down" style={styles.arrowDown} onPress={() => { setIconSelected(false) }} />

            <Text style={styles.mainLabel}>{props.name}</Text>
            <Text style={styles.shortLabel}>Description</Text>
            <Text style={styles.reviewLabel}>19 Reviews</Text>

            <View style={styles.scrollTextContainer}></View>

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
        top: '18%'
    },

    shortLabel: {
        position: 'absolute',
        top: '33%',
        left: '10%',
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'encodeSansExpanded'
    },

    reviewLabel: {
        position: 'absolute',
        top: '25%',
        left: '10%',
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'encodeSansExpanded'
    },

    scrollTextContainer:{
        backgroundColor: '#ff7878',
        width: '85%',
        height: '35%',
        top: '38%',
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
        // // left: '23%',
        // flexDirection: 'row',
        //  alignSelf: 'center',
        //  justifyContent: 'center',
        fontSize: 54
    },

});


export { MoreDetails }