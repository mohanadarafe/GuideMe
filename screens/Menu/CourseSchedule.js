import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { AsyncStorage, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

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
function CourseSchedule(props) {
    const [accessToken, setAccessToken] = React.useState(null);
    const [selectedCalendarId, setSelectedCalendarId] = React.useState(null);
    const [calendarEventsList, setCalendarEventsList] = React.useState(null);
    const [switchVal, setSwitchVal] = React.useState(false);

    const getCalendarId = async () => {
        let calendarId = await AsyncStorage.getItem("calendarId");
        setSelectedCalendarId(calendarId);
    };

    const getAccessToken = async () => {
        let accessToken = await AsyncStorage.getItem("accessToken");
        setAccessToken(accessToken);
    };

    const getSwitchValue = async () => {
        let switchValue = await AsyncStorage.getItem('switchVal');
        setSwitchVal(switchValue);
    };

    const getCalendarEvents = async () => {
        let calendarEvents = await fetch('https://www.googleapis.com/calendar/v3/calendars/' + selectedCalendarId + '/events', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        let resp = await calendarEvents.json();
        setCalendarEventsList(getFilteredGoogleCalendarEvents(resp));
    }

    const getFilteredGoogleCalendarEvents = (resp) => {
        var filteredList = resp.items.map(element => {
            return { id: element.id, summary: element.summary, description: element.description, location: element.location };
        });
        return filteredList;
    };

    const CourseScheduleScreen = true;

    /**
     * The method will slide the side menu from the right side of the screen
     * @param  {} =>{props.navigation.openDrawer(
    */
    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    const goToDoubleSearch = (item) => {
        props.navigation.navigate("DoubleSearch", { CourseScheduleScreen: CourseScheduleScreen, CourseScheduleLocation: item.location });
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            getCalendarId();
            getAccessToken();
            getSwitchValue();
        }, 1);
        getCalendarEvents();
        return () => clearInterval(intervalId);
    }, [selectedCalendarId, accessToken]);

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                    <Feather name="menu" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.mainLabel}>My Course Schedule</Text>
            <ScrollView style={styles.scrollTextContainer}>
                {(switchVal == "true" && calendarEventsList) &&
                    <FlatList
                        data={calendarEventsList}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ListItem
                                title={item.summary}
                                titleStyle={{ color: "white", paddingLeft: 20 }}
                                subtitle={item.location !== undefined ? item.description : "Please enter a location in your Google Calendar"}
                                rightTitleStyle={{ color: "white", paddingRight: 20 }}
                                containerStyle={{ backgroundColor: "#2A2E43" }}
                                subtitleStyle={{ color: "grey", paddingLeft: 20 }}
                                rightIcon={
                                    <CheckBox
                                        size={30}
                                        iconRight
                                        iconType='material'
                                        uncheckedIcon='arrow-forward'
                                        uncheckedColor="#3ACCE1"
                                        onPress={() => { goToDoubleSearch(item) }}
                                    />}
                            />
                        )}
                    />
                }
            </ScrollView>
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
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 35,
    },
    menuButton: {
        height: "100%",
        width: "20%",
        flexDirection: "row",
        justifyContent: "center"
    },
    menuButtonContainer: {
        width: "100%",
        height: "6%",
        top: "7%",
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
