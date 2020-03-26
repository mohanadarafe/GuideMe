import React from "react";
import { View, AsyncStorage } from "react-native";
import { Polygon } from "react-native-maps";
import coord from "../constants/buildingCoordinates";

/**
 * US3 - As a user, I would like to be able to identify campus buildings and
 * distinguish them from other buildings.
 * The following function colors the campus buildings.
 */

function BuildingHighlight() {
    const [buildingName, setBuildingName] = React.useState("");
    AsyncStorage.setItem("buildingSelected", buildingName);

    return (
        <View>
            <Polygon
                id="tap_h"
                coordinates={coord.h.coordinates}
                tappable={true}
                onPress={() => { setBuildingName("Hall Building"); }}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_lb"
                coordinates={coord.lb.coordinates}
                tappable={true}
                onPress={() => setBuildingName("LB Building")}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_gm"
                coordinates={coord.gm.coordinates}
                tappable={true}
                onPress={() => setBuildingName("GM Building")}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_ev"
                coordinates={coord.ev.coordinates}
                tappable={true}
                onPress={() => setBuildingName("EV Building")}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_mb"
                coordinates={coord.mb.coordinates}
                tappable={true}
                onPress={() => setBuildingName("JMSB")}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_sp"
                coordinates={coord.sp.coordinates}
                tappable={true}
                onPress={() => setBuildingName("SP Building")}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_cj"
                coordinates={coord.cj.coordinates}
                tappable={true}
                onPress={() => setBuildingName("CJ Building")}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_cc"
                coordinates={coord.cc.coordinates}
                tappable={true}
                onPress={() => setBuildingName("CC Building")}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_ad"
                coordinates={coord.ad.coordinates}
                tappable={true}
                onPress={() => setBuildingName("AD Building")}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_gn"
                coordinates={coord.gn.coordinates}
                tappable={true}
                onPress={() => setBuildingName("Grey Nuns")}
                fillColor="rgba(76, 79, 98, 0.7)"
            />
        </View>
    );
}

export { BuildingHighlight };