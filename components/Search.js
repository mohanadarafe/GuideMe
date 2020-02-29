import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity  } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Icon } from 'react-native-elements'
import { MapData } from './MapData';
import { sgwRooms } from '../constants/sgwRooms';
import { buildingData } from '../constants/buildingData';

function fetchData() {
  const searchInfo = MapData({passBuildingName: "", buildingName: true, classRooms: true, departments: true, services: true, accesibility: false, flatten: true}, sgwRooms(), buildingData());
  return searchInfo;
}

function Search() {
    const [destination, setDestination] = React.useState("");
    const [data, setData] = React.useState();

    useEffect(() => {
      setData(fetchData())
    }, [])

    return (
      
        <View style={styles.container}>
            
              <View style={styles.buttonStyle}>
              <TouchableOpacity>
                <View>
                <Icon name='menu' size={30}></Icon>
                </View>
            </TouchableOpacity>
              </View>
            <SearchableDropdown
                onTextChange={val => val} //This must be here (does nothing)
                onItemSelect={item => setDestination(item)}
                textInputStyle={styles.textInputStyle}
                itemStyle={styles.itemStyle}
                containerStyle = {styles.test}
                itemTextStyle={styles.itemTextStyle}
                itemsContainerStyle={styles.itemsContainerStyle}
                items={data}
                placeholder="Where to?"
                resetValue={false}
            />
        </View>
    );
}


export const styles = StyleSheet.create({
  buttonStyle: {
    // marginTop: 5,
    width: '15%',
    borderRightWidth: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    maxHeight: 44,
    borderBottomStartRadius: 20

  },
  test: {

    width: '90%'
  },
  container: {
    width: '80%',
    position: 'absolute',
    top: 50,
    left: '10%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',

  },
  containerStyle: {
    padding: 5
  },
  textInputStyle: {
    padding: 12,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: '#ccc',
    backgroundColor: '#FFFFFF',
    // borderRadius: 10,
    fontFamily: 'encodeSansExpanded'
  },
  itemStyle: {
    padding: 10,
    marginTop: 2,
    backgroundColor: '#FAF9F8',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
  },
  itemTextStyle: {
    color: '#222',
    fontFamily: 'encodeSansExpanded'
  },
  itemsContainerStyle: {
    maxHeight: '60%',
  }
});

export { Search };