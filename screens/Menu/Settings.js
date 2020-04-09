import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import * as Google from 'expo-google-app-auth';
import { List, ListItem, SearchBar } from "react-native-elements";
import { CheckBox } from 'react-native-elements'


/**
 * TODO: 
 * TODO google calendar:
 * 1. display the calendars in a flatlist (done)
 * 2. let him select one (change its color similar to preferences menu)
 * 3. Pass the calendarID and accesstoken to courseSchedule page --> Use AsyncStorage  to also save the states when returning here
 * 4. Display the list of events in that page + Rename Go to my Next Class Button 
 * 5. Sign out when toggle is false.
 */

/**
 * 
 */
getUsersCalendarList = async (accessToken) => {
    let calendarsList = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
    headers: { Authorization: `Bearer ${accessToken}`},
    });
    let resp = await calendarsList.json();
    return resp;
}

/**
 * 
 */
async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        // androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId: "128383090622-lgrk639fn4k6t99lhrldkh02441fcjgb.apps.googleusercontent.com",
        scopes: ['profile', 'email', 'https://www.googleapis.com/auth/calendar.readonly'],
      });
      if (result.type === 'success') {
        return getUsersCalendarList(result.accessToken); //Here We are getting all the calendars in a json...
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }


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
    const [isConnected, setIsConnected] = React.useState({checked: []});

    var switchLabel1 = switchVal1 ? "ON" : "OFF";
    var switchLabel2 = switchVal2 ? "ON" : "OFF";

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

      /**
   * 
   * @param {*} val 
   */
  const signInOrOut = async (val) => {
    if(val) {
    const respCalendars = await signInWithGoogleAsync();
    setCalendarList(respCalendars);
    console.log(respCalendars);
    }
    else{
        //TODO: 5. Sign out
    }
}

     /**
     * The method will slide the side menu from the right side of the screen
     * @param  {} =>{props.navigation.openDrawer(
     */
    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    const list = [
        {id: "1", name: "Calendar1", connected: false}, 
        {id: "2", name: "Calendar2", connected: false},
        {id: "3", name: "Calendar3", connected: false},
        {id: "4", name: "Calendar4", connected: false},
    ]

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                    <Feather name="menu" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.mainLabel}>Settings</Text>
            <View style={styles.scrollContainer}>
                <ScrollView style={styles.scrollViewFlex}>
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
                                value={switchVal2}
                                onValueChange={(val) => {
                                    setSwitchVal2(val);
                                    signInOrOut(val);               
                                }
                            }>
                            </Switch>
                        </View>
                    </View>
                </ScrollView>
                        {(list && calendarList) &&
                        <FlatList 
                            contentContainerStyle ={{marginLeft: 30, marginRight: 30}}
                            data = {list}
                            keyExtractor = {(item) => item.id}
                            renderItem={({ item }) => (
                            <TouchableOpacity onPress = {() => { press(item.name)}}>
                                <ListItem
                                  roundAvatar
                                  title={item.name}
                                  titleStyle = {{color: "white"}}
                                  subtitle={"Description"}
                                  rightIcon={
                                    <CheckBox
                                        size = {30}
                                        iconRight
                                        iconType='material'
                                        checkedIcon='check'
                                        uncheckedIcon='add'
                                        uncheckedColor = "grey"
                                        checkedColor='#3ACCE1'
                                        onPress = {() => { press(item.name)}}
                                        checked = {isConnected.checked.includes(item.name)}
                                    />}

                                  rightTitleStyle = {{color: "green"}}
                                  subtitleStyle = {{color: "grey"}}
                                  avatar={{}}
                                  containerStyle={{ backgroundColor: "#2A2E43"}}
                                />
                                </TouchableOpacity>
                              )}
                            // renderItem = {({item}) => (<Text style={styles.item}>{item.name}</Text>
                            
                                // <Text style={styles.connect}>Connect</Text>)}
                            // ItemSeparatorComponent={renderSeparator}
                        />
                    }
            </View>
        </View >
    );
}

Settings.propTypes = {
    navigation: PropTypes.object,
    openDrawer: PropTypes.func,
};

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // justifyContent: "space-between",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: "#2A2E43"
    },
    mainLabel: {
        color: "#FFFFFF",
        // position: "absolute",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        // top: "15%"
        marginTop: "15%"
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
        top: "10%",
        flexDirection: "column",
        justifyContent: "center"
    },
    container1Text: {
        color: "#FFF",
        marginHorizontal: "10%",
        marginVertical: "2%",
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
        marginVertical: "2%",
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
        height: "100%",
        width: "100%"
    },
    toggle: {
        position: "absolute",
        left: "80%",
        top: "30%"
    },
    scrollViewFlex: {
        // flexGrow: 1,
    },
    calendarListStyle: {

    },
    item: {
        // backgroundColor: "yellow",
        // paddingTop: 20,
        // alignItems: "center"
        paddingBottom: 25,
        paddingTop: 25,
        fontSize: 20,
        color: "white",
        borderColor: 'white',
        borderBottomWidth: 1,
        // backgroundColor: "yellow"
    }
});

export default Settings;
