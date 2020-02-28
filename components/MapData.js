/**
 * The following HOC is used to extract data from buildingData.js
 * following a strategy pattern.
 * 
 * Props passed
 * @param accesibility | bool: child requires accesibility
 * @param buildingName | bool: child requires building name
 * @param classRooms | bool: child requires class rooms
 * @param departments | bool: child requires departments
 * @param services | bool: child requires services
 * @param flatten | bool: return a flat list
 * @param passBuildingName | bool: child requires specific building
 * 
 * Functions passed
 * @param rooms function that returns a list of rooms
 * @param buildingInfo function that returns a list of information on buildings
 */

export function MapData(props, rooms, buildingInfo){ 
    let idCount = 1;

    var buildingName = [];
    var departmentsArray = [];
    var serviceArray = [];
    var accessibilityArray = [];
    var classRooms = [];
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
        var value = buildingInfo[props.passBuildingName].services;
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
    
    //Get accesibility
    if (props.passBuildingName != "" && props.accesibility == true) {
        var hasCredit = buildingInfo[props.passBuildingName].hasCredit;
        if (hasCredit && hasCredit == true) {
            accessibilityArray.push({id: idCount, name: "Credit Card: Yes"})
            idCount++;
        } else {
            accessibilityArray.push({id: idCount, name: "Credit Card: No"})
            idCount++;
        }

        //Bicycle
        var hasBicycle = buildingInfo[props.passBuildingName].hasBicycle;
        if (hasBicycle && hasBicycle == true) {
            accessibilityArray.push({id: idCount, name: "Bicycle Parking: Yes"})
            idCount++;
        } else {
            accessibilityArray.push({id: idCount, name: "Bicycle Parking: No"})
            idCount++;
        }

        //Handicap
        var hasHandicap = buildingInfo[props.passBuildingName].hasHandicap;
        if (hasHandicap && hasHandicap == true) {
            accessibilityArray.push({id: idCount, name: "Wheelchair Accessibility: Yes"})
            idCount++;
        } else {
            accessibilityArray.push({id: idCount, name: "Wheelchair Accessibility: No"})
            idCount++;
        }

        //Information center
        var hasInfocenter = buildingInfo[props.passBuildingName].hasInfocenter;
        if (hasInfocenter && hasInfocenter == true) {
            accessibilityArray.push({id: idCount, name: "Info Center: Yes"})
            idCount++;
        } else {
            accessibilityArray.push({id: idCount, name: "Info Center: No"})
            idCount++;
        }

        //Parking
        var hasParking = buildingInfo[props.passBuildingName].hasParking;
        if (hasParking && hasParking == true) {
            accessibilityArray.push({id: idCount, name: "Parking: Yes"})
            idCount++;
        } else {
            accessibilityArray.push({id: idCount, name: "Parking: No"})
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

    if (departmentsArray.length == 0 && props.passBuildingName !== "") {
        items.push(["None"])
    }

    if(serviceArray.length > 0) {
        items.push(serviceArray);
    }

    if (serviceArray.length == 0 && props.passBuildingName !== "") {
        items.push(["None"])
    }

    if(accessibilityArray.length > 0) {
        items.push(accessibilityArray);
    }

    if(classRooms.length > 0) {
        items.push(classRooms);
    }

    if (props.flatten) {
        return items.flat();
    }
    return items;
}