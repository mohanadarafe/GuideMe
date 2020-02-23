import React from 'react';
import { Text, View, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import { styles } from '../screens/Map'


function AccessibilityIdentification() {
    let handicapedSignSource = './../assets/Icons/handicap_icon.png';

        return(
            <View>
                    <Marker
                    coordinate={{ latitude: 45.497245, longitude: -73.578968}}>
                    <Image style={styles.AccessibilityIdentification} source={require(handicapedSignSource)}/>
                    </Marker>

                    <Marker
                    coordinate={{ latitude: 45.496612, longitude: -73.578010}}>
                    <Image style={styles.AccessibilityIdentification} source={require(handicapedSignSource)}/>
                    </Marker>

                    <Marker
                    coordinate={{ latitude: 45.495899, longitude:  -73.578712}}>
                    <Image style={styles.AccessibilityIdentification} source={require(handicapedSignSource)}/>
                    </Marker>
            </View>
            );
    }


export {AccessibilityIdentification};