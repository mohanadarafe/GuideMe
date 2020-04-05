import React, { useEffect } from "react";
import { StyleSheet, AsyncStorage, View } from "react-native";
import SwitchSelector from "react-native-switch-selector";

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

export function FloorMenu() {
  const [floorNumber, setFloorNumber] = React.useState("1");
  const [selectedBuilding, setSelectedBuilding] = React.useState("");
  AsyncStorage.setItem("floorSelected", floorNumber);

  const getSelectedBuilding = async () => {
    let name = await AsyncStorage.getItem("buildingSelected");
    setSelectedBuilding(name);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getSelectedBuilding();
    }, 100);
    return () => clearInterval(intervalId);
  });

  return (
    <View testID="floorBarMenu">
      {selectedBuilding === "Hall Building" && (
        <SwitchSelector
          style={styles.selector}
          options={hallFloors}
          initial={0}
          buttonColor={"#3ACCE1"}
          onPress={value => {
            setFloorNumber(value);
          }}
        />
      )}
      {selectedBuilding === "JMSB" && (
        <SwitchSelector
          style={styles.selector}
          options={jmsbFloors}
          initial={0}
          buttonColor={"#3ACCE1"}
          onPress={value => {
            setFloorNumber(value);
          }}
        />
      )}
      {selectedBuilding === "VL Building" && (
        <SwitchSelector
          style={styles.selector}
          options={vlFloors}
          initial={0}
          buttonColor={"#3ACCE1"}
          onPress={value => {
            setFloorNumber(value);
          }}
        />
      )}
      {selectedBuilding !== "JMSB" && selectedBuilding !== "Hall Building" && (
        <SwitchSelector
          id="floor_select_none"
          style={styles.selector}
          options={hallFloors}
          initial={0}
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
