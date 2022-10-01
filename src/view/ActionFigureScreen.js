import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

export default function ActionFigureScreen(props) {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Marvel Legends')} style={{ marginTop: 30 }}>
                    <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                        <Image source={require('../image/dead.png')} style={{ width: 40, height: 40, }} />
                        <Text style={{ color: "#0B0B45", marginTop: 15, marginLeft: 20 }}>Marvel Legends</Text>
                    </View>

                </TouchableOpacity>
                <View
                    style={{
                        marginTop: 30,
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.5,
                        width: '90%',
                        alignSelf: 'center',

                    }}
                />

                <TouchableOpacity onPress={() => alert('Under Development')} style={{ marginTop: 30 }}>
                    <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                        <Image source={require('../image/light-saber.png')} style={{ width: 40, height: 40, }} />
                        <Text style={{ color: "#0B0B45", marginTop: 15, marginLeft: 20 }}>Star War</Text>
                    </View>

                </TouchableOpacity>
                <View
                    style={{
                        marginTop: 30,
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.5,
                        width: '90%',
                        alignSelf: 'center',

                    }}
                />


                <TouchableOpacity onPress={() => alert('Under Development')} style={{ marginTop: 30 }}>
                    <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                        <Image source={require('../image/robot.png')} style={{ width: 40, height: 40, }} />
                        <Text style={{ color: "#0B0B45", marginTop: 15, marginLeft: 20 }}>Transformers</Text>
                    </View>

                </TouchableOpacity>
                <View
                    style={{
                        marginTop: 30,
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.5,
                        width: '90%',
                        alignSelf: 'center',

                    }}
                />


                <TouchableOpacity onPress={() => alert('Under Development')} style={{ marginTop: 30 }}>
                    <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                        <Image source={require('../image/pikachu.png')} style={{ width: 40, height: 40, }} />
                        <Text style={{ color: "#0B0B45", marginTop: 15, marginLeft: 20 }}>Pokemon</Text>
                    </View>

                </TouchableOpacity>
                <View
                    style={{
                        marginTop: 30,
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.5,
                        width: '90%',
                        alignSelf: 'center',

                    }}
                />

                <TouchableOpacity onPress={() => alert('Under Development')} style={{ marginTop: 30 }}>
                    <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                        <Image source={require('../image/Buzz_Lightyear.png')} style={{ width: 40, height: 50, }} />
                        <Text style={{ color: "#0B0B45", marginTop: 15, marginLeft: 20 }}>Toy Story</Text>
                    </View>

                </TouchableOpacity>
                <View
                    style={{
                        marginTop: 30,
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.5,
                        width: '90%',
                        alignSelf: 'center',

                    }}
                />

                <TouchableOpacity onPress={() => props.navigation.navigate('Ponyscreen')} style={{ marginTop: 30 }}>
                    <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                        <Image source={require('../image/pony.png')} style={{ width: 40, height: 40, }} />
                        <Text style={{ color: "#0B0B45", marginTop: 15, marginLeft: 20 }}>Pony Princess</Text>
                    </View>

                </TouchableOpacity>
                <View
                    style={{
                        marginTop: 30,
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.5,
                        width: '90%',
                        alignSelf: 'center',

                    }}
                />

                <TouchableOpacity onPress={() => alert('Under Development')} style={{ marginTop: 30 }}>
                    <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                        <Image source={require('../image/Barbie.png')} style={{ width: 40, height: 50, }} />
                        <Text style={{ color: "#0B0B45", marginTop: 15, marginLeft: 20 }}>Barbie Princess</Text>
                    </View>

                </TouchableOpacity>
                <View
                    style={{
                        marginTop: 30,
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.5,
                        width: '90%',
                        alignSelf: 'center',

                    }}
                />

                <TouchableOpacity onPress={() => alert('Under Development')} style={{ marginTop: 30 }}>
                    <View style={{ marginLeft: 25, flexDirection: 'row' }}>
                        <Image source={require('../image/Snow_white_disney.png')} style={{ width: 20, height: 60, }} />
                        <Text style={{ color: "#0B0B45", marginTop: 15, marginLeft: 20 }}>Disney Princess</Text>
                    </View>

                </TouchableOpacity>
                <View
                    style={{
                        marginTop: 30,
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.5,
                        width: '90%',
                        alignSelf: 'center',

                    }}
                />

            </View>
        </ScrollView>
    )
}