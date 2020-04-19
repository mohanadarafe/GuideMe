import { createStore, combineReducers, applyMiddleware } from "redux";

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
  selectedBuildingName: null,
  mainSearchBarDestination: null,
  personaType: "UNDERGRADUATE",
  mobilityReducedType: "MOBILITY_NOT_REDUCED",
  transportType: "driving",
  searchItemMarker: null,
  isDarkMode: false
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TRANSPORT_TYPE':
            return { 
              transportType: action.payload.value,
              isDarkMode: action.payload.darkMode
            }
        case 'UPDATE_SELECTED_BUILDING':
            return { 
              selectedBuildingName: action.payload.selectedBuilding,
              isDarkMode: action.payload.darkMode
            }
        case 'UPDATE_SEARCH_BAR_VALUE_SEARCH_BAR_MARKER':
            return { 
              searchItemMarker: action.payload.coordinates,
              selectedBuildingName: action.payload.name,
              mainSearchBarDestination: action.payload.name,
              isDarkMode: action.payload.darkMode
            }
        case 'UPDATE_MAP_MODE':
            return {isDarkMode: action.payload }
    }
    return state;
  }
  export const store = createStore(reducer);
  
 