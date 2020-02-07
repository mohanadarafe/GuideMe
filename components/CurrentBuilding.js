import React from 'react';
import { View, Text } from 'react-native';
import coord from '../constants/buildingCoordinates';
import { isPointInPolygon } from 'geolib'

// US5 - As a user, I would like to know which building im currently in.
// Currently working on this, will be moved to sprint 2 (Mohanad)
class CurrentBuilding extends React.Component{
    constructor(props) {
        super(props);
        this.state = { longitude: undefined, latitude: undefined } ;
    }

    componentWillMount() {
        let latitude = this.props.lat;
        let longitude = this.props.long;
        this.setState({ longitude: longitude, latitude: latitude })
    }

    render(){
        if (isPointInPolygon({}, coord.h.coordinates)){
            return(
                <Text>{coord.h.name}</Text>   
            )
        }
        return(
            <View></View>
        )
    }
}

export { CurrentBuilding };