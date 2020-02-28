import { buildingData } from '../constants/buildingData';
import { sgwRooms } from '../constants/sgwRooms';

/**
 * The following HOC is used to extract data from buildingData.js
 * following a strategy pattern.
 * 
 * Props is consisted of the following parameters
 * @param accesibility
 * @param buildingName
 * @param classRooms
 * @param departments
 * @param number
 * @param passBuildingName boolean if we receive specific building
 * @param services
 */

export function MapData(props, rooms, buildingInfo) {
    let idCount = 1;

    var buildingName = [];
    var departmentsArray = [];
    var serviceArray = [];
    var accessibilityArray = [];
    var classRooms = [];
    var phoneNumber = [];
    var items = [];

    //Get building name
    if (props.buildingName == true) {
        for (var key in buildingInfo) {
            var value = buildingInfo[key].name;
            buildingName.push({id: idCount, name: value})
            idCount++;
        }
    }   

    //Get departments
    if (props.passBuildingName != "" && props.departments == true) {
        var value = buildingInfo[props.passBuildingName].departments;
        if (value != null) {
            value.forEach(element => {
                departmentsArray.push({id: idCount, name: element})
                idCount++;
            });
        }
    } 
    
    if (props.passBuildingName == "" && props.departments == true) {
        for (var key in buildingInfo) {
            var value = buildingInfo[key].departments;
            if (value != null) {
                value.forEach(element => {
                    departmentsArray.push({id: idCount, name: element})
                    idCount++;
                });
            }
        }
    }

    //Get services
    if (props.passBuildingName != "" && props.services == true) {
        var value = buildingInfo[key].services;
        if (value != null) {
            value.forEach(element => {
                serviceArray.push({id: idCount, name: element})
                idCount++;
            });
        } 
    }


    if (props.passBuildingName == "" && props.services == true) {
        for (var key in buildingInfo) {
            var value = buildingInfo[key].services;
            if (value != null) {
                value.forEach(element => {
                    serviceArray.push({id: idCount, name: element})
                    idCount++;
                });
            } 
        }
    }
    

    //Get phone number
    if (props.phoneNumber) {
        for (var key in buildingInfo) {
            var value = buildingInfo[key].phone;
            if (value) {
                phoneNumber.push({id: idCount, name: value})
                idCount++;
            }
        }
    }

    //Get accesibility
    if (props.passBuildingName != "" && props.accesibility == true) {
        var hasCredit = buildingInfo[props.passBuildingName].hasCredit;
        if (hasCredit && hasCredit == true) {
            accessibilityArray.push({id: idCount, name: hasCredit})
            idCount++;
        }

        //Bicycle
        var hasBicycle = buildingInfo[props.passBuildingName].hasBicycle;
        if (hasBicycle && hasBicycle == true) {
            accessibilityArray.push({id: idCount, name: hasBicycle})
            idCount++;
        }

        //Handicap
        var hasHandicap = buildingInfo[props.passBuildingName].hasHandicap;
        if (hasHandicap && hasHandicap == true) {
            accessibilityArray.push({id: idCount, name: hasHandicap})
            idCount++;
        }

        //Information center
        var hasInfocenter = buildingInfo[props.passBuildingName].hasInfocenter;
        if (hasInfocenter && hasInfocenter == true) {
            accessibilityArray.push({id: idCount, name: hasInfocenter})
            idCount++;
        }

        //Parking
        var hasParking = buildingInfo[props.passBuildingName].hasParking;
        if (hasParking && hasParking == true) {
            accessibilityArray.push({id: idCount, name: hasParking})
            idCount++;
        }
    }

    //Get classrooms
    if (props.classRooms) {
        for (var key in rooms) {
            var value = rooms[key].room;
            value.forEach(element => {
                classRooms.push({id: idCount, name: element})
                idCount++;
            });
        }
    }

    if(buildingName.length > 0) {
        items.push(buildingName);
    }

    if(departmentsArray.length > 0) {
        items.push(departmentsArray);
    }

    if(serviceArray.length > 0) {
        items.push(serviceArray);
    }

    if(accessibilityArray.length > 0) {
        items.push(accessibilityArray);
    }

    if(classRooms.length > 0) {
        items.push(classRooms);
    }

    if(phoneNumber.length > 0) {
        items.push(phoneNumber);
    }
    return items.flat();
}