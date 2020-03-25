import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";

function SideMenu(props) {
    return (

        <ScrollView>
            <ImageBackground
                source={require("../assets/Concordia_Darken.png")}
                style={styles.backgroundImage}
            >
                <View style={styles.textContainer}>
                <Text style={styles.nameLabel}>John Appleseed</Text>
                <Text style={styles.emailLabel}>johnappleseed@gmail.com</Text>
                </View>
              
            </ImageBackground>
            <ImageBackground
                source={require("../assets/separator_line.png")}
                style={styles.separator} resizeMode="contain" />
            <View>
                <DrawerNavigatorItems {...props} />
            </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,

        width: undefined,
        paddingTop: "60%"
    },
    separator: {
        flex: 1,
        width: undefined,
        paddingTop: "2.5%"
    },

    textContainer: {
        width: undefined,
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        bottom: "100%"
    },

    nameLabel: {
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "encodeSansExpanded",
        bottom: "100%",
        flex: 1,
        marginHorizontal: "8%"

    },
    emailLabel: {
        color: "#A9A9A9",
        fontSize: 13,
        flex:1,
        fontFamily: "encodeSansExpanded",
        bottom: "40%",
        marginHorizontal: "8%"
    }
});

export default SideMenu;