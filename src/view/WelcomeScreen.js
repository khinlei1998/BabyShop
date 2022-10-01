import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function WelcomeScreen(props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#0B0B45', justifyContent: 'center' }}>
            <View style={{ marginLeft: 20 }}>
                {/* <View style={{ width: 20, height: 20, backgroundColor: "white" }}></View>
                <View style={{ width: 20, height: 20, backgroundColor: "white" }}></View> */}
                <Image source={require('../image/bear.png')} style={{ width: 30, height: 30 }} />

                <Text style={{ marginTop: 10 }} >ရုပ်စုံကမ္ဘာမှကြိုဆိုပါတယ်။</Text>
                <Text style={{ marginTop: 10 }} >ကလေးတို့ လိုချင်တဲ့ အရုပ်မျိုးစုံကို ဒီမှာ ရနိုင်ပြီနော်…

                </Text>




            </View>

            <View style={{ justifyContent: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('ActionFigureScreen')}>
                    <Image source={require('../image/right-arrow.png')} style={{ width: 30, height: 30, marginRight: 20, marginTop: 30 }} />

                </TouchableOpacity>



            </View>



        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#0B0B45',
    }
})