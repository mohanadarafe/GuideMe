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
        setSelectedBuildingName: (value) => dispatch({ type: "UPDATE_SELECTED_BUILDING", payload: value }),
    }
}


/**
 * US3 - As a user, I would like to be able to identify campus buildings and
 * distinguish them from other buildings.
 * The following function colors the campus buildings.
 */

export function BuildingHighlight (props) {
    const [buildingHighlighted, setBuildingHighlighted] = React.useState("");
    var buildings = buildingData();

    useLayoutEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setBuildingHighlighted(store.getState().selectedBuildingName);
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
                onPress={() => { 
                    if (buildingHighlighted != buildings["Hall Building"].name) {
                        setBuildingHighlighted(buildings["Hall Building"].name);
                        props.setSelectedBuildingName(buildings["Hall Building"].name);
                    } else {
                        setBuildingHighlighted(null);
                        props.setSelectedBuildingName(null);
                    }
                }

            }
                fillColor={buildingHighlighted == buildings["Hall Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_lb"
                coordinates={coord.lb.coordinates}
                tappable={true}
                onPress={() => {
                    if (buildingHighlighted != buildings["LB Building"].name) {
                    setBuildingHighlighted(buildings["LB Building"].name);
                    props.setSelectedBuildingName(buildings["LB Building"].name);
                    } else {
                        setBuildingHighlighted(null);
                        props.setSelectedBuildingName(null);
                    }
                } }
                fillColor={buildingHighlighted == buildings["LB Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_gm"
                coordinates={coord.gm.coordinates}
                tappable={true}
                onPress={() => {
                    if (buildingHighlighted != buildings["GM Building"].name) {
                    setBuildingHighlighted(buildings["GM Building"].name)
                    props.setSelectedBuildingName(buildings["GM Building"].name);
                    } else {
                        setBuildingHighlighted(null);
                        props.setSelectedBuildingName(null);
                    }
                }}
                fillColor={buildingHighlighted == buildings["GM Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_ev"
                coordinates={coord.ev.coordinates}
                tappable={true}
                onPress={() => {
                    if (buildingHighlighted != buildings["EV Building"].name) {
                    setBuildingHighlighted(buildings["EV Building"].name)
                    props.setSelectedBuildingName(buildings["EV Building"].name);
                    } else {
                        setBuildingHighlighted(null);
                        props.setSelectedBuildingName(null);
                    }
                    }
                }
                fillColor={buildingHighlighted == buildings["EV Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_mb"
                coordinates={coord.mb.coordinates}
                tappable={true}
                onPress={() => { 
                    if (buildingHighlighted != buildings["MB Building"].name) {
                    setBuildingHighlighted(buildings["MB Building"].name);
                    props.setSelectedBuildingName(buildings["MB Building"].name);
                    } else {
                        setBuildingHighlighted(null);
                        props.setSelectedBuildingName(null);
                    }
                }}
                fillColor={buildingHighlighted == buildings["MB Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_sp"
                coordinates={coord.sp.coordinates}
                tappable={true}
                onPress={() => { 
                    if (buildingHighlighted != buildings["SP Building"].name) {
                    setBuildingHighlighted(buildings["SP Building"].name);
                    props.setSelectedBuildingName(buildings["SP Building"].name);
                    } else {
                        setBuildingHighlighted(null);
                        props.setSelectedBuildingName(null);
                    }
                }}
                fillColor={buildingHighlighted == buildings["SP Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_cj"
                coordinates={coord.cj.coordinates}
                tappable={true}
                onPress={() => { 
                    if (buildingHighlighted != buildings["CJ Building"].name) {
                    setBuildingHighlighted(buildings["CJ Building"].name)
                    props.setSelectedBuildingName(buildings["CJ Building"].name);
                    } else {
                        setBuildingHighlighted(null);
                        props.setSelectedBuildingName(null);
                    }
            }}
            fillColor={buildingHighlighted == buildings["CJ Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_cc"
                coordinates={coord.cc.coordinates}
                tappable={true}
                onPress={() => { 
                    if (buildingHighlighted != buildings["CC Building"].name) {
                    setBuildingHighlighted(buildings["CC Building"].name);
                    props.setSelectedBuildingName(buildings["CC Building"].name);
                    } else {
                        setBuildingHighlighted(null);
                        props.setSelectedBuildingName(null);
                    }
            }}
            fillColor={buildingHighlighted == buildings["CC Building"].name ? "#3ACCE1": "#a282e0"}
            />

            <Polygon
                id="tap_ad"
                coordinates={coord.ad.coordinates}
                tappable={true}
                onPress={() => {
                    if (buildingHighlighted != buildings["AD Building"].name) {
                    setBuildingHighlighted(buildings["AD Building"].name);
                    props.setSelectedBuildingName(buildings["AD Building"].name);
                    } else {
                        setBuildingHighlighted(null);
                        props.setSelectedBuildingName(null);
                    }
                }}
                fillColor={buildingHighlighted == buildings["AD Building"].name ? "#3ACCE1": "#a282e0"}
                />

            <Polygon
                id="tap_gn"
                coordinates={coord.gn.coordinates}
                tappable={true}
                onPress={() => { 
                    if (buildingHighlighted != buildings["Grey Nuns"].name) {
                    setBuildingHighlighted(buildings["Grey Nuns"].name)
                    props.setSelectedBuildingName(buildings["Grey Nuns"].name);
                    } else {
                        setBuildingHighlighted(null);
                        props.setSelectedBuildingName(null);
                    }
                }}
                fillColor={buildingHighlighted == buildings["Grey Nuns"].name ? "#3ACCE1": "#a282e0"}
            />
            <Polygon
                id="tap_vl"
                coordinates={coord.vl.coordinates}
                tappable={true}
                onPress={() => { 
                    if (buildingHighlighted != buildings["VL Building"].name) {
                    setBuildingHighlighted(buildings["VL Building"].name)
                    props.setSelectedBuildingName(buildings["VL Building"].name);
                    } else {
                        setBuildingHighlighted(null);
                        props.setSelectedBuildingName(null);
                    }
            }}
            fillColor={buildingHighlighted == buildings["VL Building"].name ? "#3ACCE1": "#a282e0"}
            />
        </View>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildingHighlight);
