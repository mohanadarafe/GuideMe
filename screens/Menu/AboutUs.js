import React from "react";
import { View, Text, StyleSheet, SafeAreaView, SectionList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Paragraph } from 'react-native-paper';
import { Icon, Button } from "native-base";
import { Feather } from "@expo/vector-icons";

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

function AboutUs(props) {

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
    }]

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <Button transparent style={styles.menuButton} onPress={goToMenu}>
                    <Feather name="menu" style={styles.icon} />
                </Button>
            </View>

            <Text style={styles.mainLabel}>About Us</Text>
            <Text style={styles.aboutLabel}>Our App</Text>

            <View style={styles.scrollViewTextContainer}>
            <ScrollView style={{flex:1}}>
                 <Paragraph style={styles.aboutText}>GuideMe is a software application made for commuters of Concordia University. The purpose of the application is to serve users a map for both the Loyola & Sir George Williams Campuses. The application gives a new refined way to navigate on campus offering route recommendations & various methods of travelling.
                  </Paragraph>
                 </ScrollView>
            </View>
           
            <Text style={styles.teamLabel}>Our Team</Text>

            <SafeAreaView style={styles.scrollTextContainer}>
                <SectionList
                    sections={data}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
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
        backgroundColor: "#2A2E43",
        flex:1
    },
    scrollViewTextContainer:{
        bottom: "57%",
        height: 150,
        width: 415,
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
        top:"43%"
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
        color: "#D3D3D3",
    },

});

export default AboutUs;
