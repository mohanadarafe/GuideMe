import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { ListItem } from "react-native-elements";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { ShuttleBusTimes } from "../../constants/shuttleBustimes";
import { ShuttleBusSVG } from "../../assets/ShuttleBusSVG";

/**
 * This a function is a mini component that returns the layout and the data of each active tab
 * @param {*} props 
 */
function TimesToDisplay (props) {
    let DATA = [];
    let campus = props.campus;
    let isUnavailable = props.isUnavailable;
    // const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const [currentDay, setCurrentDay] = React.useState("");

    // /**
    // * This function sets the current day 
    // */
    // const getDay = () => {
    //     let currentDayKey = new Date().getDay();
    //     let days = [];
    //     days = week;
    //     days.forEach((item, index) => {
    //         if (index == currentDayKey) {
    //             //set current day	                
    //             setCurrentDay(item);
    //         }
    //     });
    // };

    // useEffect(() => {
    //     getDay();
    // });

    if (isUnavailable && (props.campus == "SGW" || props.campus == "Loyola")) {
        return (
            <View>
                <DisplayDisclaimer />
            </View>
        );
    }
    else if (props.campus == "SGW") {
        DATA = props.data.sgwStops;
    }
    else if (props.campus == "Loyola") {
        DATA = props.data.LoyolaStops;
    }

    return (
        <SafeAreaView style={styles.SafeAreaViewStyle}>
            {/* <View style={styles.currentDayWrapper}>
                <Text style={styles.currentDayText}>{currentDay}</Text>
            </View> */}
            <FlatList
                data={DATA}
                showsVerticalScrollIndicator={true}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ListItem
                        title={`Shuttle Bus to ${campus}`}
                        titleStyle={styles.titleStyle}
                        subtitle={`${item.hour}:${item.minutes}`}
                        subtitleStyle={styles.subtitleStyle}
                        bottomDivider
                        containerStyle={styles.containerStyle}
                        leftIcon={<MaterialCommunityIcons name="bus-clock" size={ICON_SIZE} style={styles.leftIcon} />}
                        rightTitle={`${item.timeDifference.Hours}${item.timeDifference.Minutes}`}
                        rightTitleStyle={styles.rightTitleStyle}
                    />
                )}
            />
        </SafeAreaView>
    );
}

TimesToDisplay.propTypes = {
    props: PropTypes.object,
    campus: PropTypes.any,
    data: PropTypes.any,
    isUnavailable: PropTypes.any
};

/**
 * This mini component is called when the user views the shuttle bus schedule at a time where it is 
 * unavailable such as weekends and weekdays after 11 pm
 */
function DisplayDisclaimer () {
    return (
        <SafeAreaView style={styles.SafeAreaViewDisclaimerContainer}>
            <View style={styles.disclaimerTextContainer}>
                <Text style={styles.disclaimerTitle}>Disclaimer:</Text>
                <Text style={styles.disclaimerText}>Unfortunately, there is no shuttle bus during weekdays after 11 pm and on weekends as well. Please check back another time! </Text>
            </View>

            <View style={styles.svgContainer}>
                <ShuttleBusSVG />
            </View>
        </SafeAreaView>
    );
}

const ICON_SIZE = 35;

/** Prop passed
 * @param  {} navigation props.navigation is the name of the object from Navigator library
 */
