import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Button } from "native-base";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import PropTypes from "prop-types";

/**
 * Description: This method holds the toggle switches 
 * that will compose the setting screen. The screen will have 
 * also have accessibility to a Google Account Login screen.
 */

 /**Prop passed
 * @param  {} navigation props.navigation is the name of the object from Navigator library
 */
function Settings (props) {

    const [switchVal1, setSwitchVal1] = React.useState(false);
    const [switchVal2, setSwitchVal2] = React.useState(false);

    var switchLabel1 = switchVal1 ? "ON" : "OFF";
    var switchLabel2 = switchVal2 ? "ON" : "OFF";

    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <Button transparent style={styles.menuButton} onPress={goToMenu}>
                    <Feather name="menu" style={styles.icon} />
                </Button>
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
                                onValueChange={(val) => setSwitchVal2(val)}>
                            </Switch>
                        </View>
                    </View>
                </ScrollView>
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
        height: "78%",
        width: "100%"
    },
    toggle: {
        position: "absolute",
        left: "80%",
        top: "30%"
    },
    scrollViewFlex:{
        flexGrow: 1
    }
});

export default Settings;
