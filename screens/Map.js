import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Buildings } from '../components/Buildings';
import { ToggleCampus } from '../components/ToggleCampus';

const mapPosition = {
    sgwCoord: {
        latitude: 45.496557,
        longitude: -73.578896,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    },
    loyCoord: {
        latitude: 45.457841, 
        longitude: -73.640307,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }
}

export default class Map extends React.Component{
    state = {switchValue:false}
    toggleSwitch = (val) => {
        this.setState({
            switchValue: val
        })
    }

    render(){
        return (
            <MapView 
                style= {styles.map} 
                provider={PROVIDER_GOOGLE}
                region={this.state.switchValue ? mapPosition.sgwCoord : mapPosition.loyCoord}
            >
                <ToggleCampus val={this.state.switchValue} onChange={this.toggleSwitch}/>   
                <Buildings/>
            </MapView>
        );
    }
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