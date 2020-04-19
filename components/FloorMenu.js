import React, { useEffect } from "react";
import { StyleSheet, AsyncStorage, View } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { whichPathToTake } from "./IndoorDirections/IndoorScenario";
import { getFloorNumber } from "./IndoorDirections/Dijkstra/DijkstraAlgorithm";

const hallFloors = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" }
];

const jmsbFloors = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "5", value: "4" },
  { label: "6", value: "5" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" }
];

const vlFloors = [
  { label: "1", value: "1" }
];

/**
 * The following function will determine where the initial
 * floor should be when navigating indoors & sets it intially.
 * 
 * Examples
 * H811 to H525 => initial floor 8
 * Grey Nuns to H525 => initial floor 1 (enter the building)
 * H920 to EV Building => initial floor 9 (leave the class)
 * @param {*} from | starting place
 * @param {*} to | ending place
 */
export const initialFloor = (from, to) => {
  const path = whichPathToTake(from, to);

  if (path == "SAME_FLOOR" || path == "DIFFERENT_FLOOR" || path == "INTEREST") {
    var floor = getFloorNumber(from);
    AsyncStorage.setItem("floorSelected", floor.toString());
    return floor;
  }
  if (path == "DIFFERENT_BUILDING") {
    if (from.includes(" ")) {
      AsyncStorage.setItem("floorSelected", "1");
      return 1;
    } else {
      var floor = getFloorNumber(from);
      AsyncStorage.setItem("floorSelected", floor.toString());
      return floor;
    }
  }
  if (path == "DIFFERENT_CAMPUS") {
    AsyncStorage.setItem("floorSelected", "1");
    return 1;
  }
};

export function FloorMenu (props) {
  const [floorNumber, setFloorNumber] = React.useState(props.from != null && props.to != null ? initialFloor(props.from, props.to) : 1);
  const [selectedBuilding, setSelectedBuilding] = React.useState("");
  AsyncStorage.setItem("floorSelected", floorNumber.toString());

  const getSelectedBuilding = async () => {
    let name = await AsyncStorage.getItem("buildingSelected");
    setSelectedBuilding(name);
  };

  useEffect(() => {
    getSelectedBuilding();
  });

  return (
    <View testID="floorBarMenu" >
      {selectedBuilding === "Hall Building" && (
        <SwitchSelector
          id = "floor_selected"
          style={styles.selector}
          options={hallFloors}
          initial={floorNumber - 1}
          buttonColor={"#3ACCE1"}
          onPress={value => {
            setFloorNumber(value);
          }}
        />
      )}
      {selectedBuilding === "MB Building" && (
        <SwitchSelector
        id = "floor_selected"
          style={styles.selector}
          options={jmsbFloors}
          initial={floorNumber - 1}
          buttonColor={"#3ACCE1"}
          onPress={value => {
            setFloorNumber(value);
          }}
        />
      )}
      {selectedBuilding === "VL Building" && (
        <SwitchSelector
        id = "floor_selected"
          style={styles.selector}
          options={vlFloors}
          initial={floorNumber - 1}
          buttonColor={"#3ACCE1"}
          onPress={value => {
            setFloorNumber(value);
          }}
        />
      )}
      {selectedBuilding !== "MB Building" && selectedBuilding !== "Hall Building" && (
        <SwitchSelector
          id="floor_select_none"
          style={styles.selector}
          options={hallFloors}
          initial={floorNumber - 1}
          buttonColor={"#3ACCE1"}
          onPress={value => {
            setFloorNumber(value);
          }}
        />
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  selector: {
    height: "100%",
    width: "75%"
  }
});
