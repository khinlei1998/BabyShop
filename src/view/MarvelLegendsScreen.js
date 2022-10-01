import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function MarvelLegendsScreen(props) {
    return (
        <View style={{ flex: 1, }}>
            <View style={styles.container}>
                <Image source={require('../image/dead.png')} style={styles.imgcontainer} />

            </View>
            <View style={{ marginTop: 20, marginLeft: 20 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>6-inch DeadPool Action Figure -Exclusive </Text>
                <Text style={{ color: 'red', marginTop: 10 }}>Price : $24.99</Text>

            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('MapScreen')} style={{ alignItems: 'center', marginTop: 20 }}>
                <View style={styles.btncontainer} >

                    <Text style={{ textAlign: 'center', color: 'white' }}>Where Can I Buy?</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '90%', height: '50%', backgroundColor: 'white',
        marginTop: 20, borderColor: 'black', borderWidth: 1, alignSelf: 'center'
    },
    imgcontainer: {
        width: '90%', height: '80%', alignSelf: 'center'
    },
    btncontainer: {
        backgroundColor: '#2a9df4',
        height: 45,
        borderRadius: 10,
        width: '80%',

        justifyContent: 'center'
    }
})