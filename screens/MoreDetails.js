import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, SectionList } from 'react-native'
import { Icon, Button, Right, Separator } from 'native-base';
import { buildingData } from '../constants/buildingData';


id = 1;

renderSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: '#353A50',
            }}
        />
    );
};

function MoreDetails(props) {

    const getBuildingInfo = buildingData();

    var departmentsArray = [];
    var serviceArray = [];
    var accessibilityArray = [];

    var dept = getBuildingInfo[props.name].departments;
    if (dept != null) {
        dept.forEach(element => {
            departmentsArray.push(element)
        });
    }
    else{
        departmentsArray.push("None")
    }

    var services = getBuildingInfo[props.name].services;
    if (services != null) {
        services.forEach(element => {
            serviceArray.push(element)
        });
    }
    else{
        servicesArray.push("None")
    }

    var hasCredit = getBuildingInfo[props.name].hasCredit;
    if (hasCredit != null && hasCredit == true) {
        accessibilityArray.push("Credit Card: Yes");
    }
    else {
        accessibilityArray.push("Credit Card: No");
    }

    var hasBicycle = getBuildingInfo[props.name].hasBicycle;
    if (hasBicycle != null && hasBicycle == true) {
        accessibilityArray.push("Bicycle Parking: Yes");
    }
    else {
        accessibilityArray.push("Bicycle Parking: No");
    }

    var hasHandicap = getBuildingInfo[props.name].hasHandicap;
    if (hasHandicap != null && hasHandicap == true) {
        accessibilityArray.push("Wheelchair Accessibility: Yes");
    }
    else {
        accessibilityArray.push("Wheelchair Accessibilty: No");
    }

    var hasInfocenter = getBuildingInfo[props.name].hasInfocenter;
    if (hasInfocenter != null && hasInfocenter == true) {
        accessibilityArray.push("Info Center: Yes");
    }
    else {
        accessibilityArray.push("Info Center: No");
    }

    var hasParking = getBuildingInfo[props.name].hasParking;
    if (hasParking != null && hasParking == true) {
        accessibilityArray.push("Parking: Yes");
    }
    else {
        accessibilityArray.push("Parking: No");
    }



    return (

        <View style={styles.container}>

            <SafeAreaView style={styles.buttonContainer}>

            <Button transparent style={styles.mapButton}>
                <View style={styles.iconContainer}>
                    <Icon type="Feather" name="map-pin" style={styles.mapPin}></Icon>
                    </View>
                <View style={styles.separator}></View>
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.mapPinLabel}>{getBuildingInfo[props.name].address}</Text>
                </View>
            </Button>
    
            <Button transparent style={styles.phoneButton}>
                <View style={styles.iconContainer}>
                    <Icon type="Feather" name="phone" style={styles.phone}></Icon>
                    </View>
                <SafeAreaView style={styles.separator}></SafeAreaView>
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.phoneLabel}>+1(514)-848-2424</Text>
                </View> 
            </Button>

            <Button style={styles.directionButton}><Text style={{ color: 'white' }}>Get Directions</Text></Button>

        </SafeAreaView>

            <View style={styles.imageContainer}>
                <Image style={styles.buildingImage} source={require('./../assets/Hall_Building.png')} />
            </View>

            <Text style={styles.mainLabel}>{props.name}</Text>
            <Text style={styles.reviewLabel}>19 Reviews</Text>

            <SafeAreaView style={styles.scrollTextContainer}>
                <SectionList
                    sections={[
                        { title: 'Departments ', data: departmentsArray },
                        { title: 'Services', data: serviceArray },
                        { title: 'Accessibility', data: accessibilityArray },
                    ]}
                    renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={renderSeparator}
                />
            </SafeAreaView>

            <Text style={styles.shortLabel}>Description</Text>
        </View>
    );
}

export const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%'
    },

    mainLabel: {
        color: '#FFFFFF',
        left: '5%',
        position: 'absolute',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'encodeSansExpanded',
        top: '16%'
    },

    shortLabel: {
        position: 'absolute',
        left: '5%',
        top: '27%',
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'encodeSansExpanded',
        opacity: 0.3
    },

    reviewLabel: {
        position: 'absolute',
        top: '21%',
        left: '5%',
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'encodeSansExpanded'
    },

    scrollTextContainer: {
        width: '100%',
        height: '32%',
        top: '32%',
        position: 'absolute',
    },

    directionButton: {
        width: '90%',
        height: '8%',
        fontSize: 25,
        bottom: '8%',
        justifyContent: 'center',
        backgroundColor: '#3ACCE1',
        borderRadius: 10,
    },

    imageContainer: {
        width: '100%',
        height: '25%',
        top: '0%',
        position: 'absolute',
        opacity: 0.3
    },

    buildingImage: {
        width: '100%',
        height: '100%',
        top: '0%',
        position: 'relative'
    },

    mapButton: {
        bottom:'19%',
        height: '8%',
        width: "100%"

    },

    mapPin: {
        color: '#FFFFFF',
        position: 'absolute',
    },

    mapPinLabel: {
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'encodeSansExpanded',
        position: 'absolute',
    },

    phoneButton: {
        bottom: '17%',
        height: '8%',
        width: '100%',
    },

    phone: {
        position: 'absolute',
        color: '#FFFFFF',
        alignSelf: 'center'
    },

    phoneLabel: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'encodeSansExpanded'
    },

    iconContainer: {
        height: '100%',
        width: '16%',
        backgroundColor: '#353A50',
        borderRadius: 10,
        justifyContent: 'center',
        
    },

    buttonTextContainer: {
        height: '100%',
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },

    separator: {
        height: '100%',
        width: '4%',
        justifyContent: 'center',
    },

    departmentTitle: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'encodeSansExpanded'
    },

    departmentText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'encodeSansExpanded',
    },

    servicesTitle: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'encodeSansExpanded'
    },

    servicesText: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'encodeSansExpanded'
    },

    accessibilitiesTitle: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'encodeSansExpanded'
    },

    accessibilitiesText: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'encodeSansExpanded'
    },

    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 22,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        color: "#ffffff",
        backgroundColor: '#353A50',
        fontFamily: 'encodeSansExpanded'
    },

    listItem: {
        padding: 10,
        fontSize: 12,
        height: 44,
        paddingLeft: 22,
        fontFamily: 'encodeSansExpanded',
        color: "#D3D3D3",
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100%',
        width: '90%',
        alignItems: 'center',
    },

});

export { MoreDetails }