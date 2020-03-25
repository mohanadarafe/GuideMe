import { db }  from "../config";
import { AsyncStorage } from "react-native";

export const retrieveApiKey = () => {

    db.ref("/DirectionsApiKey").once("value", querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let keyReponse = {...data};
        AsyncStorage.setItem("apiKeyId", (keyReponse.id).toString())
    });

}