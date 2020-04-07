import { ClassRooms } from "../constants/ClassRooms";
import { buildingData } from "../constants/buildingData";


const retrieveMoreDetailsData = (value, list) => {
    
    for (var key in list) {
        if (list[key].name.includes(value)) {
            return appendInfoAndAccessibility(list[key]);
        }
    }
    return null;
}

const appendInfoAndAccessibility = (building) => {
    let list  = {accessibilityItems: []};
    list.accessibilityItems.push(building.hasCredit ? "Credit Card: Yes" : "Credit Card: No");
    list.accessibilityItems.push(building.hasBicycle ? "Bicycle Parking: Yes" : "Bicycle Parking: No");
    list.accessibilityItems.push(building.hasHandicap ? "Handicap Accessibility: Yes" : "Handicap Accessibility: No");
    list.accessibilityItems.push(building.hasInfocenter ? "Info-Center: Yes" : "Info-Center: No");
    list.accessibilityItems.push(building.hasParking ? "Car Parking: Yes" : "Car Parking: No");
    return ({...building, ...list});
}

const appendIdToList = (list) => {
        
    const appendedList = list.map((element, index) => {
            return ({
                id: index + 1,
                name: element
            });
        });
    return appendedList;
}

const retrieveSearchItems = (buildings, classrooms) => {
    let classroomsList = [];
    let buildingNames = [];
    let buildingFullNames = [];
    let buildingAddress = [];
    let buildingServices = [];
    let buildingDepartments = [];
    for (var key in buildings) {
        buildingNames.push(buildings[key].name);
        buildingFullNames.push(buildings[key].fullName);
        buildingAddress.push(buildings[key].address);
        buildingServices.push(buildings[key].services);
        buildingDepartments.push(buildings[key].departments);
    }
    for (var key in classrooms) {
        classroomsList.push(...classrooms[key].room);
    }
    classroomsList.flat();
    const mergedItems = [...buildingNames, ...buildingFullNames, ...buildingAddress, ...buildingDepartments, ...buildingServices, ...classroomsList];
    const searchItems = appendIdToList(mergedItems);
    return searchItems;
}




/**
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

export function MapData (props, rooms, buildingInfo) {
    var results= [];
    let buildingList = buildingData();
    let classrooms = ClassRooms();
    switch(props.context) {
        case "More Details":
        results = retrieveMoreDetailsData(props.buildingToSearch, buildingList);
        return results;
        case "Search":
        results = retrieveSearchItems(buildingList, classrooms);
        return results
        break;
    }






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
            buildingName.push({ id: idCount, name: value });
            idCount++;
        }
    }

    //Get departments
    if (props.passBuildingName != "" && props.departments == true) {
        value = buildingInfo[props.passBuildingName].departments;
        if (value != null) {
            value.forEach(element => {
                departmentsArray.push({ id: idCount, name: element });
                idCount++;
            });
        }
    }

    if (props.passBuildingName == "" && props.departments == true) {
        for (key in buildingInfo) {
            value = buildingInfo[key].departments;
            if (value != null) {
                value.forEach(element => {
                    departmentsArray.push({ id: idCount, name: element });
                    idCount++;
                });
            }
        }
    }

    //Get services
    if (props.passBuildingName != "" && props.services == true) {
        value = buildingInfo[props.passBuildingName].services;
        if (value != null) {
            value.forEach(element => {
                serviceArray.push({ id: idCount, name: element });
                idCount++;
            });
        }
    }


    if (props.passBuildingName == "" && props.services == true) {
        for (key in buildingInfo) {
            value = buildingInfo[key].services;
            if (value != null) {
                value.forEach(element => {
                    serviceArray.push({ id: idCount, name: element });
                    idCount++;
                });
            }
        }
    }

    //Get accesibility
    if (props.passBuildingName != "" && props.accesibility == true) {
        var hasCredit = buildingInfo[props.passBuildingName].hasCredit;
        if (hasCredit && hasCredit == true) {
            accessibilityArray.push({ id: idCount, name: "Credit Card: Yes" });
            idCount++;
        } else {
            accessibilityArray.push({ id: idCount, name: "Credit Card: No" });
            idCount++;
        }

        //Bicycle
        var hasBicycle = buildingInfo[props.passBuildingName].hasBicycle;
        if (hasBicycle && hasBicycle == true) {
            accessibilityArray.push({ id: idCount, name: "Bicycle Parking: Yes" });
            idCount++;
        } else {
            accessibilityArray.push({ id: idCount, name: "Bicycle Parking: No" });
            idCount++;
        }

        //Handicap
        var hasHandicap = buildingInfo[props.passBuildingName].hasHandicap;
        if (hasHandicap && hasHandicap == true) {
            accessibilityArray.push({ id: idCount, name: "Wheelchair Accessibility: Yes" });
            idCount++;
        } else {
            accessibilityArray.push({ id: idCount, name: "Wheelchair Accessibility: No" });
            idCount++;
        }

        //Information center
        var hasInfocenter = buildingInfo[props.passBuildingName].hasInfocenter;
        if (hasInfocenter && hasInfocenter == true) {
            accessibilityArray.push({ id: idCount, name: "Info Center: Yes" });
            idCount++;
        } else {
            accessibilityArray.push({ id: idCount, name: "Info Center: No" });
            idCount++;
        }

        //Parking
        var hasParking = buildingInfo[props.passBuildingName].hasParking;
        if (hasParking && hasParking == true) {
            accessibilityArray.push({ id: idCount, name: "Parking: Yes" });
            idCount++;
        } else {
            accessibilityArray.push({ id: idCount, name: "Parking: No" });
            idCount++;
        }
    }

    //Get classrooms
    if (props.classRooms) {
        for (key in rooms) {
            value = rooms[key].room;
            value.forEach(element => {
                classRooms.push({ id: idCount, name: element });
                idCount++;
            });
        }
    }

    if (buildingName.length > 0) {
        items.push(buildingName);
    }

    if (departmentsArray.length > 0) {
        items.push(departmentsArray);
    }

    if (departmentsArray.length == 0 && props.passBuildingName !== "") {
        items.push(["None"]);
    }

    if (serviceArray.length > 0) {
        items.push(serviceArray);
    }

    if (serviceArray.length == 0 && props.passBuildingName !== "") {
        items.push(["None"]);
    }

    if (accessibilityArray.length > 0) {
        items.push(accessibilityArray);
    }

    if (classRooms.length > 0) {
        items.push(classRooms);
    }

    if (props.flatten) {
        return items.flat();
    }
    return items;
}