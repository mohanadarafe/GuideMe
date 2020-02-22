import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../screens/Map'
import { Marker } from 'react-native-maps';

function BuildingIdentification () {
    return (
        <View>
            <Marker
                coordinate={{ latitude: 45.497222, longitude: -73.578809 }}
                title={'H building'}>
                <Text style={styles.buildingIdentification}>H</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.496537, longitude: -73.577755 }}
                title={'LB building'}>
                <Text style={styles.buildingIdentification}>LB</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.495804, longitude: -73.578764 }}
                title={'HM building'}>
                <Text style={styles.buildingIdentification}>HM</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.495431, longitude: -73.578133 }}
                title={'EV building'}>
                <Text style={styles.buildingIdentification}>EV</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.495306, longitude: -73.579011 }}
                title={'JMSB building'}>
                <Text style={styles.buildingIdentification}>JMSB</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.457825, longitude: -73.641458 }}
                title={'SP'}>
                <Text style={styles.buildingIdentification}>SP</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.457516, longitude: -73.640327 }}
                title={'CJ'}>
                <Text style={styles.buildingIdentification}>CJ</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.458094, longitude: -73.639768 }}
                title={'AP'}>
                <Text style={styles.buildingIdentification}>AP</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.458314, longitude: -73.640409 }}
                title={'CC'}>
                <Text style={styles.buildingIdentification}>CC</Text>
            </Marker>

            <Marker
                coordinate={{ latitude: 45.493450, longitude: -73.576814 }}
                title={'GN'}>
                <Text style={styles.buildingIdentification}>GN</Text>
            </Marker>
        </View>
    );
}

export { BuildingIdentification };