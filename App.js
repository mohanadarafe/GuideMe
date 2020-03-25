import React from "react";
import Navigator from "./routes/routeStack";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { retrieveApiKey } from "./services/getApiKey";
import { AsyncStorage } from "react-native";

const getFonts = () => {
  return Font.loadAsync({
    "encodeSansExpanded": require("./assets/fonts/EncodeSansExpanded-Regular.ttf")
  });
};

//Navigator is an alias, we can give it any name we want, since it is a default export.
export default function App() {
  console.disableYellowBox = true;
  const [isReady, setIsReady] = React.useState(false);
  // const [apiKey, setApiKey] = React.useState(null);
 
  // const getApiKey = async () => {
  //   let apiKey = await AsyncStorage.getItem("apiKey");
  //   console.log(apiKey);
  // };
  retrieveApiKey();
  if(!isReady) {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setIsReady(true)}
      />
    );
  } else {
    return <Navigator />;
  }

}
