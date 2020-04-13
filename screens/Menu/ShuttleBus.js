import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { ListItem } from "react-native-elements";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { ShuttleBusTimes } from "../../constants/shuttleBustimes";
import { Button } from "react-native-paper";
import { Icon } from "native-base";

function TimesToDisplay (props) {
    let DATA = [];
    let campus = props.campus;
    if (props.campus == "SGW") {
        DATA = props.data.sgwStops;
    }
    else if (props.campus == "Loyola") {
        DATA = props.data.LoyolaStops;
    }
    // console.log("data: ", props.data);
    return (
        <SafeAreaView style={{ top: "2%", width: "100%" }}>
            <FlatList
                data={DATA}
                showsVerticalScrollIndicator={true}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ListItem
                        title={`Shuttle Bus to ${campus}`}
                        titleStyle={{ color: "white", marginLeft: "5%" }}
                        subtitle={`${item.hour}:${item.minutes}`}
                        subtitleStyle={{ color: "white", marginLeft: "5%" }}
                        bottomDivider
                        containerStyle={{ backgroundColor: "#2A2E43", borderRadius: 5, marginHorizontal: "2%" }}
                        leftIcon={<MaterialCommunityIcons name="bus-clock" size={ICON_SIZE} style={styles.mapPin} />}
                        rightTitle={`${item.timeDifference.Hours}:${item.timeDifference.Minutes}`}
                        rightTitleStyle={{ color: "#fff" }}
                    />
                )
                }
            />
        </SafeAreaView>
    );
}

TimesToDisplay.propTypes = {
    navigation: PropTypes.object,
    openDrawer: PropTypes.func,
};


//TODO: create a hook called results that takes as a parameter getNextStops in the useEffect()

const ICON_SIZE = 35;


/** Prop passed
 * @param  {} navigation props.navigation is the name of the object from Navigator library
 */
