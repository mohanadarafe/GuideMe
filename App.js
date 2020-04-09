import React from "react";
import Navigator from "./routes/drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { retrieveApiKey } from "./services/getApiKey";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
// import logger from 'redux-logger'

/**
 * Quick explanation of Redux here
 * 
 * Store - holds our state - THERE IS ONLY ONE STATE 
 * Action - State can be modified using actions - SIMPLE OBJECTS 
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state 
 *  - pure functions 
 *  - only mandatory argument is the 'type' 
 * Subscriber - listens for state change to update the ui  
 */

const initialState = {
  transportType: "driving"
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_TRANSPORT_TYPE':
          return { transportType: action.payload}
  }
  return state;
}
export const store = createStore(reducer);

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
