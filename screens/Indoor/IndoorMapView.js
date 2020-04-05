import React, { useEffect } from "react";
import { View, ScrollView, AsyncStorage, StyleSheet, Text } from "react-native";
import { Icon } from "native-base";
import { Button } from "react-native-paper";
import { JMSBFloor1 } from "../../assets/floormaps/mb/JMSBFloor1";
import { HallFloor9 } from "../../assets/floormaps/hall/HallFloor9";
import { JMSBFloor2 } from "../../assets/floormaps/mb/JMSBFloor2";
import { HallFloorX } from "../../assets/floormaps/hall/HallFloorX";
import { JMSBFloorX } from "../../assets/floormaps/mb/JMSBFloorX";
import { FloorMenu } from "../../components/FloorMenu";
import VLFloor1 from "../../assets/floormaps/vl/VLFloor1";

function IndoorMapView(props) {

    const [selectedFloor, setSelectedFloor] = React.useState("");

    const getFloorSelected = async () => {
        let name = await AsyncStorage.getItem("floorSelected");
        setSelectedFloor(name);
    };

    const goBack = () => {
        props.navigation.goBack();
    };

    const goToMoreDetails = () => {
        props.navigation.navigate("MoreDetails", {
            name: selectedBuilding,
            navigation: props.navigation,
        });
    };

    const selectedBuilding = props.navigation.getParam("selectedBuilding", "Hall Building");
    const from = props.navigation.getParam("From", null);
    const to = props.navigation.getParam("To", null);
    const isFirst = props.navigation.getParam("isFirst", null);
    const isLast = props.navigation.getParam("isLast", null);

    useEffect(() => {
        const intervalId = setInterval(() => {
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
                        <HallFloorX from={from ? from : null} to={to ? to : null} />
                    }
                    {((selectedBuilding === "Hall Building" && selectedFloor == "9") || (((from != null && from.includes("H") && isFirst != null) || (to != null && to.includes("H") && isLast != null)) && selectedFloor == "9")) &&
                        <HallFloor9 from={from ? from : null} to={to ? to : null} />
                    }
                    {selectedBuilding === "JMSB" && selectedFloor === "1" &&
                        <JMSBFloor1 />
                    }
                    {selectedBuilding === "JMSB" && selectedFloor === "2" &&
                        <JMSBFloor2 />
                    }
                    {selectedBuilding === "JMSB" && selectedFloor !== "1" && selectedFloor !== "2" &&
                        <JMSBFloorX />
                    }
                    {selectedBuilding !== "JMSB" && selectedBuilding !== "Hall Building" && selectedBuilding !== "VL Building" &&
                        <HallFloorX />
                    }
                </ScrollView>
            </ScrollView>

            <View style={styles.insideBuildingContainer}>
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={goToMoreDetails} />
                {from == null && to == null &&
                    <Text style={styles.mainLabel}>{selectedBuilding}</Text>
                }
                {from != null && to != null &&
                    <Text style={styles.mainLabel}>{((from.includes("VL") && isFirst != null) || (to.includes("VL") && isLast != null)) ? "VL Building" : "Hall Building" }</Text>
                }
                <Text style={styles.shortLabel}>More info</Text>
                <Button testID="indoorMapExitBuildingButton" style={styles.btnleave} color={"#3ACCE1"} uppercase={false} mode="contained" onPress={goBack}>
                    <Text style={styles.btnText}>Exit Building</Text>
                </Button>
                <View style={styles.changeFloor}>
                    <FloorMenu />
                </View>
            </View>
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
