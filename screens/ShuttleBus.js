import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon, Button } from "native-base";
import PropTypes from "prop-types";
import SegmentedControlTab from "react-native-segmented-control-tab";

ShuttleBus.propTypes = {
    navigation: PropTypes.object,
    goBack: PropTypes.func
};

function ShuttleBus (props) {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const goBack = () => {
        props.navigation.goBack();
    };

    // TODO: Remove this code (only here to test tabs)
    if (selectedTab === 0) {
        alert("I am in SGW");
    } else {
        alert("I am in Loyola");
    }

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image style={styles.shuttleImage} source={require("./../assets/shuttle.jpg")} />
            </View>

            <View style={styles.backArrowContainer}>
                <Button transparent style={styles.backArrow} onPress={goBack}>
                    <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
                </Button>
            </View>

            <Text style={styles.mainLabel}>Shuttle Bus</Text>
            <Text style={styles.shortLabel}>Winter 2020 Departures</Text>

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
        </View>
    );
}

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
    backArrow: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        left: "10%"
    },
    backArrowContainer: {
        width: "100%",
        height: "6%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        top: "7%"
    },
    icon: {
        position: "absolute",
        color: "#FFFFFF",
        alignSelf: "center",
        fontSize: 35
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
    }
});

export default ShuttleBus;
