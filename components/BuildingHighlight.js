import React from "react";
import { View, AsyncStorage } from "react-native";
import { Polygon } from "react-native-maps";
import coord from "../constants/buildingCoordinates";
import { buildingData } from "../constants/buildingData";

/**
 * US3 - As a user, I would like to be able to identify campus buildings and
 * distinguish them from other buildings.
 * The following function colors the campus buildings.
 */

function BuildingHighlight () {
    const [buildingName, setBuildingName] = React.useState("");
    AsyncStorage.setItem("buildingSelected", buildingName);
    var buildings = buildingData();
    return (
        <View>
            <Polygon
                id="tap_h"
                coordinates={coord.h.coordinates}
                tappable={true}
                onPress={() => { setBuildingName(buildings["Hall Building"].name); }}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_lb"
                coordinates={coord.lb.coordinates}
                tappable={true}
                onPress={() => setBuildingName(buildings["LB Building"].name)}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_gm"
                coordinates={coord.gm.coordinates}
                tappable={true}
                onPress={() => setBuildingName(buildings["GM Building"].name)}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_ev"
                coordinates={coord.ev.coordinates}
                tappable={true}
                onPress={() => setBuildingName(buildings["EV Building"].name)}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_mb"
                coordinates={coord.mb.coordinates}
                tappable={true}
                onPress={() => setBuildingName(buildings["JMSB"].name)}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_sp"
                coordinates={coord.sp.coordinates}
                tappable={true}
                onPress={() => setBuildingName(buildings["SP Building"].name)}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_cj"
                coordinates={coord.cj.coordinates}
                tappable={true}
                onPress={() => setBuildingName(buildings["CJ Building"].name)}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_cc"
                coordinates={coord.cc.coordinates}
                tappable={true}
                onPress={() => setBuildingName(buildings["CC Building"].name)}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_ad"
                coordinates={coord.ad.coordinates}
                tappable={true}
                onPress={() => setBuildingName(buildings["AD Building"].name)}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_gn"
                coordinates={coord.gn.coordinates}
                tappable={true}
                onPress={() => setBuildingName(buildings["Grey Nuns"].name)}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                id="tap_vl"
                coordinates={coord.vl.coordinates}
                tappable={true}
                onPress={() => setBuildingName(buildings["VL Building"].name)}
                fillColor="rgba(76, 79, 98, 0.7)"
            />
        </View>
    );
}

export { BuildingHighlight };