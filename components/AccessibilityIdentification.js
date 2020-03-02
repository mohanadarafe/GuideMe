import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

/**
 * US9 - As a user, I would like to know the accessibility of a building.
 * The following function displays icons on the buildings representing
 * the accesibility of a building. 
 * 
 * NOTE: We are only displaying them in MoreDetails page now. To be
 * implemented in sprint 3.
 */
function AccessibilityIdentification() {

    let handicapIconPath = "./../assets/Icons/handicap_icon.png";

    return (
        <View>

            {/* H Building  */}
            <Marker
                coordinate={{ latitude: 45.497245, longitude: -73.578968 }}>
                <Image style={styles.accessibilityIdentification} source={require(handicapIconPath)} />
            </Marker>

            {/* LB Building */}
            <Marker
                coordinate={{ latitude: 45.496612, longitude: -73.578010 }}>
                <Image style={styles.accessibilityIdentification} source={require(handicapIconPath)} />
            </Marker>

            {/* GM Building */}
            <Marker
                coordinate={{ latitude: 45.495899, longitude: -73.578712 }}>
                <Image style={styles.accessibilityIdentification} source={require(handicapIconPath)} />
            </Marker>

            {/* EV Building */}
            <Marker
                coordinate={{ latitude: 45.495735, longitude: -73.578430 }}>
                <Image style={styles.accessibilityIdentification} source={require(handicapIconPath)} />
            </Marker>

            {/* MB Building */}
            <Marker
                coordinate={{ latitude: 45.495314, longitude: -73.579055 }}>
                <Image style={styles.accessibilityIdentification} source={require(handicapIconPath)} />
            </Marker>

            {/* SP Building  */}
            <Marker
                coordinate={{ latitude: 45.457899, longitude: -73.641310 }}>
                <Image style={styles.accessibilityIdentification} source={require(handicapIconPath)} />
            </Marker>

            {/* CJ Building */}
            <Marker
                coordinate={{ latitude: 45.457564, longitude: -73.640394 }}>
                <Image style={styles.accessibilityIdentification} source={require(handicapIconPath)} />
            </Marker>

            {/* CC Building  */}
            <Marker
                coordinate={{ latitude: 45.458213, longitude: -73.640150 }}>
                <Image style={styles.accessibilityIdentification} source={require(handicapIconPath)} />
            </Marker>

            {/* AD Building */}
            <Marker
                coordinate={{ latitude: 45.458105, longitude: -73.639784 }}>
                <Image style={styles.accessibilityIdentification} source={require(handicapIconPath)} />
            </Marker>

        </View>
    );
}

export const styles = StyleSheet.create({
    accessibilityIdentification: {
        width: 30,
        height: 30,
    }
})


export { AccessibilityIdentification };