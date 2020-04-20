import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { Icon, Button } from "native-base";
import StarRating from "react-native-star-rating";
import { sideMenuStyle } from "../../assets/styling/sideMenuStyling";

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

function NearbyInterestDetails (props) {
    /**
     * navigation that serves to go back to previous screen
     * @param  {} =>{props.navigation.goBack(
     */

    const goBack = () => {
        props.navigation.goBack();
    };

    const item = props.navigation.getParam("item", null);
    const name = props.navigation.getParam("name", null);
    const photoref = item ? item.img : null;
    const rating = item ? item.rating : null;
    const hours = item ? item.open_hours : null;
    const address = item ? item.address : null;
    const phone = item ? item.phone : null;
    const web = item ? item.web : null;
    const latitude = item ? item.latitude : null;
    const longitude = item ? item.longitude : null;
    const reviews = item ? item.reviews : null;

    /**
     * This navigation function allows the navigation and the sending of props to DoubleSearch component
     * @param  {} =>{props.navigation.navigate("DoubleSearch"
     * @param  {NearbyInterestDetailsScreen} {NearbyInterestDetailsScreen
     * @param  {name} name_POI
     * @param  {latitude} latitude_POI
     * @param  {longitude} longitude_POI
     * @param  {} }
     */
    const goToDoubleSearch = () => {

        props.navigation.navigate("DoubleSearch", {
            name_POI: name,
            latitude_POI: latitude,
            longitude_POI: longitude,
        });
    };

    const opening = (hours === true ? "Open Now" : "Closed Now");

    return (
        <View style={styles.container}>



            <SafeAreaView style={styles.buttonContainer}>

                <View style={styles.imageContainer}>
                    <Image style={styles.placeImage} source={{ uri: photoref }} />
                </View>

                <View style={styles.backArrowContainer}>
                    <Button transparent style={styles.backArrow} onPress={goBack}>
                        <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
                    </Button>
                </View>

                {name.length > 19 &&
                    <Text style={styles.mainLabel}>{item ? name.substring(0, 19) + "..." : "N/A"}</Text>
                }
                {name.length <= 19 &&
                    <Text style={styles.mainLabel}>{name}</Text>
                }

                <Button transparent style={styles.ratingContainer}>
                    <View style={styles.ratingNumberContainer}>
                        <Text style={styles.reviewLabel}>{rating ? rating : "N/A"}</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.buttonTextContainer}>
                        <View style={styles.ratingStarsContainer}>
                            <StarRating disabled={false} maxStars={5} rating={rating} fullStarColor={"#fcba03"} starSize={20} />
                        </View>
                    </View>
                </Button>

                <Button transparent style={styles.reviewContainer}>
                    <View style={styles.iconContainer}>
                        <Icon type="Feather" name="users" style={styles.iconBtn}></Icon>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.btnLabel}>{reviews ? reviews + " Reviews" : "N/A"}</Text>
                    </View>
                </Button>


                <Button transparent style={styles.hourButton}>
                    <View style={styles.iconContainer}>
                        <Icon type="Feather" name="clock" style={styles.iconBtn}></Icon>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.btnLabel}>{opening ? opening : "N/A"}</Text>
                    </View>
                </Button>

                <Button transparent style={styles.mapButton}>
                    <View style={styles.iconContainer}>
                        <Icon type="Feather" name="map-pin" style={styles.iconBtn}></Icon>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.btnLabel}>{address ? address : "N/A"}</Text>
                    </View>
                </Button>

                <Button transparent style={styles.phoneButton}>
                    <View style={styles.iconContainer}>
                        <Icon type="Feather" name="phone" style={styles.iconBtn}></Icon>
                    </View>
                    <SafeAreaView style={styles.separator}></SafeAreaView>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.btnLabel}>{phone ? phone : "Coming Soon"}</Text>
                    </View>
                </Button>

                <Button transparent style={styles.webButton}>
                    <View style={styles.iconContainer}>
                        <Icon type="Feather" name="globe" style={styles.iconBtn}></Icon>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.btnLabel}>{web ? web : "Coming Soon"}</Text>
                    </View>
                </Button>

                <Button transparent style={styles.routeButton} onPress={goToDoubleSearch}>
                    <Text style={styles.viewRouteText}>Get Directions</Text>
                </Button>

            </SafeAreaView>

        </View >
    );
}
const nearbyInterestDetailsStyle = {
    routeButton: {
        width: "90%",
        height: "8%",
        fontSize: 25,
        bottom: "8%",
        justifyContent: "center",
        backgroundColor: "#3ACCE1",
        borderRadius: 10,
    },
    viewRouteText: {
        color: "white",
        fontSize: 14,
    },
    backArrow: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        left: "10%"
    },
    backArrowContainer: {
        width: "100%",
        height: "6%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        bottom: "33%"
    },
    imageContainer: {
        width: "100%",
        height: "32%",
        position: "absolute",
        opacity: 0.3,
        backgroundColor: "#000",
        bottom: "78%"
    },
    placeImage: {
        width: "100%",
        height: "100%",
        position: "relative"
    },
    mainLabel: {
        color: "#FFFFFF",
        width: "90%",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        bottom: "28%",
        textAlign: "left"
    },
    totalReviewLabel: {
        color: "#FFFFFF",
        right: "30%",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        bottom: "33%"
    },
    reviewLabel: {
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "encodeSansExpanded",
        alignSelf: "center",
        left: "20%",
        bottom: "2%"
    },
    subLabel: {
        top: "24%",
        left: "5%",
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded"
    },
    buttonContainer: {
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "100%",
        width: "100%",
        alignItems: "center",
    },
    buttonTextContainer: {
        height: "100%",
        width: "80%",
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    reviewContainer: {
        bottom: "49%",
        height: "8%",
        width: "90%"
    },
    hourButton: {
        bottom: "47%",
        height: "8%",
        width: "90%"
    },
    mapButton: {
        bottom: "45%",
        height: "8%",
        width: "90%"
    },
    iconBtn: {
        color: "#FFFFFF",
        position: "absolute",
        alignSelf: "center"
    },
    phoneButton: {
        bottom: "43%",
        height: "8%",
        width: "90%",
    },
    btnLabel: {
        position: "absolute",
        color: "#FFFFFF",
        fontSize: 13,
        fontFamily: "encodeSansExpanded"
    },
    webButton: {
        bottom: "41%",
        height: "8%",
        width: "90%"
    },
    iconContainer: {
        height: "100%",
        width: "16%",
        backgroundColor: "#353A50",
        borderRadius: 10,
        justifyContent: "center",
    },
    ratingNumberContainer: {
        height: "100%",
        width: "16%",
        justifyContent: "center",
    },
    separator: {
        height: "100%",
        width: "4%",
        justifyContent: "center",
    },
    ratingContainer: {
        bottom: "50%",
        height: "8%",
        width: "100%"
    },
    ratingStarsContainer: {
        width: "60%",
        height: "40%",
    },
};
export const styles = StyleSheet.create({ ...sideMenuStyle, ...nearbyInterestDetailsStyle });

export default NearbyInterestDetails;
