import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { ListItem } from "react-native-elements";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { ShuttleBusTimes } from "../../constants/shuttleBustimes";

/**
 * This a function is a mini component that returns the layout and the data of each active tab
 * @param {*} props 
 */
function TimesToDisplay (props) {
    let DATA = [];
    let campus = props.campus;
    if (props.campus == "SGW") {
        DATA = props.data.sgwStops;
    }
    else if (props.campus == "Loyola") {
        DATA = props.data.LoyolaStops;
    }
    return (
        <SafeAreaView style={{ top: "2%", width: "100%" }}>
            <FlatList
                data={DATA}
                showsVerticalScrollIndicator={true}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ListItem
                        title={`Shuttle Bus to ${campus}`}
                        titleStyle={{
                            color: "white", marginLeft: "5%",
                        }}
                        subtitle={`${item.hour}:${item.minutes}`}
                        subtitleStyle={{
                            color: "white", marginLeft: "5%", fontFamily: "encodeSansExpanded",
                        }}
                        bottomDivider
                        containerStyle={{ backgroundColor: "#2A2E43", borderRadius: 5, marginHorizontal: "2%" }}
                        leftIcon={<MaterialCommunityIcons name="bus-clock" size={ICON_SIZE} style={styles.leftIcon} />}
                        rightTitle={`${item.timeDifference.Hours}:${item.timeDifference.Minutes}`}
                        rightTitleStyle={{
                            color: "grey", fontFamily: "encodeSansExpanded", fontWeight: "bold"
                        }}
                    />
                )
                }
            />
        </SafeAreaView>
    );
}

TimesToDisplay.propTypes = {
    props: PropTypes.object,
    campus: PropTypes.any,
    data: PropTypes.any
};

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
                //set current day
                setCurrentDay(item);
            }
        });
    };

    /**
     * Function that calculates the time difference between the current time and the times of the next
     * shuttle bus stops
     * @param {*} nextStop 
     */
    const calculateTimeDifference = (nextStop) => {
        var diffHours = nextStop.hour - currentTime.Hour;
        var diffMinutes = nextStop.minutes - currentTime.Minutes;
        if (Math.abs(diffMinutes) < 10) {
            return ({
                Hours: diffHours,
                Minutes: "0" + Math.abs(diffMinutes)
            });
        }
        else {
            return ({
                Hours: diffHours,
                Minutes: Math.abs(diffMinutes)
            });
        }

    };

    const fetchNextStops = (list) => {
        var nextStops = [];
        var results = [];
        let index = 0;
        for (var key in list) {
            if (list[key].hour >= currentTime.Hour && list[key].minutes >= currentTime.Minutes) {
                nextStops = list.slice(index, list.length - 1);
                break;
            }
            index++;
        }
        if (nextStops.length > 0) {
            results = nextStops.map((element, index) => {
                return ({
                    id: index.toString(),
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
                    <TimesToDisplay campus="SGW" data={results} />
                )}
                {selectedTab === 1 && (
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
        height: "100%",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#2A2E43" // go back to this when done
    },
    mainLabel: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
    },
    shortLabel: {
        color: "#FFFFFF",
        opacity: 0.7,
        fontSize: 15,
        fontFamily: "encodeSansExpanded",
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
    tabsContainerStyle: {
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
    leftIcon: {
        color: "#FFFFFF",
        position: "absolute",
    },
});

export default ShuttleBus;
