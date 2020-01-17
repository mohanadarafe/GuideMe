import React from 'react';
import { StyleSheet, Image } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polygon} from 'react-native-maps';
import { Buildings } from './components/Buildings';

export default function App() {
  return (
    <MapView 
      style= {styles.map} 
      provider={PROVIDER_GOOGLE}
      region = {{
        latitude: 45.497247, 
        longitude: -73.578958,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}
    >
    <Buildings/>
  </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '100%'
  }
});
