import React from 'react';
import { CurrentBuilding } from "./CurrentBuilding";
import { View } from "react-native";

// Bottom menu will be here, we will have the current building, current floor, selected
// building, toggle switch & button all in here. For now, you can console log the currentBuilding
// variable to test. 

// Don't forget to add <BottomMenu/> inside Map.js to test!
function BottomMenu () {
    var currentBuilding = CurrentBuilding();

    return (
        <View>

        </View>
    )
}

export { BottomMenu };