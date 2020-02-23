import React from 'react';
import {View, Text} from 'react-native'

function MoreDetails (props) {
    return(
        <View>
            <Text>{props.name}</Text>
        </View>  
    );
}

export { MoreDetails }