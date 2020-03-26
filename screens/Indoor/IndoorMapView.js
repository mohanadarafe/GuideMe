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

function IndoorMapView (props) {

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

    const selectedBuilding = props.navigation.getParam("selectedBuilding", "null");

    useEffect(() => {
        const intervalId = setInterval(() => {
            getFloorSelected();
        }, 1);
        return () => clearInterval(intervalId);
    });

    return (
        <View>
            <ScrollView>
                <ScrollView maximumZoomScale={2} horizontal={true} minimumZoomScale={0.25} >
                    {selectedBuilding === "Hall Building" && selectedFloor !== "9" &&
                        <HallFloorX />
                    }
                    {selectedBuilding === "Hall Building" && selectedFloor === "9" &&
                        <HallFloor9 />
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
                    {selectedBuilding !== "JMSB" && selectedBuilding !== "Hall Building" &&
                        <HallFloorX />
                    }
                </ScrollView>
            </ScrollView>

            <View style={styles.insideBuildingContainer}>
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={goToMoreDetails} />
                <Text style={styles.mainLabel}>{selectedBuilding}</Text>
                <Text style={styles.shortLabel}>More info</Text>
                <Button style={styles.btnleave} color={"#3ACCE1"} uppercase={false} mode="contained" onPress={goBack}>
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
