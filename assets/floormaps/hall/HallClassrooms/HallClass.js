import React from "react"
import Svg, { Rect } from "react-native-svg"

export function HallClass(props) {
    return(
        <Svg width={1024} height={1024}>
            <Rect
                width={94}
                height={47}
                x={10}
                y={736}
                opacity={0}
                onPress={() => console.log("H" + props.floor + "51")}
            />
            <Rect
                width={94}
                height={47}
                x={214}
                y={427}
                opacity={0}
                onPress={() => console.log("H" + props.floor + "60")}
            />
            <Rect
                width={94}
                height={47}
                x={596}
                y={546}
                opacity={0}
                onPress={() => console.log("H" + props.floor + "32")}
            />
            <Rect
                width={50}
                height={42}
                x={462}
                y={258}
                opacity={0}
                onPress={() => console.log("H" + props.floor + "06")}
            />
            <Rect
                width={62}
                height={42}
                x={358}
                y={149}
                opacity={0}
                onPress={() => console.log("H" + props.floor + "05")}
            />
        </Svg>
    );
}