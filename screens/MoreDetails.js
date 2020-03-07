/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {  useEffect } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, SectionList } from "react-native";
import { Icon, Button } from "native-base";
import { sgwRooms } from "../constants/sgwRooms";
import { buildingData } from "../constants/buildingData";
import { MapData } from "../components/MapData";
import { AppLoading } from "expo";

const renderSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: "#353A50",
            }}
        />
    );
};

/**
 * 
 * @param {*} buildingName Name of building to get data of
 */
function fetchData (buildingName) {
    const modeDetailsInfo = MapData({ passBuildingName: buildingName, buildingName: false, classRooms: false, departments: true, services: true, accesibility: true, flatten: false }, sgwRooms(), buildingData());
    return modeDetailsInfo;
}

/**
 * The following function flattens a list of data incoming from fetchData
 * @param {*} data double array of data incoming
 * @param {*} departments array of deparments
 * @param {*} services array of services
 * @param {*} accesibility array of accesibility
 * @param {*} number phone number
 */
function createLists (data, departments, services, accesibility, number) {
    if (data) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                if (i === 0) {
                    if (data[i][j] === "None") {
                        departments.push("None");
                    } else {
                        departments.push(data[i][j].name);
                    }
                }
                if (i === 1) {
                    if (data[i][j] === "None") {
                        services.push("None");
                    } else {
                        services.push(data[i][j].name);
                    }
                }
                if (i === 2) {
                    if (data[i][j] === "None") {
                        accesibility.push("None");
                    } else {
                        accesibility.push(data[i][j].name);
                    }
                }
            }
        }
    }
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
function MoreDetails (props) {

    const [data, setData] = React.useState();

    const getBuildingInfo = buildingData();
    var departments = [];
    var services = [];
    var accesibility = [];
    var number;

    useEffect(() => {
        setData(fetchData(props.name));
    }, []);

    createLists(data, departments, services, accesibility, number);

    if (data) {
        return (
            <View style={styles.container} data-test="MoreDetailsComponent">

                <SafeAreaView style={styles.buttonContainer}>
                    <Button transparent style={styles.mapButton}>
                        <View style={styles.iconContainer}>
                            <Icon type="Feather" name="map-pin" style={styles.mapPin}></Icon>
                        </View>
                        <View style={styles.separator}></View>
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.mapPinLabel}>{getBuildingInfo[props.name].address}</Text>
                        </View>
                    </Button>

                    <Button transparent style={styles.phoneButton}>
                        <View style={styles.iconContainer}>
                            <Icon type="Feather" name="phone" style={styles.phone}></Icon>
                        </View>
                        <SafeAreaView style={styles.separator}></SafeAreaView>
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.mapPinLabel}>{getBuildingInfo[props.name].phone != undefined ? getBuildingInfo[props.name].phone : "N/A"}</Text>
                        </View>
                    </Button>

                    <Button style={styles.directionButton}><Text style={{ color: "white" }}>Get Directions</Text></Button>
                </SafeAreaView>

                <View style={styles.imageContainer}>
                    <Image style={styles.buildingImage} source={require("./../assets/Hall_Building.png")} />
                </View>

                <Text style={styles.mainLabel}>{props.name}</Text>
                <Text style={styles.reviewLabel}>19 Reviews</Text>

                <SafeAreaView style={styles.scrollTextContainer}>
                    <SectionList
                        sections={[
                            { title: "Departments ", data: departments },
                            { title: "Services", data: services },
                            { title: "Accessibility", data: accesibility },
                        ]}
                        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
                        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={renderSeparator}
                    />
                </SafeAreaView>

                <Text style={styles.shortLabel}>Description</Text>
            </View>
        );
    }
    return (<AppLoading />);
}
export const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "100%"
    },

    mainLabel: {
        color: "#FFFFFF",
        left: "5%",
        position: "absolute",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "16%"
    },

    shortLabel: {
        position: "absolute",
        left: "5%",
        top: "27%",
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        opacity: 0.3
    },

    reviewLabel: {
        position: "absolute",
        top: "21%",
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
        height: "25%",
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

});
export { MoreDetails };