function ShuttleBus (props) {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(null);
    const [currentDay, setCurrentDay] = React.useState(null);
    const [campus, setCampus] = React.useState("SGW");
    const [results, setResults] = React.useState([]);


    const weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "saturday", "sunday"];
    const friday = ["friday"];

    const getShuttleBusTimes = ShuttleBusTimes();
    const sgw = "SGW";
    const loyola = "Loyola";

    const data = {
        "users":
            [
                {
                    "name": "Proxima Midnight",
                    "email": "proxima@appdividend.com",
                    "hour": "5",
                    "minutes": "20"
                },
                {
                    "name": "Ebony Maw",
                    "email": "ebony@appdividend.com",
                    "hour": "6",
                    "minutes": "20"
                },
                {
                    "name": "Black Dwarf",
                    "email": "dwarf@appdividend.com",
                    "hour": "7",
                    "minutes": "20"

                },
            ]
    };

    /**
    * The method will slide the side menu from the right side of the screen
    * @param  {} =>{props.navigation.openDrawer(
    */
    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    /**
     * Function that gets the current time in hours and minutes as well as the current day
     */
    const getCurrentTime = () => {
        let currentHour = new Date().getHours();
        let currentMinutes = new Date().getMinutes();
        //set current time 
        setCurrentTime({ Hour: currentHour, Minutes: currentMinutes });
        let CurrentDayIndex = new Date().getDay();
        let days = [];
        days = weekDays;
        days.forEach((item, index) => {
            if (index == CurrentDayIndex) {
                setCurrentDay(item);
            }
        });
        // days.forEach((item, key) => {
        //     if (key == CurrentDayIndex) {
        //         //set current day
        //         console.log("INSIDE");
        //         setCurrentDay(item);
        //     }
        // });
    };

    /**
     * Function that calculates the time difference between the current time and the times of the next
     * shuttle bus stops
     * @param {*} nextStop 
     */
    const calculateTimeDifference = (nextStop) => {
        var diffHours = nextStop.hour - currentTime.Hour;
        var diffMinutes = nextStop.minutes - currentTime.Minutes;
        return ({
            Hours: diffHours,
            Minutes: Math.abs(diffMinutes)
        });
    };

    const fetchNextStops = (list) => {
        var nextStops = [];
        var results = [];
        let index = 0;
        for (var key in list) {
            if (list[key].hour >= currentTime.Hour && list[key].minutes >= currentTime.Minutes) {
                console.log("Never here");
                nextStops = list.slice(index, list.length - 1);
                break;
            }
            index++;
        }
        if (nextStops.length > 0) {
            results = nextStops.map((element, index) => {
                return ({
                    id: index,
                    timeDifference: calculateTimeDifference(element),
                    hour: element.hour,
                    minutes: element.minutes
                });
            });
        }
        return results;
    };

    /**
     * Function that sorts through the shuttle bus schedule and compares the time/day to the current time/day
     */
    const getNextStops = () => {
        var scheduleTimesSGW = [];
        var scheduleTimesLoyola = [];
        const sgwCampus = "SGW";
        const loyolaCampus = "Loyola";
        var nextStops = [];
        let index = 0;
        var results = [];
        if (currentDay && weekDays.includes(currentDay.toString())) {
            scheduleTimesSGW = getShuttleBusTimes[sgwCampus].MondayToThursday;
            scheduleTimesLoyola = getShuttleBusTimes[loyolaCampus].MondayToThursday;
        }
        else if (currentDay && friday.includes(currentDay.toString())) {
            scheduleTimesSGW = getShuttleBusTimes[sgwCampus].Friday;
            scheduleTimesLoyola = getShuttleBusTimes[loyolaCampus].Friday;
        }
        else {
            return alert("There is no shuttle bus on weekends. Please check back during the week!");
        }
        var nextStopsSGW = fetchNextStops(scheduleTimesSGW);
        var nextStopsLoyola = fetchNextStops(scheduleTimesLoyola);
        // console.log(nextStopsSGW, nextStopsLoyola);
        return ({
            sgwStops: nextStopsSGW,
            LoyolaStops: nextStopsLoyola
        });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            getCurrentTime();
        }, 1000);
        if (currentTime && currentDay && campus) {
            setResults(getNextStops());
        }
        return () => clearInterval(intervalId);
    }, [currentTime, currentDay, campus]);


    return (
        <View style={styles.container}>
            <View style={{
                position: "abolute",
                width: "100%",
                height: "32%",
                backgroundColor: "green"
            }}>
                <View style={styles.imageContainer}>
                    <Image style={styles.shuttleImage} source={require("./../../assets/shuttle.jpg")} />
                </View>

                <View style={styles.menuButtonContainer}>
                    <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                        <Feather name="menu" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={{ position: "absolute", flexDirection: "column", top: "75%", right: "50%" }}>
                    <Text style={styles.mainLabel}>Shuttle Bus</Text>
                    <Text style={styles.shortLabel}>Winter 2020 Departures</Text>
                </View>
            </View>

            <View style={{ top: "2%", width: "100%", height: "100%", backgroundColor: "#2A2E43" }}>
                <SegmentedControlTab
                    tabsContainerStyle={styles.tabsContainerStyle}
                    values={["SGW", "Loyola"]}
                    selectedIndex={selectedTab}
                    tabStyle={styles.tabStyle}
                    borderRadius={0}
                    tabTextStyle={styles.tabTextStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTabTextStyle={styles.activeTabTextStyle}
                    onTabPress={tab => {
                        setSelectedTab(tab);
                        if (tab === 0) {
                            setCampus("SGW");
                        }
                        else if (tab === 1) {
                            setCampus("Loyola");
                        }
                    }}
                />
                {selectedTab === 0 && (
                    // <Text style={styles.tabContent}>HEYYY 1</Text>
                    <TimesToDisplay campus="SGW" data={results} />
                )}
                {selectedTab === 1 && (
                    // <Text style={styles.tabContent}>HEYY 2</Text>
                    <TimesToDisplay campus="Loyola" data={results} />
                )}
            </View>
        </View >
    );
}


