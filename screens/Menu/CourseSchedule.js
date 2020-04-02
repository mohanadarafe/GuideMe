import React from "react";
import { View, Text, StyleSheet, SafeAreaView, SectionList } from "react-native";
import { Button } from "native-base";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import PropTypes from "prop-types";

/**

 * US22 - As a user, I would like to connect my direction to next class to my google calendar. #31
 * US23 - As a user, when connecting the direction to the next class in my google calendar, I would like to map those directions to multiple calendars. #32
 * US24 - As a user, I would like to find the location of a classroom from the next calendar event.
 * 
 * Description: The CourseSchedule method will 
 * render the screen for the CourseSchedule screen, 
 * which is composed of a scroll list that will hold
 * the information of the courses retrived from the Google Calendar API.
 * The items from the sectionList will be pressable for the uesr 
 * to navigate to the detail screen and get the directions to the class.
 */


/**Prop passed
 * @param  {} navigation props.navigation is the name of the object from Navigator library
 */
function CourseSchedule (props) {

    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    const goToCourseSchedule = () => {
        props.navigation.navigate("CourseScheduleDetails");
    };

    // TODO: Static data for now just to layout the SectionList 
    const data = [{
        title: "Wed, Feb 5",
        data: ["SOEN 357 Lecture", "SOEN 357 Tutorial", "SOEN 345 Lecture"
        ]
    }];

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
                    ItemSeparatorComponent={ () => <View style={styles.line}/>}
                />
            </SafeAreaView>

        </View >
    );
}

CourseSchedule.propTypes = {
    navigation: PropTypes.object,
    openDrawer: PropTypes.func,
    navigate: PropTypes.func
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
    line: {
        height: 1,
        width: "100%",
        backgroundColor: "#353A50",
    },

});

export default CourseSchedule;
