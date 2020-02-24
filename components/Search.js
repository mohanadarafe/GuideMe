import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Icon } from 'native-base';

var items = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'H801' },
    { id: 2, name: 'H937' },
    { id: 3, name: 'H425' },
    { id: 4, name: 'MB3.356' },
    { id: 5, name: 'MB7.701' },
    { id: 6, name: 'Hall Building' },
    { id: 7, name: 'EV Building' },
    { id: 8, name: 'Bathroom' },
    { id: 9, name: 'School of Community and Public Affairs' },
    { id: 10, name: 'Le Gym' },
];

function Search() {
    const [destination, setDestination] = React.useState("");

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