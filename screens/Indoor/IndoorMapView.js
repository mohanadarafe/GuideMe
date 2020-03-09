import React, { useEffect } from "react";
import { View, ScrollView, AsyncStorage } from "react-native";
import { HallFloor8 } from "../../assets/floormaps/hall/HallFloor8";
import { JMSBFloor1 } from "../../assets/floormaps/mb/JMSBFloor1";
import { HallFloor9 } from "../../assets/floormaps/hall/HallFloor9";
import { JMSBFloor2 } from "../../assets/floormaps/mb/JMSBFloor2";
import { HallFloorX } from "../../assets/floormaps/hall/HallFloorX";
import { JMSBFloorX } from "../../assets/floormaps/mb/JMSBFloorX";

function IndoorMapView() {
    const [selectedBuilding, setSelectedBuilding] = React.useState("");
    const [selectedFloor, setSelectedFloor] = React.useState("");

    const buildingSelected = async () => {
        let name = await AsyncStorage.getItem("buildingSelected");
        setSelectedBuilding(name);
    };

    const floorSelected = async () => {
        let name = await AsyncStorage.getItem("floorSelected");
        setSelectedFloor(name);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            buildingSelected();
            floorSelected();
        }, 100);
        return () => clearInterval(intervalId);
    })

    return (
        <View>
            <ScrollView>
                <ScrollView maximumZoomScale={2} horizontal={true} minimumZoomScale={0.25} >              
                    {selectedBuilding === "Hall Building" && selectedFloor === "8" &&
                        <HallFloor8 />
                    }
                    {selectedBuilding === "Hall Building" && selectedFloor === "9" &&
                        <HallFloor9 />
                    }
                    {selectedBuilding === "Hall Building" && selectedFloor !== "8" && selectedFloor !== "9" &&
                        <HallFloorX />
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
                </ScrollView>
            </ScrollView>
        </View>
    )  
}

export default IndoorMapView
