import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Button } from "native-base";
import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";

/**
 * US34 - As a user, I would like to see the nearest outdoor points of interest #14
 * US35 - As a user, I would like to get the direction to the chosen nearest point of interest #15
 * US36 - As a user, I would like to see a detailed description of the selected places #29
 * 
 * Description: This screen will presents the layout 
 * for the display of the point of interests. The points 
 * of interest information will be retrieved from the Google Places API.
 * The screen is composed on a flatList to create a grid, and have 
 * an pressable item for each points of interest
 */
/**Prop passed
 * @param  {} navigation props.navigation is the name of the object from Navigator library
 */
function NearbyInterest(props) {

    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    const goToNearbyInterestDetails = () => {
        props.navigation.navigate("NearbyInterestDetails");
    };

    // Static data for now 
    const data = [
        { key: "a", rate: "1" }, { key: "b", rate: "2" }, { key: "c", rate: "3" }, { key: "d", rate: "4" }, { key: "e", rate: "5" }, { key: "f", rate: "6" }, { key: "g", rate: "7" }, { key: "h", rate: "8" }, { key: "i", rate: "9" }, { key: "j", rate: "10" },
    ];
    /**
     * The following function balancesthe grid of the flatlist so that theres always a full row
     * @param  {} data
     * @param  {} numColumns
     */
    const formatData = (data, numColumns) => {

        if (numColumns != 0) {

            const numberOfFullRows = Math.floor(data.length / numColumns);

            let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);

            while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {

                data.push({ key: "blank-${numberOfElementsLastRow}", empty: true });

                numberOfElementsLastRow = numberOfElementsLastRow + 1;
            }
        }

        return data;
    };

    const numColumns = 2;

    return (
        <View style={styles.container}>

            <View style={styles.menuButtonContainer}>
                <Button transparent style={styles.menuButton} onPress={goToMenu}>
                    <Feather name="menu" style={styles.icon} />
                </Button>
            </View>


            <Text style={styles.mainLabel}>Points of Interest</Text>


            <View style={styles.flatListContainer}>
                <FlatList
                    onEndReachedThreshold={0}
                    contentContainerStyle={styles.list}
                    data={formatData(data, numColumns)}
                    numColumns={numColumns}
                    keyExtractor={(item) => {
                        return item.key;
                    }}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={goToNearbyInterestDetails}>
                            <View key={index}>
                                {item.empty === true &&
                                    <View style={styles.itemContainer, styles.itemInvisible}></View>
                                }
                                {item.empty !== true &&
                                    <View style={styles.itemContainer}>
                                        <View style={styles.itemImageContainer}>
                                        </View>
                                        <View style={styles.itemTextContainer}>
                                            <Text style={styles.itemText}>Name of place: {item.key}</Text>
                                            <Text style={styles.itemText}>Rating of place: {item.rate}</Text>
                                        </View>
                                    </View>
                                }
                            </View>
                        </TouchableOpacity>
                    )}

                />
            </View>
        </View >
    );
}

NearbyInterest.propTypes = {
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
    arrowDown: {
        color: "#ffffff",
        top: "5%",
        fontSize: 54,
        position: "absolute"
    },
    list: {
        flexDirection: "column"
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
    flatListContainer: {
        height: "73%",
        bottom: "5%"
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        minWidth: 170,
        maxWidth: 223,
        height: 200,
        maxHeight: 200,
        backgroundColor: "#353A50",
        borderRadius: 10
    },
    itemText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontFamily: "encodeSansExpanded",
        marginHorizontal: "10%",
        marginVertical: "3%"
    },
    itemTextContainer: {
        width: "100%",
        height: "35%",
        flexDirection: "column",
        justifyContent: "center"
    },
    itemImageContainer: {
        backgroundColor: "#FFF",
        opacity: 0.3,
        width: "100%",
        height: "65%",
    },
    itemInvisible: {
        backgroundColor: "transparent"
    }
});

export default NearbyInterest;
