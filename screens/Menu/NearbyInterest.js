import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, AsyncStorage } from "react-native";
import { Icon, Button } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";
import PropTypes from "prop-types";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Menu, { MenuItem, MenuDivider, Position } from "react-native-enhanced-popup-menu";

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

    const [fromScreen, setFromScreen] = React.useState();
    const [jsonElement, setJsonElement] = React.useState(null);
    const [selectedTab, setSelectedTab] = React.useState(0);
    // const [key, setKey] = React.useState(null);
    const [detailObject, setDetailObject] = React.useState([]);
    const [radius, setRadius] = React.useState(100);
    const [campus, setCampus] = React.useState("SGW");
    const [phone, setPhone] = React.useState([]);
    const [web, setWeb] = React.useState([]);
    /**
     * The asyncstorage getter that will let us grab the value coming from the bottomMenu component
     * @param  {} =>{letname=awaitAsyncStorage.getItem("sideMenu)"
     * @param  {} ;setFromScreen(name)
     */
    const getFromScreen = async () => {
        let name = await AsyncStorage.getItem("sideMenu");
        setFromScreen(name);
    };

    /**
     * The method will slide the side menu from the right side of the screen
     * @param  {} =>{props.navigation.openDrawer(
     */
    const goToMenu = () => {
        props.navigation.openDrawer();
    };
    /**
     * The method will let us navigate to the NearbyInterestDetails screen
     * @param  {} =>{props.navigation.navigate("NearbyInterestDetails)"
     */
    const goToNearbyInterestDetails = (item) => {
        props.navigation.navigate("NearbyInterestDetails", {
            photoref: item.img,
            name: item.key,
            rating: item.rating,
            hours: item.open_hours,
            address: item.address,
            phone: item.phone,
            web: item.web,
            latitude: item.latitude,
            longitude: item.longitude,
        });
    };
    /**
     * The method will let us navigate to the Map screen 
     * @param  {} =>{AsyncStorage.setItem("sideMenu)"
     * @param  {} ""
     * @param  {} ;props.navigation.navigate("Map)"
     */
    const goBack = () => {
        AsyncStorage.setItem("sideMenu", "");
        props.navigation.navigate("Map");
    };

    // Static data for now 
    const data = [
        { key: "McKibbins", rating: 3.3, open_hours: true, address: "1446 Crescent", phone: "+1(514) 666-9999", web: "mckibbins.com", latitude: 45.4975951, longitude: -73.57762079999999 },
        { key: "Tim Hortons", rating: 3.0, open_hours: false, address: "1500 Crescent", phone: "+1(514) 666-8888", web: "timhortons.com", latitude: 45.4975951, longitude: -73.57762079999999, },
        { key: "Arabica", rating: 3.2, open_hours: false, address: "1900 Crescent", phone: "+1(514) 666-7777", web: "arabica.com", latitude: 45.4975951, longitude: -73.57762079999999, },
        { key: "Kaeks", rating: 2.9, open_hours: true, address: "1594 Crescent", phone: "+1(514) 666-4444", web: "kaeks.com", latitude: 45.4975951, longitude: -73.57762079999999, }];

    // number of coloumns for the flatList 
    const numColumns = 2;

    // const getKey = async () => {
    //     let key = await AsyncStorage.getItem("apiKeyId");
    //     setKey(key);
    // };

    var arr = [];
    var jsonArr = [];

    var phoneArr = [];
    var webArr = [];


    const fetchData = async () => {

        try {
            let keyId = await AsyncStorage.getItem("apiKeyId");
            let SGW_COORDS = "45.496996, -73.578481";
            let LOY_COORDS = "45.458371,-73.638239";
            var coordinates = (campus === "SGW" ? SGW_COORDS : LOY_COORDS)
            var RADIUS = radius;
            console.log(radius);
            let TYPE = `restaurant`;
            let MAX_WIDTH = `500`;
            let SENSOR = `false`;
            let resp = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates}&radius=${radius}&type=restaurant&key=${keyId}`);
            let jsonResp = await resp.json();
          


            setJsonElement(getFilteredJsonElement(jsonResp, keyId, MAX_WIDTH, SENSOR));



        } catch (error) {
            alert("An error occured while trying to retrive the information. Please leave this screen and come back again.");
        }
    }

   


    const getFilteredJsonElement = (jsonResp, keyId, MAX_WIDTH, SENSOR, ) => {


        var filtering = jsonResp.results.map(element => {


            fetchDetailData(element.place_id);


            return {
                key: element.name,
                rating: element.rating,
                open_hours: element.opening_hours.open_now,
                address: element.vicinity,
                latitude: element.geometry.location.lat,
                longitude: element.geometry.location.lng,
                img: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${MAX_WIDTH}&photoreference=${element.photos[0].photo_reference}&sensor=${SENSOR}&key=${keyId}`
            }
        })



        return filtering;
    }


    const fetchDetailData = async (placeId, element_count) => {
        try {
            let keyId = await AsyncStorage.getItem("apiKeyId");
            let resp = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_phone_number,website&key=${keyId}`);
            let jsonResp = await resp.json();
            // phoneArr.push(jsonResp);
            // webArr.push( jsonResp);
            // // console.log(count);
            // console.log(phoneArr[element_count].result.formatted_phone_number);
            // console.log(webArr);

            setPhone(prevState => [...prevState, jsonResp.result.formatted_phone_number]);
            setWeb(prevState => [...prevState, jsonResp.result.website]);


        } catch (error) {
            alert("An error occured while trying to retrive the information. Please leave this screen and come back again.");
        }


    }


        useEffect(() => {

            fetchData();

        }, [campus, radius]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            getFromScreen();
        }, 1);

        return () => clearInterval(intervalId);
    });

    if (jsonElement && phone !== undefined && web !== undefined) {

        var count = 0;
        var newarr = jsonElement.map(element => {
            //    console.log(count++);
            count++;
            return {
                key: element.key,
                rating: element.rating,
                open_hours: element.open_hours,
                address: element.address,
                phone: phone[count - 1],
                web: web[count - 1],
                latitude: element.latitude,
                longitude: element.longitude,
                img: element.img

            }

        })


        // console.log(;

    }


    let textRef = React.createRef();
    let menuRef = null;

    const setMenuRef = ref => {
        menuRef = ref;
    }
    const hideMenu = () => {
        menuRef.hide();
    }
    const showMenu = () => {
        menuRef.show(textRef.current, stickTo = Position.BOTTOM_CENTER);
    }
    const itemSelected = (value) => {
        setRadius(value);
        hideMenu();
    }

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                {fromScreen !== "sideMenu" &&
                    <TouchableOpacity style={styles.backButton} onPress={goBack}>
                        <Icon testID="bottomArrowIcon" name="ios-arrow-down" style={styles.arrowDown} />
                    </TouchableOpacity>
                }
                {fromScreen === "sideMenu" &&
                    <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                        <Feather name="menu" style={styles.icon} />
                    </TouchableOpacity>
                }

            </View>
            <TouchableOpacity style={styles.optionButton} onPress={showMenu} ref={textRef}>
                <Entypo name="popup" style={styles.option} />
            </TouchableOpacity>

            <Menu ref={setMenuRef}>
                <MenuItem onPress={() => { itemSelected(100) }}> 100 miles</MenuItem>

                <MenuItem onPress={() => { itemSelected(250) }}>250 miles</MenuItem>

                <MenuItem onPress={() => { itemSelected(500) }}>500 miles</MenuItem>

                <MenuItem onPress={() => { itemSelected(1500) }}>> 1000 miles</MenuItem>
            </Menu>

            <Text style={styles.mainLabel}>Points of Interest</Text>


            <SegmentedControlTab
                tabsContainerStyle={styles.tabsContainerStyle}
                values={["SGW", "LOY"]}
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
                        setCampus("LOY");
                
                    }
                }}
            ></SegmentedControlTab>


            <View style={styles.flatListContainer}>
                <FlatList
                    onEndReachedThreshold={0}
                    contentContainerStyle={styles.list}
                    data={newarr}
                    numColumns={numColumns}
                    keyExtractor={(item) => {
                        return item.key;
                    }}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => { goToNearbyInterestDetails(item) }}>
                            <View key={index}>
                                <View style={styles.itemContainer}>
                                    <View style={styles.itemImageContainer}>
                                        {/* // FIXME: add a default image when theres no internet connection  */}
                                        <Image style={{ height: "100%", width: "100%" }} source={{ uri: item.img }} />
                                    </View>
                                    <View style={styles.itemTextContainer}>
                                        <Text style={styles.itemText}>{item.key}</Text>
                                        <Text style={styles.itemText}>{item.rating}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>


        </View>
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
    list: {
        flexDirection: "column"
    },
    arrowDown: {
        color: "#ffffff",
        top: "5%",
        fontSize: 54,
    },
    backButton: {
        alignSelf: "center"
    },
    icon: {
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 35,
    },
    menuButton: {
        height: "100%",
        width: "20%",
        flexDirection: "row",
        justifyContent: "center"
    },
    option: {
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 35,
    },
    optionButton: {
        bottom: "5%",
        left: "40%",
    },
    menuButtonContainer: {
        width: "100%",
        height: "6%",
        top: "7%",
    },
    flatListContainer: {
        height: "65%",
        bottom: "5%"
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        minWidth: 185,
        maxWidth: 185,
        height: 200,
        maxHeight: 200,
        backgroundColor: "#353A50",
        borderRadius: 10,
    },
    itemText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontFamily: "encodeSansExpanded",
        marginHorizontal: "10%",
        marginVertical: "3%",
        width: "70%"
    },
    itemTextContainer: {
        width: "100%",
        height: "35%",
        flexDirection: "column",
        justifyContent: "center"
    },
    itemImageContainer: {
        width: "100%",
        height: "65%",
    },
    controlTabContainer: {
        alignContent: "space-between",
        backgroundColor: "red",
        height: "20%",
        width: "100%",
    },
    tabsContainerStyle: {
        bottom: "5%",
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
    tabContent: {
        color: "#fff",
        fontSize: 18,
        margin: 24,
    },
});

export default NearbyInterest;
