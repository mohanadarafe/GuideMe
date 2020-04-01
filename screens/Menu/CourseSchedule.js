import React from "react";
import { View, Text, StyleSheet, SafeAreaView, SectionList } from "react-native";
import { Icon, Button } from "native-base";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const renderSeparator = () => {
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

function CourseSchedule(props) {

    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    const goToCourseSchedule = () => {
        props.navigation.navigate("CourseScheduleDetails");
    }

    // TODO: Static data for now just to layout the SectionList 
    const data = [{
        title: "Wed, Feb 5",
        data: ["SOEN 357 Lecture", "SOEN 357 Tutorial", "SOEN 345 Lecture"
        ]
    }]

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <Button transparent style={styles.menuButton} onPress={goToMenu}>
                <Feather name="menu" style={styles.icon} />
                </Button>
            </View>
            <Text style={styles.mainLabel}>My Course Schedule</Text>

            <SafeAreaView style={styles.scrollTextContainer}>
                <SectionList
                    sections={data}
                    renderItem={({ item }) => <TouchableOpacity onPress={goToCourseSchedule}><Text style={styles.listItem}>{item}</Text></TouchableOpacity>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(index) => index}
                    ItemSeparatorComponent={renderSeparator}
                />
            </SafeAreaView>

        </View >
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
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "15%"
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

    scrollTextContainer: {
        width: "100%",
        height: "75%",
        bottom: "0%",
        position: "absolute",
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
        height: 65,
        paddingLeft: 22,
        fontFamily: "encodeSansExpanded",
        color: "#D3D3D3",
    },

});

export default CourseSchedule;
