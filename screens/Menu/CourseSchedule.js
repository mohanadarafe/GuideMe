import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { AsyncStorage, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox, ListItem } from "react-native-elements";
import { CourseScheduleSVG } from "../../assets/CourseScheduleSVG.js";
import { sideMenuStyle } from "../../assets/styling/sideMenuStyling.js";


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
    const [switchVal, setSwitchVal] = React.useState("false");
    const [refresh, setRefresh] = React.useState(false);
    const [loop, setLoop] = React.useState(null);
    //TODO Show only events after current date
<<<<<<< HEAD
=======
    // let currentDate = new Date();

    //TODO Show only events after current date THIS FORMAT 2020-04-18
>>>>>>> 655350e6ae2f06eb530798eb5f49313dfbad41a1
    let currentDate = new Date();

    const getCalendarId = async () => {
        let calendarId = await AsyncStorage.getItem("calendarId");
        setSelectedCalendarId(calendarId);
    };

    const getAccessToken = async () => {
        let AccessToken = await AsyncStorage.getItem("accessToken");
        setAccessToken(AccessToken);
    };

    const getSwitchValue = async () => {
        let switchValue = await AsyncStorage.getItem('switchVal');
        setSwitchVal(switchValue);
    };

    const getCalendarEvents = async () => {
        let calendarEvents = await fetch('https://www.googleapis.com/calendar/v3/calendars/' + selectedCalendarId + '/events', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        let resp = await calendarEvents.json();
        if (resp.items.length > 0) {
            let filteredList = getFilteredGoogleCalendarEvents(resp);
            setCalendarEventsList(filteredList);
            setRefresh(false);
        }
        else {
            setCalendarEventsList({ NoEvent: true })
        }
    }

    const getFilteredGoogleCalendarEvents = (resp) => {
        var eventsFromCurrentDay = [];
        let elementDate;
        resp.items.forEach(element => {
            if (element.end.dateTime == undefined) {
                elementDate = new Date(element.end.date);
            }
            else {
                elementDate = new Date(element.end.dateTime);
            }
            if (elementDate > currentDate) {
                eventsFromCurrentDay.push({ id: element.id, summary: element.summary, description: element.description, location: element.location });
            }
        });
        if (eventsFromCurrentDay.length > 0) {
            return eventsFromCurrentDay;
        }
        else {
            return ({ NoEvent: true })
        }
    };

    const handleRefresh = () => {
        setRefresh(true);
        getCalendarEvents();
    }

    /**
     * The method will slide the side menu from the right side of the screen
     * @param  {} =>{props.navigation.openDrawer(
    */
    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    const goToDoubleSearch = (item) => {
        props.navigation.navigate("DoubleSearch", { CourseScheduleLocation: item.location });
    }

      useEffect(() => {
        setLoop(setInterval(() => {
            getCalendarId();
            getAccessToken();
            getSwitchValue();
        }, 1000));
<<<<<<< HEAD
        if (switchVal == "true") {
=======
>>>>>>> 655350e6ae2f06eb530798eb5f49313dfbad41a1
        getCalendarEvents();
        return function cleanUp() {
            clearInterval(loop);
            clearImmediate(loop);
            clearTimeout(loop);
        }
    }, [switchVal, selectedCalendarId, accessToken]);

    
    if (switchVal == "true" && calendarEventsList) {
<<<<<<< HEAD
    return (
=======
        return (
>>>>>>> 655350e6ae2f06eb530798eb5f49313dfbad41a1
            <View style={styles.container}>
                <View style={styles.menuButtonContainer}>
                    <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                        <Feather name="menu" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.mainLabel}>My Course Schedule</Text>
                <View style={styles.scrollTextContainer}>
                    {(switchVal == "true" && calendarEventsList.length > 0) &&
                        <FlatList
                            data={calendarEventsList}
                            keyExtractor={(item) => item.id}
                            initialNumToRender={10}
                            renderItem={({ item }) => (
                                <ListItem
                                    title={item.summary}
                                    titleStyle={{ color: "white", paddingLeft: 20 }}
                                    subtitle={item.description !== undefined ? item.description : "Please enter a description in your Google Calendar"}
                                    rightTitleStyle={{ color: "white", paddingRight: 20 }}
                                    containerStyle={{ backgroundColor: "#2A2E43" }}
                                    subtitleStyle={{ color: "grey", paddingLeft: 20 }}
                                    rightIcon={() => item.location &&
                                        <CheckBox
                                            size={30}
                                            iconRight
                                            iconType='material'
                                            uncheckedIcon={'arrow-forward'}
                                            uncheckedColor="#3ACCE1"
                                            onPress={() => { goToDoubleSearch(item) }
                                            }
                                        />}
                                />
                            )}
                            refreshing={refresh}
                            onRefresh={handleRefresh}
                        />
                    }
                    {calendarEventsList.NoEvent &&
                        <Text style={styles.noClassText}>No Upcoming classes!</Text>
                    }
                </View>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container2}>
                <View style={styles.menuButtonContainer}>
                    <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                        <Feather name="menu" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.mainLabel}>My Course Schedule</Text>
                <CourseScheduleSVG />
                <Text style={styles.courseScheduleInstructions}>Sync your Google Calendar account in the settings page to use this feature</Text>
            </View>
        );
    }
}


CourseSchedule.propTypes = {
    navigation: PropTypes.object,
    openDrawer: PropTypes.func,
    navigate: PropTypes.func
};

const courseScheduleStyle = {

    container2: {
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "#2A2E43"
    },
    mainLabel: {
        top: "15%",
        color: "#FFFFFF",
        position: "absolute",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
    },
    scrollTextContainer: {
        width: "100%",
        height: "75%",
        bottom: "0%",
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
    courseScheduleInstructions: {
        bottom: "30%",
        paddingLeft: "5%",
        paddingRight: "5%",
        color: "white",
        textAlign: 'center',
        alignSelf: "center",
        position: "absolute",
        fontSize: 18,
    },
    noClassText: {
        paddingLeft: "5%",
        paddingRight: "5%",
        color: "white",
        textAlign: 'center',
        alignSelf: "center",
        position: "absolute",
        fontSize: 18,
    }
}

export const styles = StyleSheet.create({...sideMenuStyle, ...courseScheduleStyle});

export default CourseSchedule;
