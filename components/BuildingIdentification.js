import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

/**
 * US3 - As a user, I would like to be able to identify campus buildings and
 * distinguish them from other buildings.
 * The following function is a follow up on BuildingHighlight.js, this function
 * renders the identifier of a building inside a polygon.
 */
function BuildingIdentification () {
    return (
        <View>
            <Marker
                coordinate={{ latitude: 45.497222, longitude: -73.578809 }}>
                <Text style={styles.buildingIdentification}>H</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.496537, longitude: -73.577755 }}>
                <Text style={styles.buildingIdentification}>LB</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.495804, longitude: -73.578764 }}>
                <Text style={styles.buildingIdentification}>GM</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.495431, longitude: -73.578133 }}>
                <Text style={styles.buildingIdentification}>EV</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.495306, longitude: -73.579011 }}>
                <Text style={styles.buildingIdentification}>MB</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.457825, longitude: -73.641458 }}>
                <Text style={styles.buildingIdentification}>SP</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.457516, longitude: -73.640327 }}>
                <Text style={styles.buildingIdentification}>CJ</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.458094, longitude: -73.639768 }}>
                <Text style={styles.buildingIdentification}>AD</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.458314, longitude: -73.640409 }}>
                <Text style={styles.buildingIdentification}>CC</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.493450, longitude: -73.576814 }}>
                <Text style={styles.buildingIdentification}>GN</Text>
            </Marker>
        </View>
    );
}

export const styles = StyleSheet.create({
    buildingIdentification: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textShadowColor: '#000000',
        textShadowOffset: { width: 1, height: 4 },
        textShadowRadius: 5
    }
})

export { BuildingIdentification };