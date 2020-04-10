import React from "react";
import Navigator from "./routes/drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { retrieveApiKey } from "./services/getApiKey";
import { Provider } from "react-redux";
import { store } from "./redux/reducers/index"


//Navigator is an alias, we can give it any name we want, since it is a default export.
export default function App () {
  console.disableYellowBox = true;
  const [isReady, setIsReady] = React.useState(false);

  const getFonts = () => {
    return Font.loadAsync({
      "encodeSansExpanded": require("./assets/fonts/EncodeSansExpanded-Regular.ttf")
    });
  };

  retrieveApiKey(); //Retrieving ApiKey on App startup.
  if (!isReady) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setIsReady(true)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
      );
  }

}
