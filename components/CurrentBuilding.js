import React from 'react';
import { View, Text } from 'react-native';
import coord from '../constants/buildingCoordinates';
import { isPointInPolygon } from 'geolib'

// US5 - As a user, I would like to know which building im currently in.
// Currently working on this, will be moved to sprint 2 (Mohanad)
class CurrentBuilding extends React.Component{

    state = {
        currentBuilding: '',
        lastLat: null,
        lastLong: null,
    }

    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            this.coordChange(position.coords.latitude, position.coords.longitude);
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    componentDidUpdate() {
        if (isPointInPolygon({latitude: this.state.lastLat, longitude: this.state.lastLong}, [coord.h.coordinates])){
            this.insideBuilding(coord.h.name);
        }
    }

    insideBuilding(name) {
        this.setState({
            currentBuilding: name
        })
    }

    coordChange(lastLat, lastLong) {
        if (lastLat && lastLong) {
            this.setState({
                lastLat: lastLat || this.state.lastLat,
                lastLong: lastLong || this.state.lastLong
            });
        }
    }

    render(){
        console.log("latitude: "+this.state.lastLat);
        console.log("longitude: "+this.state.lastLong);
        return(
            <Text>Latitude: {this.state.lastLat}</Text>
        )
    }
}

export { CurrentBuilding };