import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "native-base";
import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import SegmentedControlTab from "react-native-segmented-control-tab";


/**Prop passed
 * @param  {} navigation props.navigation is the name of the object from Navigator library
 */
function ShuttleBus (props) {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    // TODO: Remove this code (only here to test tabs)
    // if (selectedTab === 0) {
    //     alert("I am in SGW");
    // } else {
    //     alert("I am in Loyola");
    // }

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image style={styles.shuttleImage} source={require("./../../assets/shuttle.jpg")} />
            </View>

            <View style={styles.menuButtonContainer}>
                <Button transparent style={styles.menuButton} onPress={goToMenu}>
                    <Feather name="menu" style={styles.icon} />
                </Button>
            </View>

            <Text style={styles.mainLabel}>Shuttle Bus</Text>
            <Text style={styles.shortLabel}>Winter 2020 Departures</Text>
            <View style={styles.controlTabContainer}>
                <SegmentedControlTab
                    tabsContainerStyle={styles.tabsContainerStyle}
                    values={["SGW", "Loyola"]}
                    selectedIndex={selectedTab}
                    tabStyle={styles.tabStyle}
                    borderRadius={0}
                    tabTextStyle={styles.tabTextStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTabTextStyle={styles.activeTabTextStyle}
                    onTabPress={tab => { setSelectedTab(tab); }}
                />
                {selectedTab === 0 && (
                    <Text style={styles.tabContent}> Tab one</Text>
                )}
                {selectedTab === 1 && (
                    <Text style={styles.tabContent}> Tab two</Text>
                )}
            </View>

        </View>
    );
}

ShuttleBus.propTypes = {
    navigation: PropTypes.object,
    openDrawer: PropTypes.func,
};

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        backgroundColor: "#2A2E43"
    },
    mainLabel: {
        color: "#FFFFFF",
        position: "absolute",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "25%",
        right: "55%"
    },
    shortLabel: {
        color: "#FFFFFF",
        opacity: 0.7,
        position: "absolute",
        fontSize: 15,
        fontFamily: "encodeSansExpanded",
        top: "29%",
        right: "52%"
    },
    icon: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        left: "6%",
        color: "#FFFFFF",
        fontSize: 35
    },
    menuButton: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
    },
    menuButtonContainer: {
        width: "100%",
        height: "6%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        top: "7%"
    },
    imageContainer: {
        width: "100%",
        height: "32%",
        top: "0%",
        position: "absolute",
        opacity: 0.7
    },
    shuttleImage: {
        width: "100%",
        height: "100%",
        top: "0%",
        position: "relative"
    },
    controlTabContainer: {
        top: "6%",
        alignContent: "space-between"
    },
    tabsContainerStyle: {
        bottom: "100%",
        top: "-130%",
        backgroundColor: "#2A2E43",
    },
    tabStyle: {
        backgroundColor: "#2A2E43",
        borderWidth: 0,
        borderColor: "white",
        borderBottomColor: "#FFFFFF",
        paddingHorizontal: "15%"
    },
    tabTextStyle: {
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    activeTabStyle: {
        backgroundColor: "#2A2E43",
        borderBottomColor: "#3ACCE1"
    },
    activeTabTextStyle: {
        color: "#3ACCE1",
        backgroundColor: "#2A2E43",
        fontWeight: "bold"
    },
    test: {
        backgroundColor: "yellow",
        bottom: "100%",
        top: "-130%",
    },
    tabContent: {
        color: "#fff",
        fontSize: 18,
        margin: 24,
        bottom: "50%"
    },
});

export default ShuttleBus;
