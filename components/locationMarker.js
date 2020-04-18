
import React, {useLayoutEffect, useEffect, useState} from "react";
import { View } from "native-base";
import { Marker } from "react-native-maps";
import { store } from "../redux/reducers/";



export function LocationMarker (props) {

    const [searchItemMarker, setSearchItemMarker] = useState(null);

    useLayoutEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setSearchItemMarker(store.getState().searchItemMarker);
        });
        return function cleanUp() {
            unsubscribe();
        }
    });

    useEffect(() => {
        if (searchItemMarker) {
            props.mapReference.current.animateToRegion({
            latitude: searchItemMarker.latitude,
            longitude: searchItemMarker.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          })
        }
    }, [searchItemMarker])

    
    return (
        <View>
            <Marker
                coordinate = {searchItemMarker ? searchItemMarker : {latitude: 0, longitude: 0}}
            />
        </View>
    )
}

