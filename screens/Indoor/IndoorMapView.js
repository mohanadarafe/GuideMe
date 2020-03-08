import React, { useEffect } from "react";
import { View, ScrollView, AsyncStorage } from "react-native";
import { HallFloor8 } from "../../assets/floormaps/hall/HallFloor8";
import { JMSB } from "../../assets/floormaps/mb/JMSB";
import { FloorMenu } from "../../components/FloorMenu";
import { HallFloor9 } from "../../assets/floormaps/hall/HallFloor9";

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
                <ScrollView maximumZoomScale={2} horizontal={true} minimumZoomScale={0.75} >              
                    {selectedBuilding === "Hall Building" && selectedFloor !== "9" &&
                        <HallFloor8 />
                    }
                    {selectedBuilding === "Hall Building" && selectedFloor === "9" &&
                        <HallFloor9 />
                    }
                    {selectedBuilding === "JMSB" && 
                        <JMSB />
                    }
                </ScrollView>
            </ScrollView>
        </View>
        
    )  
}

export default IndoorMapView
