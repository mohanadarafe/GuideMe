import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { Polygon } from 'react-native-maps';
import coord from '../constants/buildingCoordinates';


function BuildingHighlight(){
    const [buildingName, setBuildingName] = React.useState("");
    AsyncStorage.setItem("buildingSelected", buildingName);
    
    return (
        <View>
            <Polygon
                coordinates={coord.h.coordinates}
                tappable={true}
                onPress={() => setBuildingName("Hall Building")}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={coord.lb.coordinates}
                tappable={true}
                onPress={() => setBuildingName("LB Building")}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={coord.gm.coordinates}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={coord.ev.coordinates}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={coord.mb.coordinates}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={coord.sp.coordinates}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={coord.cj.coordinates}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={coord.cc.coordinates}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={coord.ad.coordinates}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={coord.gn.coordinates}
                fillColor="rgba(76, 79, 98, 0.7)"
            />
        </View>
    )
}

export { BuildingHighlight };
