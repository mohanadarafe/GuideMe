/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, SectionList } from "react-native";
import { Icon, Button } from "native-base";
import { MapData } from "../components/MapData";

/**
 * 
 * @param {*} buildingName Name of building to get data of
 */
export function fetchData(buildingName) {
  const buildingInfo = MapData({ buildingToSearch: buildingName, context: "More Details" });
  return buildingInfo;
}

/**
 * The following screen renders information on a selected building.
 * 
 * US7 - As a user, I would like to know the departments provided inside a building.
 * US8 - As a user, I would like to know the services provided inside a building.
 * US9 - As a user, I would like to know the accessibility of a building.
 * 
 * Props passed
 * @param {*} name props.name is the name of the building selected
 */
function MoreDetails(props) {
  const [data, setData] = React.useState(null);

  const goBack = () => {
    props.navigation.goBack();
  };
  const name = props.navigation.getParam("name", "null");
  const goToDoubleSearchBar = () => {
    props.navigation.navigate("DoubleSearch", { destinationName: name });
  };

  useEffect(() => {
    setData(fetchData(name));
  }, []);

  return (
    <View testID="MoreDetails_MoreDetailsScreenView" style={styles.container} data-test="MoreDetailsComponent">
      <SafeAreaView style={styles.buttonContainer}>
        <Button transparent style={styles.mapButton}>
          <View style={styles.iconContainer}>
            <Icon type="Feather" name="map-pin" style={styles.mapPin}></Icon>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.mapPinLabel}>{data ? data.address : "N/A"}</Text>
          </View>
        </Button>
        <Button transparent style={styles.phoneButton}>
          <View style={styles.iconContainer}>
            <Icon type="Feather" name="phone" style={styles.phone}></Icon>
          </View>
          <SafeAreaView style={styles.separator}></SafeAreaView>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.mapPinLabel}>{(data && data.phone) ? data.phone : "N/A"}</Text>
          </View>
        </Button>
        <Button testID="MoreDetails_getDirectionsButton" style={styles.directionButton} onPress={goToDoubleSearchBar}><Text style={{ color: "white" }}>Get Directions</Text></Button>
      </SafeAreaView>
      <View style={styles.imageContainer}>
        <Image style={styles.buildingImage} source={require("./../assets/Hall_Building.png")} />
      </View>
      <Text style={styles.mainLabel}>{name ? name : "N/A"}</Text>
      <Text style={styles.subLabel}>{data ? data.fullName : "N/A"}</Text>
      <Text style={styles.reviewLabel}>19 Reviews</Text>
      <SafeAreaView testID="MoreDetails_moreInfoScrollView" style={styles.scrollTextContainer}>
        <SectionList
          sections={[
            { title: "Departments ", data: (data && data.departments.length > 0) ? data.departments : ["None"] },
            { title: "Services", data: (data && data.services.length > 0) ? data.services : ["None"] },
            { title: "Accessibility", data: (data && data.accessibilityItems.length > 0) ? data.accessibilityItems : ["None"] },
          ]}
          renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
          renderSectionHeader={({ section }) => <Text testID="MoreDetails_SectionListHeader" style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => <View style={styles.line} />}
        />
      </SafeAreaView>
      <Icon testID="MoreDetails_bottomArrowIcon" name="ios-arrow-down" style={styles.arrowDown} onPress={goBack} />
    </View>
  );
}
export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    backgroundColor: "#2A2E43",

  },
  mainLabel: {
    color: "#FFFFFF",
    left: "5%",
    position: "absolute",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "encodeSansExpanded",
    top: "19%"
  },
  subLabel: {
    position: "absolute",
    top: "24%",
    left: "5%",
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
    fontFamily: "encodeSansExpanded"
  },
  reviewLabel: {
    position: "absolute",
    top: "27%",
    left: "5%",
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "encodeSansExpanded"
  },
  scrollTextContainer: {
    width: "100%",
    height: "32%",
    top: "32%",
    position: "absolute",
  },
  directionButton: {
    width: "90%",
    height: "8%",
    fontSize: 25,
    bottom: "8%",
    justifyContent: "center",
    backgroundColor: "#3ACCE1",
    borderRadius: 10,
  },
  imageContainer: {
    width: "100%",
    height: "32%",
    top: "0%",
    position: "absolute",
    opacity: 0.3
  },
  buildingImage: {
    width: "100%",
    height: "100%",
    top: "0%",
    position: "relative"
  },
  mapButton: {
    bottom: "19%",
    height: "8%",
    width: "100%"
  },
  mapPin: {
    color: "#FFFFFF",
    position: "absolute",
  },
  mapPinLabel: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "encodeSansExpanded",
    position: "absolute",
  },
  phoneButton: {
    bottom: "17%",
    height: "8%",
    width: "100%",
  },
  phone: {
    position: "absolute",
    color: "#FFFFFF",
    alignSelf: "center"
  },
  phoneLabel: {
    position: "absolute",
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "encodeSansExpanded"
  },
  iconContainer: {
    height: "100%",
    width: "16%",
    backgroundColor: "#353A50",
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonTextContainer: {
    height: "100%",
    width: "80%",
    justifyContent: "center",
    alignSelf: "flex-end"
  },
  separator: {
    height: "100%",
    width: "4%",
    justifyContent: "center",
  },
  departmentTitle: {
    position: "absolute",
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "encodeSansExpanded"
  },
  departmentText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "encodeSansExpanded",
  },
  servicesTitle: {
    position: "absolute",
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "encodeSansExpanded"
  },
  servicesText: {
    position: "absolute",
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "encodeSansExpanded"
  },
  accessibilitiesTitle: {
    position: "absolute",
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "encodeSansExpanded"
  },
  accessibilitiesText: {
    position: "absolute",
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "encodeSansExpanded"
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 22,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#353A50",
    fontFamily: "encodeSansExpanded"
  },
  listItem: {
    padding: 10,
    fontSize: 12,
    height: 44,
    paddingLeft: 22,
    fontFamily: "encodeSansExpanded",
    color: "#D3D3D3",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
    width: "90%",
    alignItems: "center",
  },
  PreferenceMenu: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#2A2E43",
    alignItems: "center",
    justifyContent: "space-between"
  },
  arrowDown: {
    color: "#ffffff",
    top: "5%",
    fontSize: 54,
    position: "absolute"
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#353A50",
  },
});
export default MoreDetails;