ShuttleBus.propTypes = {
    navigation: PropTypes.object,
    openDrawer: PropTypes.func,
};

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // justifyContent: "space-between",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#2A2E43" // go back to this when done
        // backgroundColor: "red"
    },
    mainLabel: {
        // position: "absolute",
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        // top: "25%",
        // right: "55%"
    },
    shortLabel: {
        // position: "absolute",
        color: "#FFFFFF",
        opacity: 0.7,
        fontSize: 15,
        fontFamily: "encodeSansExpanded",
        // top: "29%",
        // right: "52%"
    },
    icon: {
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 35
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
    imageContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: 0.7
    },
    shuttleImage: {
        width: "100%",
        height: "100%",
        top: "0%",
        position: "relative"
    },
    controlTabContainer: {
        top: "72%",
        alignContent: "space-between",
        position: "absolute" // not sure about adding this
    },
    tabsContainerStyle: {
        // bottom: "100%",
        // top: "-130%",
        backgroundColor: "#2A2E43",
    },
    tabStyle: {
        backgroundColor: "#2A2E43",
        borderWidth: 0,
        borderColor: "white",
        borderBottomColor: "#FFFFFF",
        paddingHorizontal: "15%"
    },
    tabTextStyle: {
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    activeTabStyle: {
        backgroundColor: "#2A2E43",
        borderBottomColor: "#3ACCE1"
    },
    activeTabTextStyle: {
        color: "#3ACCE1",
        backgroundColor: "#2A2E43",
        fontWeight: "bold"
    },
    test: {
        backgroundColor: "yellow",
        bottom: "100%",
        top: "-130%",
    },
    tabContainer: {
        // flex: 1,
        position: "absolute",
        top: "0.05%",
        // bottom: "1%",
        backgroundColor: "green",
        width: "200%",
        height: "1500%",
        alignSelf: "center",
        paddingHorizontal: "5%",
    },
    tabContent: {
        color: "#fff",
        fontSize: 18,
        margin: 24,
        // bottom: "100%",
        width: "100%",
    },
    mapPin: {
        color: "#FFFFFF",
        position: "absolute",
        // marginLeft: "5%",
        // marginRight: "5%"

    },
    itemContainer: {
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "70%",
        width: "100%",
    },
    iconContainer: {
        height: "100%",
        width: ICON_SIZE * 2,
        backgroundColor: "#353A50",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    itemTextContainer: {
        height: "100%",
        width: "100%",
        // justifyContent: "center",
        alignSelf: "flex-end",
    },
    buttonContainer: {
        top: "40%",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "100%",
        width: "90%",
        alignItems: "center",
    },
    separator: {
        height: "100%",
        width: "4%",
        justifyContent: "center",
    },
    mapPinLabel: {
        color: "#FFFFFF",
        fontSize: 13,
        fontFamily: "encodeSansExpanded",
        position: "absolute",
    },
    smallLabel: {
        color: "#FFFFFF",
        fontSize: 10,
        fontFamily: "encodeSansExpanded",
        bottom: "10%"
        // position: "absolute",
    },
    buttonTextContainer: {
        height: "100%",
        width: "80%",
        justifyContent: "center",
        alignSelf: "flex-end",
    },
    flatview: {
        top: "200%",
        // justifyContent: "center", //original
        justifyContent: "space-between",
        paddingTop: 30,
        borderRadius: 2,
        backgroundColor: "orange"
    },
    name: {
        fontFamily: "Verdana",
        fontSize: 10,
        color: "white"
    },
    email: {
        color: "green"
    },
    phone: {
        position: "absolute",
        color: "#FFFFFF",
        alignSelf: "center"
    },
    phoneLabel: {
        position: "absolute",
        color: "#FFFFFF",
        fontSize: 13,
        fontFamily: "encodeSansExpanded"
    },
    buttonTextContainer: {
        height: "100%",
        width: "80%",
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    separator: {
        height: "100%",
        width: "4%",
        justifyContent: "center",
    },

});

export default ShuttleBus;
