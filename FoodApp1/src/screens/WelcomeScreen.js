import { Image, ImageBackground, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { container, hr80 } from '../global/style'
const WelcomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style = {styles.container}>
            {/* <ImageBackground source={require('../../assets/imgs/img1.jpg')} style = {styles.backgroundImg} /> */}
            <Text style = {styles.heading} >Welcome <Text style = {styles.foodie}>Foodie</Text></Text>
            <View style = {styles.LogoContainer} >
                <Image source={require('../../assets/imgs/logo.png')} style = {styles.logo} />
            </View>
            <View style = {styles.caotopnBox}>
                <View style = {hr80} />
                <Text style = {styles.caption} >
                    Discover the best food near you at the most affordable price😋
                </Text>
                <View style = {hr80} />
            </View>
            <View style = {styles.btnBox} >
                <TouchableOpacity style = {styles.btns} onPress={() => {navigation.navigate('LoginScreen')}} >
                    <Text style = {styles.btnText} >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btns} onPress={() => {navigation.navigate('SignupScreen')}} >
                    <Text style = {styles.btnText} >Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : container,
    backgroundImg : {
        width: '100%',
        height : '100%',
        resizeMode : 'cover',
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
    },
    heading : {
        color : '#000',
        fontSize : 30,
        fontWeight : 'bold',
        textAlign : 'center',
        marginTop :  Platform.OS === 'ios' ? 100 : 70,
    },
    foodie : {
        fontFamily : 'Poppins-MediumItalic',
    },
    LogoContainer : {},
    logo : {
        marginTop: 50,
        width : 400,
        height : 400,
        resizeMode : 'contain',
        alignSelf: 'center',
        opacity : 0.8,
    },
    caotopnBox : {
        alignItems: 'center',
        paddingHorizontal : 30,
        paddingVertical : 20,
        borderRadius : 10,
        width : 330,
        alignSelf: 'center',
    },
    caption : {
        fontSize : 18,
        color: '#000',
        fontWeight: 'bold',
        lineHeight : 28
    },
    btnBox : {
        flexDirection : 'row',
        justifyContent :'space-around',
        marginTop : 20,
    },
    btns : {
        backgroundColor : '#d47261',
        paddingVertical : 10,
        paddingHorizontal : 30,
        borderRadius : 10,
        shadowColor : '#fff',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.5,
        shadowRadius : 3.84,
        elevation : 10,
        alignItems : 'center',
        justifyContent : 'center',
        width : 150,
        height : 50,
        shadowColor : '#000',
    },
    btnText : {
        color : '#fff',
        fontSize : 20,
        fontWeight : 'bold',
        textAlign : 'center',
        lineHeight : 22,
        fontFamily : 'Poppins-MediumItalic',
    },
})

export default WelcomeScreen



































































































