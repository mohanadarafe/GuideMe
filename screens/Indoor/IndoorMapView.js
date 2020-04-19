import React, { useEffect } from "react";
import { View, ScrollView, AsyncStorage, StyleSheet } from "react-native";
import { BottomMenu } from "../../components/BottomMenu";
import { JMSBFloor1 } from "../../assets/floormaps/mb/JMSBFloor1";
import { HallFloor9 } from "../../assets/floormaps/hall/HallFloor9";
import { JMSBFloor2 } from "../../assets/floormaps/mb/JMSBFloor2";
import { HallFloorX } from "../../assets/floormaps/hall/HallFloorX";
import { JMSBFloorX } from "../../assets/floormaps/mb/JMSBFloorX";
import VLFloor1 from "../../assets/floormaps/vl/VLFloor1";

/**
 * Screen that returns the indoor map
 * @param {*} props 
 */
function IndoorMapView (props) {

    const [selectedFloor, setSelectedFloor] = React.useState("");
    const [mobility, setMobility] = React.useState("");

    const getMobility = async () => {
        let name = await AsyncStorage.getItem("secondCategory");
        setMobility(name);
    };

    const getFloorSelected = async () => {
        let name = await AsyncStorage.getItem("floorSelected");
        setSelectedFloor(name);
    };

    const selectedBuilding = props.navigation.getParam("selectedBuilding", "Hall Building");
    const from = props.navigation.getParam("From", null);
    const to = props.navigation.getParam("To", null);
    const isFirst = props.navigation.getParam("isFirst", null);
    const isLast = props.navigation.getParam("isLast", null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            getMobility();
            getFloorSelected();
        }, 1);
        return () => clearInterval(intervalId);
    });

    return (
        <View testID="indoorMapFloorScrollView">
            <ScrollView>
                <ScrollView maximumZoomScale={2} horizontal={true} minimumZoomScale={0.25} >
                    {((selectedBuilding === "VL Building") || (from != null && from.includes("VL") && isFirst != null) || (to != null && to.includes("VL") && isLast != null)) &&
                        <VLFloor1 from={from} to={to} />
                    }
                    {((selectedBuilding === "Hall Building" && selectedFloor !== "9") || (((from != null && from.includes("H") && isFirst != null) || (to != null && to.includes("H") && isLast != null)) && selectedFloor !== "9")) &&
                        <HallFloorX from={from ? from : null} to={to ? to : null} mobility={mobility} />
                    }
                    {((selectedBuilding === "Hall Building" && selectedFloor == "9") || (((from != null && from.includes("H") && isFirst != null) || (to != null && to.includes("H") && isLast != null)) && selectedFloor == "9")) &&
                        <HallFloor9 from={from ? from : null} to={to ? to : null} mobility={mobility} />
                    }
                    {selectedBuilding === "MB Building" && selectedFloor === "1" &&
                        <JMSBFloor1 />
                    }
                    {selectedBuilding === "MB Building" && selectedFloor === "2" &&
                        <JMSBFloor2 />
                    }
                    {selectedBuilding === "MB Building" && selectedFloor !== "1" && selectedFloor !== "2" &&
                        <JMSBFloorX />
                    }
                    {selectedBuilding !== "MB Building" && selectedBuilding !== "Hall Building" && selectedBuilding !== "VL Building" &&
                        <HallFloorX />
                    }
                </ScrollView>
            </ScrollView>
            <BottomMenu navigation={props.navigation} indoor={true} inDirections={from != null && to != null} from={from} to={to} building={selectedBuilding} />
        </View>
    );
}



export const styles = StyleSheet.create({
    insideBuildingContainer: {
        width: "100%",
        height: 425,
        position: "absolute",
        borderRadius: 30.5,
        backgroundColor: "#2A2E43",
        bottom: -275
    },
    arrowUp: {
        color: "#ffffff",
        left: "5%",
        top: "7%",
    },
    mainLabel: {
        position: "absolute",
        top: "5%",
        left: "12.5%",
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "encodeSansExpanded",
        height: "9%",
        width: "45%"
    },
    shortLabel: {
        position: "absolute",
        top: "12%",
        left: "12.5%",
        color: "#80828D",
        fontSize: 16,
        fontFamily: "encodeSansExpanded"
    },
    btnleave: {
        position: "absolute",
        left: "62%",
        top: "5.5%",
        color: "#FFFFFF",
    },
    btnText: {
        color: "#FFFFFF",
        fontFamily: "encodeSansExpanded"
    },
    changeFloor: {
        top: "12.5%",
        left: "15%",
    }
});

export default IndoorMapView;
