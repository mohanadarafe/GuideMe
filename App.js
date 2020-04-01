import React from "react";
import Navigator from "./routes/drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { retrieveApiKey } from "./services/getApiKey";

const getFonts = () => {
  return Font.loadAsync({
    "encodeSansExpanded": require("./assets/fonts/EncodeSansExpanded-Regular.ttf")
  });
};

//Navigator is an alias, we can give it any name we want, since it is a default export.
export default function App () {
  console.disableYellowBox = true;
  const [isReady, setIsReady] = React.useState(false);
  
  retrieveApiKey(); //Retrieving ApiKey on App startup.
  if(!isReady) {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setIsReady(true)}
      />
    );
  } else {
    return <Navigator />;
  }

}