function ShuttleBus (props) {
    /**
     * The SonarQube error 'campus' is declared but its value is never read' should be 
     * ignored because campus is called in another function :)
     */
    const [campus, setCampus] = React.useState("SGW");
    const [selectedTab, setSelectedTab] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(null);
    const [results, setResults] = React.useState([]);
    const [isUnavailable, setIsUnavailable] = React.useState(true);


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
    };

    /**
     * Function that calculates the time difference between the current time and the times of the next
     * shuttle bus stops
     * @param {*} nextStop 
     */
    const calculateTimeDifference = (nextStop) => {
        var diffHours = nextStop.hour - currentTime.Hour;
        var diffMinutes = nextStop.minutes - currentTime.Minutes;
        if (diffHours >= 1 && Math.abs(diffMinutes) < 10) {
            return ({
                Hours: diffHours + "h",
                Minutes: "0" + Math.abs(diffMinutes) + "min"
            });
        }
        else if (diffHours < 1) {
            return ({
                Hours: "",
                Minutes: Math.abs(diffMinutes) + " min"
            });
        }
        else if (Math.abs(diffMinutes) < 1) {
            return ({
                Hours: diffHours + " h",
                Minutes: ""
            });
        }
        else {
            return ({
                Hours: diffHours + "h",
                Minutes: Math.abs(diffMinutes) + "min"
            });
        }
    };

    /**
     * Function that returns an object containing the id, timeDifference as well as the time of the next buses on schedule
     * @param {*} list 
     */
    const fetchNextStops = (list) => {
        var nextStops = [];
        var resultsArray = [];
        let index = 0;
        for (var key in list) {
            if (list[key].hour >= currentTime.Hour && list[key].minutes >= currentTime.Minutes) {
                nextStops = list.slice(index, list.length - 1);
                break;
            }
            index++;
        }
        if (nextStops.length > 0) {
            resultsArray = nextStops.map((element, key) => {
                return ({
                    id: key.toString(),
                    timeDifference: calculateTimeDifference(element),
                    hour: element.hour,
                    minutes: element.minutes
                });
            });
        }
        return resultsArray;
    };

    /**
     * Function that sorts through the shuttle bus schedule and compares the time/day to the current time/day
     */
    const getNextStops = () => {
        var scheduleTimesSGW = [];
        var scheduleTimesLoyola = [];
        const sgwCampus = "SGW";
        const loyolaCampus = "Loyola";
        let currentDayIndex = new Date().getDay();

        if (currentDayIndex > 0 && currentDayIndex < 5) {
            scheduleTimesSGW = getShuttleBusTimes[sgwCampus].MondayToThursday;
            scheduleTimesLoyola = getShuttleBusTimes[loyolaCampus].MondayToThursday;
            setIsUnavailable(false);
        }
        else if (currentDayIndex === 5) {
            scheduleTimesSGW = getShuttleBusTimes[sgwCampus].Friday;
            scheduleTimesLoyola = getShuttleBusTimes[loyolaCampus].Friday;
            setIsUnavailable(false);
        }
        else {
            setIsUnavailable(true);
        }
        var nextStopsSGW = fetchNextStops(scheduleTimesSGW);
        var nextStopsLoyola = fetchNextStops(scheduleTimesLoyola);
        if (nextStopsSGW === undefined || nextStopsLoyola === undefined) {
            setIsUnavailable(true);
        }
        return ({
            sgwStops: nextStopsSGW,
            LoyolaStops: nextStopsLoyola
        });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            getCurrentTime();
        }, 100);
        if (currentTime) {
            setResults(getNextStops());
        }
        return () => clearInterval(intervalId);
    }, [currentTime]);

    return (
        <View style={styles.container}>
            <View style={styles.topViewContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.shuttleImage} source={require("./../../assets/shuttle.jpg")} />
                </View>

                <View style={styles.menuButtonContainer}>
                    <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                        <Feather name="menu" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleViewContainer}>
                    <Text style={styles.mainLabel}>Shuttle Bus</Text>
                    <Text style={styles.shortLabel}>Winter 2020 Departures</Text>
                </View>
            </View>

            <View style={styles.tabContainerView}>
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
                    <TimesToDisplay campus="SGW" data={results} isUnavailable={isUnavailable} />
                )}
                {selectedTab === 1 && (
                    <TimesToDisplay campus="Loyola" data={results} isUnavailable={isUnavailable} />
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
        backgroundColor: "#2A2E43"
    },
    mainLabel: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
    },
    shortLabel: {
        color: "#FFFFFF",
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
        height: "15%",
        top: "17%"
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
        marginHorizontal: "5%"
    },
    titleStyle: {
        color: "white",
        marginLeft: "15%",
    },
    subtitleStyle: {
        color: "white",
        marginLeft: "15%",
        fontFamily: "encodeSansExpanded",
    },
    containerStyle: {
        backgroundColor: "#2A2E43",
        borderRadius: 5,
        marginHorizontal: "2%"
    },
    rightTitleStyle: {
        color: "grey",
        fontFamily: "encodeSansExpanded",
        fontWeight: "bold",
        fontSize: 20
    },
    SafeAreaViewStyle: {
        top: "3%",
        width: "100%"
    },
    currentDayWrapper: {
        marginHorizontal: "5%",
        marginBottom: "4%"
    },
    currentDayText: {
        fontSize: 19,
        color: "#3ACCE1",
        fontWeight: "bold"
    },
    SafeAreaViewDisclaimerContainer: {
        top: "10%",
        width: "100%",
        alignItems: "center",
        alignContent: "center",
        paddingHorizontal: "5%"
    },
    disclaimerTextContainer: {
        alignItems: "center",
        alignContent: "center",
        paddingVertical: "5%",
    },
    disclaimerTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: "2%"
    },
    disclaimerText: {
        color: "white",
        fontSize: 20,
        textAlign: "center"
    },
    topViewContainer: {
        width: "100%",
        height: "32%",
    },
    titleViewContainer: {
        position: "absolute",
        flexDirection: "column",
        top: "75%",
        right: "50%"
    },
    tabContainerView: {
        top: "2%",
        width: "100%",
        height: "100%",
        backgroundColor: "#2A2E43"
    },
    svgContainer: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: "85%",
    },
});

export default ShuttleBus;