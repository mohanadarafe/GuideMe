import React from "react";
import { View, Text, StyleSheet, AsyncStorage, FlatList, Dimensions } from "react-native";
import { Icon, Button } from "native-base";



function Nearby(props) {

    const goBack = () => {
        props.navigation.goBack();
    }

    const data = [{ key: "A" }, { key: "B" }, { key: "C" }];
    const numColumns = 2;


    const renderItem = ({ item, index }) => {

        return (
            <View
                style={{
                    flex: 1,
                    margin: 5,
                    minWidth: 170,
                    maxWidth: 223,
                    height: 200,
                    maxHeight: 200,
                    backgroundColor: '#353A50',
                }}
            />
        );
    }


    return (
        <View style={styles.container}>
            <Icon name="ios-arrow-down" style={styles.arrowDown} onPress={goBack} />

            <Text style={styles.mainLabel}>Points of Interest</Text>

            <FlatList
                onEndReachedThreshold={0}

                contentContainerStyle={styles.list}
                data={[
                    { key: 'a' },
                    { key: 'b' },
                    { key: 'c' },
                    { key: 'd' },
                    { key: 'e' },
                    { key: 'f' },
                    { key: 'g' },
                    { key: 'h' },
                    { key: 'i' },
                    { key: 'j' },
                ]}
                renderItem={renderItem}
            />

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
        top: "50%"
    },
});

export default Nearby;
