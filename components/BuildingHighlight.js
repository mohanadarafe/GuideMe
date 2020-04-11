import React from "react";
import { View } from "react-native";
import { Polygon } from "react-native-maps";
import coord from "../constants/buildingCoordinates";
import { buildingData } from "../constants/buildingData";
import { connect } from "react-redux";


function mapStateToProps(buildingName) {
    return {
        selectedBuildingName: buildingName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedBuildingName: (value) => dispatch({ type: "UPDATE_SELECTED_BUILDING", payload: value }),
    }
}

/**
 * US3 - As a user, I would like to be able to identify campus buildings and
 * distinguish them from other buildings.
 * The following function colors the campus buildings.
 */

export function BuildingHighlight (props) {
    const [buildingName, setBuildingName] = React.useState("");
    var buildings = buildingData();

    return (
        <View>
            <Polygon
                id="tap_h"
                coordinates={coord.h.coordinates}
                tappable={true}
                onPress={() => { 
                    setBuildingName(buildings["Hall Building"].name); 
                    props.setSelectedBuildingName(buildings["Hall Building"].name);
            }}
                fillColor={buildingName == buildings["Hall Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_lb"
                coordinates={coord.lb.coordinates}
                tappable={true}
                onPress={() => {
                    setBuildingName(buildings["LB Building"].name);
                    props.setSelectedBuildingName(buildings["LB Building"].name);
                } }
                fillColor={buildingName == buildings["LB Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_gm"
                coordinates={coord.gm.coordinates}
                tappable={true}
                onPress={() => {
                    setBuildingName(buildings["GM Building"].name)
                    props.setSelectedBuildingName(buildings["GM Building"].name);
                }}
                fillColor={buildingName == buildings["GM Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_ev"
                coordinates={coord.ev.coordinates}
                tappable={true}
                onPress={() => {
                    setBuildingName(buildings["EV Building"].name)
                    props.setSelectedBuildingName(buildings["EV Building"].name);
                }}
                fillColor={buildingName == buildings["EV Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_mb"
                coordinates={coord.mb.coordinates}
                tappable={true}
                onPress={() => { 
                    setBuildingName(buildings["MB Building"].name);
                    props.setSelectedBuildingName(buildings["MB Building"].name);
                }}
                fillColor={buildingName == buildings["MB Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_sp"
                coordinates={coord.sp.coordinates}
                tappable={true}
                onPress={() => { 
                    setBuildingName(buildings["SP Building"].name);
                    props.setSelectedBuildingName(buildings["SP Building"].name);
                }}
                fillColor={buildingName == buildings["SP Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_cj"
                coordinates={coord.cj.coordinates}
                tappable={true}
                onPress={() => { 
                    setBuildingName(buildings["CJ Building"].name)
                    props.setSelectedBuildingName(buildings["CJ Building"].name);
            }}
            fillColor={buildingName == buildings["CJ Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_cc"
                coordinates={coord.cc.coordinates}
                tappable={true}
                onPress={() => { 
                    setBuildingName(buildings["CC Building"].name);
                    props.setSelectedBuildingName(buildings["CC Building"].name);
            }}
            fillColor={buildingName == buildings["CC Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_ad"
                coordinates={coord.ad.coordinates}
                tappable={true}
                onPress={() => {
                    setBuildingName(buildings["AD Building"].name);
                    props.setSelectedBuildingName(buildings["AD Building"].name);
                }}
                fillColor={buildingName == buildings["AD Building"].name ? "#3ACCE1": "#a282e0"}
                />

            <Polygon
                id="tap_gn"
                coordinates={coord.gn.coordinates}
                tappable={true}
                onPress={() => { 
                    setBuildingName(buildings["Grey Nuns"].name)
                    props.setSelectedBuildingName(buildings["Grey Nuns"].name);
                }}
                fillColor={buildingName == buildings["Grey Nuns"].name ? "#3ACCE1": "#a282e0"}
            />
            <Polygon
                id="tap_vl"
                coordinates={coord.vl.coordinates}
                tappable={true}
                onPress={() => { 
                    setBuildingName(buildings["VL Building"].name)
                    props.setSelectedBuildingName(buildings["VL Building"].name);
            }}
            fillColor={buildingName == buildings["VL Building"].name ? "#3ACCE1": "#a282e0"}
            />
        </View>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildingHighlight);
