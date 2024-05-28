import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { btn1, container, heading, hr80 } from '../../global/style'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'

const LoginScreen = () => {

    const navigation = useNavigation()

    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    return (
        <View style = {styles.container}>
            <Text style = {[styles.heading]} >Welcome Back</Text>
            <Text style = {styles.subheading} >we are gald to have you back...</Text>
            <View style = {styles.descBox}>
                <Text style = {styles.descText}>Tasty food awaits ... </Text>
            </View>

            <View style = {styles.inputBox}>
                <FontAwesome style = {styles.inputIcon} name = {'user'} size = {20} color = {emailFocus === false ? 'rgba(159, 75, 69, 0.55)' : '#de4007' } stroke = {2} />
                <TextInput style = {styles.textInputField}  placeholder='Username!' 
                    onFocus={() => {
                        setEmailFocus(true)
                        setPasswordFocus(false)
                        setShowPassword(false)
                    }} 
                />
            </View>
            <View style = {styles.inputBox}>
                <Ionicons style = {styles.inputIcon} name = {'lock-closed'} size = {20} color = {passwordFocus === false ? 'rgba(159, 75, 69, 0.55)' : '#de4007' } stroke = {2} />
                <TextInput style = {styles.textInputField} placeholder='Password!' secureTextEntry = { showPassword === false ? true : false}
                    onFocus={() => {
                        setEmailFocus(false)
                        setPasswordFocus(true)
                    }} 
                />
                <Octicons style = {styles.showpswd } name = {showPassword == false ? 'eye-closed' : 'eye'} size = {20} color = {'#000'}  onPress = {() => {setShowPassword(!showPassword)}} />

            </View>

            <View style = {styles.signUpContainer} >
                <View style = {styles.goToContainer} >
                    <Text style = {styles.newToBoxText}>New user ? </Text>
                    <TouchableOpacity style = {styles.goToSignup} onPress={() => {navigation.navigate('SignupScreen')}} >
                        <Text  style = {styles.goToSignupText} > Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style = {styles.forgotBox}>
                    <Text style = {styles.forgotText} >Forgot password</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.loginBtnBox} >
                <TouchableOpacity style = {styles.loginButton} onPress={() => {console.warn('Logged in!!')}} >
                    <Text style = {styles.loginButtonText} >Login</Text>
                </TouchableOpacity>
            </View>

            {/* <View style = {[StyleSheet.absoluteFillObject, {backgroundColor : '#ffffff', zIndex : -1} ]} onFocus = {() => {setEmailFocus(false), setPasswordFocus(false) }} /> */}
            <View style = {styles.hr80} />

            <View style = {styles.GFContainer} >
                <Text style = {styles.signinText}>Continue with</Text>
                <View style = {styles.GFbox}>
                    <TouchableOpacity style = {styles.iconBox} onPress={ () => {console.warn('Google btn presed!!')} }>
                        <Text style = {[styles.icon, styles.googleBtn]} >G</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.iconBox} onPress={ () => {console.warn('Facebook btn presed!!')} }>
                        <Text style = {[styles.icon, styles.fbBtn]} >f</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container : container,
    heading : heading,
    subheading : {
        color: '#000',
        marginVertical : 10,
        fontSize : 20,
        fontFamily: 'Poppins-Medium',    
        textAlign: 'center' 
    },
    descBox : {
        marginVertical : 20,
    },
    descText : {
        color : '#853c30',
        fontSize : 15,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center'
    },
    inputBox : { 
        borderWidth : 1,
        borderColor : 'black',
        borderRadius : 10,
        margin : 10,
        paddingHorizontal: 40,
    },
    textInputField : {
        fontSize : 18,
        width: '100%',
        height : 50,
        fontFamily: 'Poppins-Medium',
        alignItems : 'center',
    },
    inputIcon : {
        position : 'absolute',
        top : 15,
        left : 15,
    },
    showpswd: {
        position : 'absolute',
        top : 15,
        right : 15,
    },
    goToContainer : {
        flexDirection: 'row',
        marginLeft : 10,
    },
    goToSignup : {
        alignItems : 'center',
    },
    newToBoxText : {
        color : '#000',
        fontSize : 15,
        fontFamily: 'Poppins-Medium',
    },
    goToSignupText : {
        color : '#853c30',
        fontSize : 15,
        fontFamily: 'Poppins-BoldItalic',
        alignSelf: 'center',
    },
    signUpContainer : {
        alignItems : 'center',
    },
    forgotBox : {
        marginLeft : 10,
    },
    forgotText: {
        color : '#000',
        fontSize : 15,
        fontFamily: 'Poppins-Medium',
    },
    loginBtnBox:{
        alignItems: 'center',
        marginTop : 20,
    },
    loginButton : btn1,
    loginButtonText : {
        color : '#fff',
        fontSize : 20,
        textAlign : 'center',
        padding : 10,
        borderRadius : 10,
    },
    hr80 : hr80,
    GFContainer : {
        alignItems : 'center',
        marginVertical : 20,
    },
    signinText : {
        fontSize : 18,
        fontFamily: 'Poppins-Medium',
    },
    GFbox: {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : 20,
    },
    iconBox : {
        width: 50,
        height: 50,
        borderRadius : 35,
        backgroundColor : '#fff',
        marginHorizontal : 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems : 'center',
        justifyContent : 'center',
    },
    icon: {
        color : '#fff',
        fontSize : 28,
        fontFamily: 'Poppins-Medium',
        paddingTop: 5,
    },
    googleBtn : {
        color : '#d47261',
    },
    fbBtn : {
        color : '#095194',
    },
})