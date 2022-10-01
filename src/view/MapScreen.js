import { StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';


export default function MapScreen() {

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 19.75481,
                longitude: 96.2024,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Marker
                coordinate={{ latitude: 19.75481, longitude: 96.2024 }} pinColor='black'
            />

        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flex: 1,
    },

})