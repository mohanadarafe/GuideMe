import React, { useEffect } from "react";
import { View, ScrollView, AsyncStorage } from "react-native";
import { JMSBFloor1 } from "../../assets/floormaps/mb/JMSBFloor1";
import { HallFloor9 } from "../../assets/floormaps/hall/HallFloor9";
import { JMSBFloor2 } from "../../assets/floormaps/mb/JMSBFloor2";
import { HallFloorX } from "../../assets/floormaps/hall/HallFloorX";
import { JMSBFloorX } from "../../assets/floormaps/mb/JMSBFloorX";

function IndoorMapView() {
    const [selectedBuilding, setSelectedBuilding] = React.useState("");
    const [selectedFloor, setSelectedFloor] = React.useState("");

    const getBuildingSelected = async () => {
        let name = await AsyncStorage.getItem("buildingSelected");
        setSelectedBuilding(name);
    };

    const getFloorSelected = async () => {
        let name = await AsyncStorage.getItem("floorSelected");
        setSelectedFloor(name);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            getBuildingSelected();
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
        </View>
    );  
}

export default IndoorMapView;
