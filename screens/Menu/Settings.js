import { Feather } from "@expo/vector-icons";
import * as Google from 'expo-google-app-auth';
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { AsyncStorage, FlatList, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { CheckBox, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";


/**
 * TODO: 
 * TODO google calendar:
 * display the calendars in a flatlist (done)
 * let him select one (done)
 * Pass the calendarID and accesstoken to courseSchedule page --> (done)
 * Display the list of events in that page + Rename Go to my Next Class Button (done)
 * Make sure toggle off doesn't display calendardsList in Settings. (done)
 * 3. Make sure when the toggle is off in Settings, that we don't show the events (Pass toggle switch value in asyncStorage and check if its true in course schedule)
 * 4. Sign out when toggle is false (needs to be done).
 * **PR can be made at this point : Check up UI inconsistencies (between phone screen sizes)**
 * Bonus
 * 5. Information in what to do in google calendar.
 */

/**
 * Description: This method holds the toggle switches 
 * that will compose the setting screen. The screen will have 
 * also have accessibility to a Google Account Login screen.
 */

/**Prop passed
* @param  {} navigation props.navigation is the name of the object from Navigator library
*/
function Settings(props) {
    const [switchVal1, setSwitchVal1] = React.useState(false);
    const [switchVal2, setSwitchVal2] = React.useState(false);
    const [calendarList, setCalendarList] = React.useState(null);
    const [isConnected, setIsConnected] = React.useState({ checked: [] });
    const [accessToken, setAccessToken] = React.useState("");

    var switchLabel1 = switchVal1 ? "ON" : "OFF";
    var switchLabel2 = switchVal2 ? "ON" : "OFF";

    //Put function in Async storage
    const getSwitchValue = async () => {
        let getAccessToken = await AsyncStorage.getItem("accessToken");
        let switchValue = await AsyncStorage.getItem("switchVal");
        if (switchValue == "true") {
            const resp = await getUsersCalendarList(getAccessToken);
            getFilteredGoogleCalendarList(resp);
        }
        setSwitchVal2(switchValue);
        setAccessToken(getAccessToken);
    };

    const signInOrOut = async (val) => {
        if (val) {
            const respCalendars = await signInWithGoogleAsync();
            getFilteredGoogleCalendarList(respCalendars);
        }
        else {
            if (accessToken) {
                /* Log-Out */
                setCalendarList(null);
                await Google.logOutAsync({
                    accessToken, iosClientId: "128383090622-lgrk639fn4k6t99lhrldkh02441fcjgb.apps.googleusercontent.com",
                });
            }
        }
    }

    async function signInWithGoogleAsync() {
        try {
            const result = await Google.logInAsync({
                // androidClientId: YOUR_CLIENT_ID_HERE,
                iosClientId: "128383090622-lgrk639fn4k6t99lhrldkh02441fcjgb.apps.googleusercontent.com",
                scopes: ['profile', 'email', 'https://www.googleapis.com/auth/calendar.readonly'],
            });
            if (result.type === 'success') {
                AsyncStorage.setItem("accessToken", result.accessToken);
                setAccessToken(result.accessToken);
                return getUsersCalendarList(result.accessToken); //Here We are getting all the calendars in a json...
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    const getFilteredGoogleCalendarList = (respCalendars) => {
        var filteredList = respCalendars.items.map(element => {
            return { id: element.id, summary: element.summary, description: element.description };
        });
        setCalendarList(filteredList);
    };

    const getUsersCalendarList = async (accessToken) => {
        let calendarsList = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        let resp = await calendarsList.json();
        return resp;
    }

    const press = (item) => {   // The onPress method 
        var { checked } = isConnected;
        // These ensures that multiple checkboxes don't all get affected when one is clicked
        if (!checked.includes(item) || checked.length == 1) {
            checked = [];
            setIsConnected({ checked: [...checked, item] });
        } else {
            setIsConnected({ checked: checked.filter(a => a != item) });
        }
    };


    // //CHECK IF IT WORKS
    // const restrictSizeOfLabels = (filteredList) => {
    //     var restrictedSizeList = filteredList.items.map(element => {
    //         //If both the title and the description of the calendar is greater than 20 char, add ...
    //         if (element.summary.length > 20 && element.description.length > 20) {
    //             updatedSummary = element.summary.substring(0, 20) + "...";
    //             updatedDescription = element.description.substring(0, 20) + "...";
    //             return { id: element.id, summary: element.updatedSummary, description: element.updatedDescription };
    //         }
    //         //If the description of the calendar is greater than 20 char, add ...
    //         if (element.description.length > 20) {
    //             updatedDescription = element.description.substring(0, 20) + "...";
    //             return { id: element.id, summary: element.summary, description: element.updatedDescription };
    //         }
    //         //If the title of the calendar is greater than 20 char, add ...
    //         if (element.summary.length > 20) {
    //             updatedDescription = element.summary.substring(0, 20) + "...";
    //             return { id: element.id, summary: element.summary, description: element.updatedDescription };
    //         }
    //         else {
    //             return { id: element.id, summary: element.summary, description: element.description };
    //         }
    //     });
    //     setCalendarList(restrictedSizeList);
    // }

    /**
    * The method will slide the side menu from the right side of the screen
    * @param  {} =>{props.navigation.openDrawer(
    */
    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    //Same problem that with course schedule before with the accessToken (Not sure how to fix...)
    useEffect(() => {
        getSwitchValue();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                    <Feather name="menu" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.mainLabel}>Settings</Text>
            <View style={styles.scrollContainer}>
                <ScrollView scrollEnabled={false}>
                    <View style={styles.container1}>
                        <Text style={styles.container1Text}>Notifications</Text>
                        <Text style={styles.container1SubText}>Current Status is {switchLabel1}</Text>
                        <View style={styles.toggle}>
                            <Switch
                                value={switchVal1}
                                onValueChange={(val) => setSwitchVal1(val)}>
                            </Switch>
                        </View>
                    </View>
                    <View style={styles.container2}>
                        <Text adjustsFontSizeToFit style={styles.container2Text}>Google Calendar Sync</Text>
                        <Text style={styles.container2SubText}>Current Status is {switchLabel2}</Text>
                        <View style={styles.toggle}>
                            <Switch
                                value={switchVal2 == "true" ? true : false} //Maybe not working because it is not a boolean
                                onValueChange={(val) => {
                                    AsyncStorage.setItem("switchVal", JSON.stringify(val)); //Passing a boolean to a Async storage
                                    setSwitchVal2(val.toString());
                                    signInOrOut(val);
                                }
                                }>
                            </Switch>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.flatlist}>
                {(calendarList) &&
                    <FlatList
                        data={calendarList}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => { press(item.id) }}>
                                <ListItem
                                    title={item.summary}
                                    titleStyle={{ color: "white" }}
                                    subtitle={item.description !== undefined ? item.description : "Please provide a description inside google calendar"}
                                    rightTitleStyle={{ color: "green" }}
                                    subtitleStyle={{ color: "grey" }}
                                    containerStyle={{ backgroundColor: "#2A2E43" }}
                                    rightIcon={
                                        <CheckBox
                                            size={30}
                                            iconRight
                                            iconType='material'
                                            checkedIcon='check'
                                            uncheckedIcon='add'
                                            uncheckedColor="grey"
                                            checkedColor='#3ACCE1'
                                            onPress={() => {
                                                press(item.id);
                                                AsyncStorage.setItem("calendarId", item.id)
                                            }}
                                            checked={isConnected.checked.includes(item.id)}
                                        />}
                                />
                            </TouchableOpacity>
                        )}
                    />
                }
            </View>
        </View>
    );
}

Settings.propTypes = {
    navigation: PropTypes.object,
    openDrawer: PropTypes.func,
};

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: "#2A2E43"
    },
    mainLabel: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        marginTop: "5%",
        marginBottom: "5%"
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
    container1: {
        width: "100%",
        height: "100%",
        backgroundColor: "#353A50",
        flexDirection: "column",
        justifyContent: "center"
    },
    container1Text: {
        color: "#FFF",
        marginHorizontal: "10%",
        fontSize: 18,
        fontFamily: "encodeSansExpanded"
    },
    container1SubText: {
        color: "#FFF",
        opacity: 0.3,
        marginHorizontal: "10%",
        fontFamily: "encodeSansExpanded"
    },
    container2: {
        width: "100%",
        height: "100%",
        backgroundColor: "#353A50",
        top: "20%",
        flexDirection: "column",
        justifyContent: "center"
    },
    container2Text: {
        color: "#FFF",
        marginHorizontal: "10%",
        fontSize: 18,
        fontFamily: "encodeSansExpanded"
    },
    container2SubText: {
        color: "#FFF",
        opacity: 0.3,
        marginHorizontal: "10%",
        fontFamily: "encodeSansExpanded"
    },
    scrollContainer: {
        height: "25%",
        width: "100%",
        backgroundColor: "#353A50",
        flexDirection: "column",
    },
    toggle: {
        position: "absolute",
        left: "80%",
        top: "30%"
    },
    flatlist: {
        height: "60%", //Increase size of the flatlist if it doesnt fit the screen
        width: "100%",
        marginLeft: 20,
        flexDirection: "column",
    }
});

export default Settings;
