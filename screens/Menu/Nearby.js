import React from "react";
import { View, Text, StyleSheet, AsyncStorage, FlatList, Dimensions } from "react-native";
import { Icon, Button } from "native-base";
import { Feather } from "@expo/vector-icons";


export const renderItem = ({ item, index }) => {

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemImageContainer}>
            </View>
            <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>Name of place: {item.key}</Text>
                <Text style={styles.itemText}>Rating of place: {item.rate}</Text>
            </View>
        </View>
    );
}


function Nearby(props) {

    // const goBack = () => {
    //     props.navigation.navigate("Map");
    // };

    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    // const bottomMenu = props.navigation.getParam("bottomMenu", "null");
    // console.log("bottom:" + bottomMenu);

    const data = [
        { key: 'a', rate:'1'}, { key: 'b', rate:'2' }, { key: 'c', rate:'3' }, { key: 'd', rate:'4' }, { key: 'e',rate:'5' }, { key: 'f',rate:'6' }, { key: 'g',rate:'7' }, { key: 'h',rate:'8' }, { key: 'i', rate:'9' }, { key: 'j', rate:'10' },
    ];
    // const numColumns = 2;

    return (
        <View style={styles.container}>
            {/* {bottomMenu=== true &&
                <Icon name="ios-arrow-down" style={styles.arrowDown} onPress={goBack} /> 
            } */}

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
                    data={data}
                    renderItem={renderItem}

                />
            </View>
        </View >
    );
}

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
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
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
        backgroundColor: '#353A50',
        borderRadius: 10
    },
    itemText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontFamily: "encodeSansExpanded",
        marginHorizontal: "10%",
        marginVertical:"3%"
    },
    itemTextContainer:{
        width:"100%",
        height: "35%",
        flexDirection: "column",
        justifyContent: "center"  
    },
    itemImageContainer: {
        backgroundColor: "#FFF",
        opacity: 0.3,
        width: "100%",
        height: "65%",
    }
});

export default Nearby;
