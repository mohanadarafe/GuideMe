import { db }  from "../database.config";
import { AsyncStorage } from "react-native";

/**
 * This is a firebase method that will go retrieve the data requested, 
 * in this case, the apiKeyId. 
 * 
 * We then set the value in the AsyncStorage.
 */
export const retrieveApiKey = () => {

    db.ref("/DirectionsApiKey").once("value", querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let keyReponse = {...data};
        AsyncStorage.setItem("apiKeyId", (keyReponse.id).toString())
    });

}