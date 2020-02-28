import React, {useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { sgwData } from '../constants/sgwData';

const buildingInfo = sgwData();
let idCount = 1;
var items = [];

function getData() {
    for (var key in buildingInfo) {
        var value = buildingInfo[key].name;
        items.push({id: idCount, name: value})
        idCount++;
    }
    for (var key in buildingInfo) {
        var value = buildingInfo[key].departments;
        if (value != null) {
            value.forEach(element => {
                items.push({id: idCount, name: element})
                idCount++;
            });
        }
    }
    for (var key in buildingInfo) {
        var value = buildingInfo[key].services;
        if (value != null) {
            value.forEach(element => {
                items.push({id: idCount, name: element})
                idCount++;
            });
        } 
    }
}

function Search() {
    const [destination, setDestination] = React.useState("");

    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={styles.container}>
            <SearchableDropdown
                onTextChange={val => val} //This must be here (does nothing)
                onItemSelect={item => setDestination(item)}
                textInputStyle={styles.textInputStyle}
                itemStyle={styles.itemStyle}
                itemTextStyle={styles.itemTextStyle}
                itemsContainerStyle={styles.itemsContainerStyle}
                items={items}
                placeholder="Where to?"
                resetValue={false}
            />
        </View>
    );
}


export const styles = StyleSheet.create({
  container: {
    width: '80%',
    position: 'absolute',
    top: 70,
    left: '10%',
  },
  containerStyle: {
    padding: 5
  },
  textInputStyle: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
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