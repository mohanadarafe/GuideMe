import { ClassRooms } from "../constants/ClassRooms";
import { buildingData } from "../constants/buildingData";

//TODO: Add more unit tests.
/**
 * This method will return an object containing all the elements necessary to display in the MoreDetails
 * screen. No need to create method inside MoreDetails, everything is taken care of here.
 * 
 * @param {*} value is value passed from the BottomMenu to be searched in the constant Building file.
 * @param {*} list is the list of buildings that we need to iterate through.
 */
const retrieveMoreDetailsData = (value, list) => {
    
    for (var key in list) {
        if (list[key].name.includes(value) || list[key].services.includes(value) || list[key].departments.includes(value)) {
            return appendInfoAndAccessibility(list[key]);
        }
    }
    return null;
}
/**
 * Because accessibility values weren't written as arrays, I need to manually create an array and then merge the 
 * result to the building object passed in parameter.
 * 
 * @param {*} building is the building object in question.
 */
const appendInfoAndAccessibility = (building) => {
    let list  = {accessibilityItems: []};
    list.accessibilityItems.push(building.hasCredit ? "Credit Card: Yes" : "Credit Card: No");
    list.accessibilityItems.push(building.hasBicycle ? "Bicycle Parking: Yes" : "Bicycle Parking: No");
    list.accessibilityItems.push(building.hasHandicap ? "Handicap Accessibility: Yes" : "Handicap Accessibility: No");
    list.accessibilityItems.push(building.hasInfocenter ? "Info-Center: Yes" : "Info-Center: No");
    list.accessibilityItems.push(building.hasParking ? "Car Parking: Yes" : "Car Parking: No");
    return ({...building, ...list});
}
/**
 * This method appends every element of an array with an index since SearchableDropDown requires 
 * an id in order to render the items.
 * @param {*} list is the list we want to append ids to.
 */
const appendIdToList = (list) => {
        
    const appendedList = list.map((element, index) => {
            return ({
                id: index + 1,
                name: element
            });
        });
    return appendedList;
}

/**
 * This method will go through each element in the buildingData and classrooms constant files and 
 * fetch the name, fullName, address, services and departements so that they can be searchable 
 * in the dropdown search list. 
 * 
 * The reason why I'm not directly calling buildingData() and ClassRooms() is because those two are lists
 * that we are going to use in two different scenario (Search and MoreDetails) and I wanted to avoid too 
 * many calls. 
 * 
 * @param {*} buildings 
 * @param {*} classrooms 
 */
export function RetrieveSearchItems (buildings, classrooms) {
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
    buildingServices = [].concat.apply([], buildingServices);
    buildingDepartments = [].concat.apply([], buildingDepartments);
    const mergedItems = [...buildingNames, ...buildingFullNames, ...buildingAddress, ...buildingDepartments, ...buildingServices, ...classroomsList];
    return mergedItems;
}


/**
 * Will map the constant file values to the proper context : Search / MoreDetails
 * We pass the necessary values as props.
 * 
 * @param {*} props 
 */
export function MapData (props) {
    var results= [];
    let buildingList = buildingData();
    let classrooms = ClassRooms();
    switch(props.context) {
        case "More Details":
        results = retrieveMoreDetailsData(props.buildingToSearch, buildingList);
        return results;
        case "Search":
        results = appendIdToList(RetrieveSearchItems(buildingList, classrooms));
        return results
    }
    return null;
}