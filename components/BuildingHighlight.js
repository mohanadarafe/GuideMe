import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import { Polygon } from "react-native-maps";
import coord from "../constants/buildingCoordinates";
import { buildingData } from "../constants/buildingData";
import { connect } from "react-redux";
import { store } from "../redux/reducers/index";


function mapStateToProps(state) {
    return {
        selectedBuildingName: state.selectedBuildingName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedBuildingName: (value, darkMode) => dispatch({ type: "UPDATE_SELECTED_BUILDING", payload: {selectedBuilding: value, darkMode: darkMode} }),
    }
}




/**
 * US3 - As a user, I would like to be able to identify campus buildings and
 * distinguish them from other buildings.
 * The following function colors the campus buildings.
 */

export function BuildingHighlight (props) {
    const [buildingHighlighted, setBuildingHighlighted] = React.useState("");
    const [isDarkedMode, setIsDarkMode] = React.useState(store.getState().isDarkMode);
    var buildings = buildingData();

    const onPressHighlight = (buildingName) => {
        if (buildingHighlighted != buildingName) {
            setBuildingHighlighted(buildingName);
            props.setSelectedBuildingName(buildingName, isDarkedMode);
        } else {
            setBuildingHighlighted(null);
            props.setSelectedBuildingName(null, isDarkedMode);
        }
    }

    useLayoutEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setBuildingHighlighted(store.getState().selectedBuildingName);
            setIsDarkMode(store.getState().isDarkMode)
        });
        return function cleanUp() {
            unsubscribe();
        }
    });

    return (
        <View>
            <Polygon
                id="tap_h"
                coordinates={coord.h.coordinates}
                tappable={true}
                onPress={() => onPressHighlight(buildings["Hall Building"].name)}
                fillColor={buildingHighlighted == buildings["Hall Building"].name ? "#3ACCE1": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeColor = {buildingHighlighted == buildings["Hall Building"].name ? "#0494a9": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeWidth = {buildingHighlighted == buildings["Hall Building"].name ? 4 : 0}
            />

            <Polygon
                id="tap_lb"
                coordinates={coord.lb.coordinates}
                tappable={true}
                onPress={() => onPressHighlight(buildings["LB Building"].name)}
                fillColor={buildingHighlighted == buildings["LB Building"].name ? "#3ACCE1": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeColor = {buildingHighlighted == buildings["LB Building"].name ? "#0494a9": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeWidth = {buildingHighlighted == buildings["LB Building"].name ? 4 : 0}
            />

            <Polygon
                id="tap_gm"
                coordinates={coord.gm.coordinates}
                tappable={true}
                onPress={() => onPressHighlight(buildings["GM Building"].name)}
                fillColor={buildingHighlighted == buildings["GM Building"].name ? "#3ACCE1": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeColor = {buildingHighlighted == buildings["GM Building"].name ? "#0494a9": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeWidth = {buildingHighlighted == buildings["GM Building"].name ? 4 : 0}
            />

            <Polygon
                id="tap_ev"
                coordinates={coord.ev.coordinates}
                tappable={true}
                onPress={() => onPressHighlight(buildings["EV Building"].name)}
                fillColor={buildingHighlighted == buildings["EV Building"].name ? "#3ACCE1": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeColor = {buildingHighlighted == buildings["EV Building"].name ? "#0494a9": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeWidth = {buildingHighlighted == buildings["EV Building"].name ? 4 : 0}
            />

            <Polygon
                id="tap_mb"
                coordinates={coord.mb.coordinates}
                tappable={true}
                onPress={() => onPressHighlight(buildings["MB Building"].name)}
                fillColor={buildingHighlighted == buildings["MB Building"].name ? "#3ACCE1": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeColor = {buildingHighlighted == buildings["MB Building"].name ? "#0494a9": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeWidth = {buildingHighlighted == buildings["MB Building"].name ? 4 : 0}
            />

            <Polygon
                id="tap_sp"
                coordinates={coord.sp.coordinates}
                tappable={true}
                onPress={() => onPressHighlight(buildings["SP Building"].name)}
                fillColor={buildingHighlighted == buildings["SP Building"].name ? "#3ACCE1": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeColor = {buildingHighlighted == buildings["SP Building"].name ? "#0494a9": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeWidth = {buildingHighlighted == buildings["SP Building"].name ? 4 : 0}
            />

            <Polygon
                id="tap_cj"
                coordinates={coord.cj.coordinates}
                tappable={true}
                onPress={() => onPressHighlight(buildings["CJ Building"].name)}
                fillColor={buildingHighlighted == buildings["CJ Building"].name ? "#3ACCE1": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeColor = {buildingHighlighted == buildings["CJ Building"].name ? "#0494a9": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeWidth = {buildingHighlighted == buildings["CJ Building"].name ? 4 : 0}
            />

            <Polygon
                id="tap_cc"
                coordinates={coord.cc.coordinates}
                tappable={true}
                onPress={() => onPressHighlight(buildings["CC Building"].name)}
                fillColor={buildingHighlighted == buildings["CC Building"].name ? "#3ACCE1": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeColor = {buildingHighlighted == buildings["CC Building"].name ? "#0494a9": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeWidth = {buildingHighlighted == buildings["CC Building"].name ? 4 : 0}
            />

            <Polygon
                id="tap_ad"
                coordinates={coord.ad.coordinates}
                tappable={true}
                onPress={() => onPressHighlight(buildings["AD Building"].name)}
                fillColor={buildingHighlighted == buildings["AD Building"].name ? "#3ACCE1": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeColor = {buildingHighlighted == buildings["AD Building"].name ? "#0494a9": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeWidth = {buildingHighlighted == buildings["AD Building"].name ? 4 : 0}
                />

            <Polygon
                id="tap_gn"
                coordinates={coord.gn.coordinates}
                tappable={true}
                onPress={() => onPressHighlight(buildings["Grey Nuns"].name)}
                fillColor={buildingHighlighted == buildings["Grey Nuns"].name ? "#3ACCE1": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeColor = {buildingHighlighted == buildings["Grey Nuns"].name ? "#0494a9": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeWidth = {buildingHighlighted == buildings["Grey Nuns"].name ? 4 : 0}
            />
            <Polygon
                id="tap_vl"
                coordinates={coord.vl.coordinates}
                tappable={true}
                onPress={() => onPressHighlight(buildings["VL Building"].name)}
                fillColor={buildingHighlighted == buildings["VL Building"].name ? "#3ACCE1": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeColor = {buildingHighlighted == buildings["VL Building"].name ? "#0494a9": (isDarkedMode? "#1b207a": "#b1b0f8")}
                strokeWidth = {buildingHighlighted == buildings["VL Building"].name ? 4 : 0}
            />
        </View>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildingHighlight);
