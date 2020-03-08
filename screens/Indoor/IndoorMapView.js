import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { HallFloorPlan } from "../../assets/floormaps/hall/HallFloorPlan";
import { AsyncStorage } from "react-native";
import { BottomMenu } from "../../components/BottomMenu";

function IndoorMapView() {
    return (
        <View>
            <ScrollView>
                <ScrollView maximumZoomScale={2} horizontal={true} minimumZoomScale={0.75} >                
                    <HallFloorPlan />
                </ScrollView>
            </ScrollView>
        </View>
        
    )  
}

export default IndoorMapView
