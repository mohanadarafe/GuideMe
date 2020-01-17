import React from 'react';
import { View } from 'react-native';
import { Polygon } from 'react-native-maps';

const Buildings = () => {
    return(
        <View>
            <Polygon
                coordinates={[
                    { latitude: 45.497167, longitude: -73.579543 },
                    { latitude: 45.497713, longitude: -73.579032 },
                    { latitude: 45.497378, longitude: -73.578340 },
                    { latitude: 45.496830, longitude: -73.578853 },
                    { latitude: 45.497167, longitude: -73.579543 }
                ]}
                fillColor="rgba(76, 79, 98, 0.7)"
           />

            <Polygon
                coordinates={[
                    { latitude: 45.496708, longitude: -73.578525 },
                    { latitude: 45.497291, longitude: -73.578017 },
                    { latitude: 45.496896, longitude: -73.577102 },
                    { latitude: 45.496255, longitude: -73.577700 },
                    { latitude: 45.496708, longitude: -73.578525 }
                ]}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={[
                    { latitude: 45.495782, longitude: -73.579149 },
                    { latitude: 45.496129, longitude: -73.578806 },
                    { latitude: 45.495945, longitude: -73.578429 },
                    { latitude: 45.495616, longitude: -73.578742 },
                    { latitude: 45.495782, longitude: -73.579149 }
                ]}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={[
                    { latitude: 45.495574, longitude: -73.578653 },
                    { latitude: 45.495908, longitude: -73.578445 },
                    { latitude: 45.495416, longitude: -73.577551 },
                    { latitude: 45.495172, longitude: -73.577854 },
                    { latitude: 45.495574, longitude: -73.578653 }
                ]}
                fillColor="rgba(76, 79, 98, 0.7)"
            />

            <Polygon
                coordinates={[
                    { latitude: 45.495523, longitude: -73.579198 },
                    { latitude: 45.495358, longitude: -73.579356 },
                    { latitude: 45.495014, longitude: -73.578734 },
                    { latitude: 45.495200, longitude: -73.578530 },
                    { latitude: 45.495523, longitude: -73.579198 }
                ]}
                fillColor="rgba(76, 79, 98, 0.7)"
            />
            
        </View>
    )
}

export { Buildings };
