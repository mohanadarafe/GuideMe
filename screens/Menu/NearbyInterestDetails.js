import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, AsyncStorage} from "react-native";
import { Icon, Button } from "native-base";
import StarRating from "react-native-star-rating";


/**Prop passed
 * @param  {} navigation props.navigation is the name of the object from Navigator library
 */

function NearbyInterestDetails(props) {

    const goBack = () => {
        props.navigation.goBack();
    }

    const photoref = props.navigation.getParam("photoref", null);
    const name = props.navigation.getParam("name", null);
    const rating = props.navigation.getParam("rating", null);
    const hours = props.navigation.getParam("hours", null);
    const address = props.navigation.getParam("address", null);
    const phone = props.navigation.getParam("phone", null);
    const web = props.navigation.getParam("web", null);
    const latitude = props.navigation.getParam("latitude", null);
    const longitude = props.navigation.getParam("longitude", null);

    const NearbyInterestDetailsScreen = true;
    
    const goToDoubleSearch = () => {

        AsyncStorage.setItem("namePOI", name)

        props.navigation.navigate("DoubleSearch", { 
            NearbyInterestDetailsScreen: NearbyInterestDetailsScreen,
            name_POI: name,
            latitude_POI : latitude,
            longitude_POI : longitude,
         });

        
    }

    const opening =  (hours === true ? "Open Now" : "Close Now");


    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image style={styles.placeImage} source={{ uri: photoref }} />
            </View>

            <SafeAreaView style={styles.buttonContainer}>

                <View style={styles.backArrowContainer}>
                    <Button transparent style={styles.backArrow} onPress={goBack}>
                        <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
                    </Button>
                </View>

                <Text style={styles.mainLabel}>{name ? name : "N/A"}</Text>

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
                        <Text style={styles.btnLabel}>{phone ? phone : "N/A"}</Text>
                    </View>
                </Button>

                <Button transparent style={styles.webButton}>
                    <View style={styles.iconContainer}>
                        <Icon type="Feather" name="globe" style={styles.iconBtn}></Icon>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.btnLabel}>{web ? web : "N/A"}</Text>
                    </View>
                </Button>

                <Button transparent style={styles.routeButton} onPress={goToDoubleSearch}>
                    <Text style={styles.viewRouteText}>View Route</Text>
                </Button>

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
        backgroundColor: "#2A2E43"
    },
    mainLabel: {
        color: "#FFF",
        fontSize: 23,
        fontFamily: "encodeSansExpanded",
        paddingBottom: 10,
        top: "14%",
        bottom: "2%",
        fontWeight: "bold",
        justifyContent: "center",
        position: "absolute"
    },
    icon: {
        position: "absolute",
        color: "#FFFFFF",
        alignSelf: "center",
        fontSize: 35
    },
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
        bottom: "44%"
    },

    imageContainer: {
        width: "100%",
        height: "32%",
        top: "0%",
        position: "absolute",
        opacity: 0.3,
        backgroundColor: "#000"
    },

    placeImage: {
        width: "100%",
        height: "100%",
        top: "0%",
        position: "relative"
    },
    mainLabel: {
        color: "#FFFFFF",
        left: "5%",
        position: "absolute",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "21%"
    },
    subLabel: {
        position: "absolute",
        top: "24%",
        left: "5%",
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded"
    },
    reviewLabel: {
        position: "absolute",
        top: "25%",
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "encodeSansExpanded",
        alignSelf: "center"

    },
    buttonContainer: {
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "100%",
        width: "90%",
        alignItems: "center",
    },
    buttonTextContainer: {
        height: "100%",
        width: "80%",
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    hourButton: {
        bottom: "61%",
        height: "8%",
        width: "100%"
    },
    mapButton: {
        bottom: "59%",
        height: "8%",
        width: "100%"
    },
    iconBtn: {
        color: "#FFFFFF",
        position: "absolute",
        alignSelf: "center"
    },
    phoneButton: {
        bottom: "57%",
        height: "8%",
        width: "100%",
    },
    btnLabel: {
        position: "absolute",
        color: "#FFFFFF",
        fontSize: 13,
        fontFamily: "encodeSansExpanded"
    },
    webButton: {
        bottom: "55%",
        height: "8%",
        width: "100%"
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
        bottom: "66%",
        height: "8%",
        width: "100%"
    },
    ratingStarsContainer: {
        width: "60%",
        height: "40%",
    }



});

export default NearbyInterestDetails;
