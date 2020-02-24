import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import { Icon, Button, Right } from 'native-base';


function MoreDetails (props) {
    return(
        <View>
         
            <Text style={styles.mainLabel}>{props.name}</Text>
            <Button style={styles.directionButton}><Text style={{ color: 'white' }}>Get Directions</Text></Button>
            
        </View>  


    );
}

export const styles = StyleSheet.create({


    mainLabel: {
        color: '#FFFFFF',
        // position: 'absolute',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'encodeSansExpanded',
        top:'100%'
    },

    directionButton: {
        width: 300,
        height: 60,
        top:'160%',
        left: '50%',
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3ACCE1',
        borderRadius: 10,
    }

});


export { MoreDetails }