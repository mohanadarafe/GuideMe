import React from "react";
import { View, Text, StyleSheet, SafeAreaView, SectionList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { sideMenuStyle } from "../../assets/styling/sideMenuStyling";

/**
 * Description: This is the about page for an
 * informative summary about the application 
 * and the info on the team memebers that have 
 * participation of this application. Github usernames included.
 */

/**Prop passed
* @param  {} navigation props.navigation is the name of the object from Navigator library
*/
function AboutUs(props) {

    /**
    * The method will slide the side menu from the right side of the screen
    * @param  {} =>{props.navigation.openDrawer(
    */
    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    const data = [{
        title: "Team - Github",
        data: ["Mohanad Arafe - mohanadarafe",
            "Christophe Shaka Bahenduzi - csbduzi",
            "Kenza Boulisfane - bkenza",
            "Jérémie Chouteau - JayChoteau",
            "Baddredine Loulidi - badred123",
            "Firas Sawan - firassawan",
            "Alain Job Uzarama Uwe - alainjobs",
            "Shirwa Warsame - shirwarsame",
            "Hussain Witwit - hussainwitwit"
        ]
    }];
    const textParagraph = [{
        data: ["GuideMe is a software application made for commuters of Concordia University. The purpose of the application is to serve users a map for both the Loyola & Sir George Williams Campuses. The application gives a new refined way to navigate on campus offering route recommendations & various methods of travelling."]
    }];

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                    <Feather name="menu" style={styles.icon} />
                </TouchableOpacity>
            </View>

            <Text style={styles.mainLabel}>About Us</Text>
            <Text style={styles.aboutLabel}>Our App</Text>

            <View style={styles.scrollViewTextContainer}>
                <SectionList
                    sections={textParagraph}
                    renderItem={({ item }) => <Text style={styles.paragraphText}>{item}</Text>}
                    keyExtractor={(index) => index}
                    ItemSeparatorComponent={() => <View style={styles.line} />}
                />
            </View>

            <Text style={styles.teamLabel}>Our Team</Text>

            <SafeAreaView style={styles.scrollTextContainer}>
                <SectionList
                    sections={data}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(index) => index}
                    ItemSeparatorComponent={() => <View style={styles.line} />}
                />
            </SafeAreaView>
        </View >
    );
}

AboutUs.propTypes = {
    navigation: PropTypes.object,
    openDrawer: PropTypes.func
};

const aboutUsStyle = {

    scrollViewTextContainer: {
        bottom: "59%",
        height: "15%",
        width: "95%",
    },
    mainLabel: {
        color: "#FFFFFF",
        position: "absolute",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "15%"
    },
    aboutLabel: {
        color: "#FFFFFF",
        position: "absolute",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "22%"
    },
    aboutText: {
        position: "absolute",
        alignSelf: "center",
        fontSize: 12,
        fontFamily: "encodeSansExpanded",
        color: "#D3D3D3",
        top: "27%",
        width: "85%",
        textAlign: "center"
    },
    teamLabel: {
        color: "#FFFFFF",
        position: "absolute",
        fontSize: 18,
        fontFamily: "encodeSansExpanded",
        top: "43%"
    },
    scrollTextContainer: {
        width: "100%",
        height: "52%",
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
        height: 44,
        paddingLeft: 22,
        fontFamily: "encodeSansExpanded",
        color: "#FFF",
    },
    line: {
        height: 1,
        width: "100%",
        backgroundColor: "#353A50",
    },
    paragraphText: {
        padding: 10,
        fontSize: 14,
        fontFamily: "encodeSansExpanded",
        color: "#FFF",
        textAlign: "center",
        lineHeight: 30
    }
}

export const styles = StyleSheet.create({ ...sideMenuStyle, ...aboutUsStyle});

export default AboutUs;
