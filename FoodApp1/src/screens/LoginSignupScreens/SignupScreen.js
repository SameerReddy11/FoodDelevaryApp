import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { btn1, container, heading, hr80 } from '../../global/style'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'

const SignupScreen = () => {

    const navigation = useNavigation()
    const [nameFocus, setNameFocus] = useState(false)
    const [emailFocus, setemailFocus] = useState(false)
    const [numberFocus, setnumberFocus] = useState(false)
    const [passwordFocus, setpasswordFocus] = useState(false)
    const [rePswdFocus, setrePswdFocus] = useState(false)
    const [showpswd, setshowpswd] = useState(false)
    const [showrePswd, setshowrePswd] = useState(false)

    return (
        <View style = {styles.container}>
            <Text style = {[styles.heading]} >welcome to foodie</Text>
            <Text style = {styles.desc}>Please fill the details to create account</Text>
            <View style = {styles.inputBox}>
                <Feather style = {styles.inputIcon} name = {'user'} size = {20} color = {nameFocus === false ? 'rgba(159, 75, 69, 0.55)' : '#f60'} stroke = {2} />
                <TextInput style = {styles.textInputField} placeholder='Enter Your Name!'  
                    onFocus={() => {
                        setNameFocus(true)
                        setemailFocus(false)
                        setnumberFocus(false)
                        setpasswordFocus(false)
                        setrePswdFocus(false)
                    }}
                />
            </View>
            <View style = {styles.inputBox}>
                <MaterialCommunityIcons style = {styles.inputIcon} name = {'email'} size = {20} color = {emailFocus === false ? 'rgba(159, 75, 69, 0.55)' : '#f60'} stroke = {2} />
                <TextInput style = {styles.textInputField} placeholder='Enter Your Email!'
                    onFocus={() => {
                        setNameFocus(false)
                        setemailFocus(true)
                        setnumberFocus(false)
                        setpasswordFocus(false)
                        setrePswdFocus(false)
                        setshowpswd(false)
                        setshowrePswd(false)
                    }}
                />
            </View>
            <View style = {styles.inputBox}>
                <Ionicons style = {styles.inputIcon} name = {'call-outline'} size = {20} color = {numberFocus === false ? 'rgba(159, 75, 69, 0.55)' : '#f60'} stroke = {2} />
                <TextInput style = {styles.textInputField} placeholder='Enter Your number!' keyboardType = "numeric" 
                    onFocus={() => {
                        setNameFocus(false)
                        setemailFocus(false)
                        setnumberFocus(true)
                        setpasswordFocus(false)
                        setrePswdFocus(false)
                        setshowpswd(false)
                    }}
                />
            </View>
            <View style = {styles.inputBox}>
                <Entypo style = {styles.inputIcon} name = {'eye-with-line'} size = {20} color = {passwordFocus === false ? 'rgba(159, 75, 69, 0.55)' : '#f60'} stroke = {2} />
                <TextInput style = {styles.textInputField} placeholder='Enter Password!'  
                    onFocus={() => {
                        setNameFocus(false)
                        setemailFocus(false)
                        setnumberFocus(false)
                        setpasswordFocus(true)
                        setrePswdFocus(false)
                        setshowrePswd(false)
                    }}
                    secureTextEntry = {showpswd == false? true : false}
                />
                <Octicons style = {styles.showpswd } name = {showpswd == false ? 'eye-closed' : 'eye'} size = {20} color = {'#000'}  onPress = {() => {setshowpswd(!showpswd)}} />
            </View>
            <View style = {styles.inputBox}>
                <MaterialIcons style = {styles.inputIcon} name = {'edit'} size = {20} color = {rePswdFocus === false ? 'rgba(159, 75, 69, 0.55)' : '#f60'} stroke = {2} />
                <TextInput style = {styles.textInputField} placeholder='Re-Enter Password!'  
                    onFocus={() => {
                        setNameFocus(false)
                        setemailFocus(false)
                        setnumberFocus(false)
                        setpasswordFocus(false)
                        setrePswdFocus(true)
                    }}
                    secureTextEntry = {showrePswd == false? true : false}
                />
                <Octicons style = {styles.showpswd } name = {showrePswd == false ? 'eye-closed' : 'eye'} size = {20} color = {'#000'}  onPress = {() => {setshowrePswd(!showrePswd)}} />
            </View>
            <View style = {styles.goToContainer} >
                <Text style = {styles.newToBoxText}>Already have an account </Text>
                <TouchableOpacity style = {styles.goToSignup} onPress={() => {navigation.navigate('LoginScreen')}} >
                    <Text style = {styles.goToSignupText} > Login </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.signupBtnBox} >
                <TouchableOpacity style = {styles.signupButton} onPress={() => {console.warn('Logged in!!')}} >
                    <Text style = {styles.signupButtonText} >Sign up</Text>
                </TouchableOpacity>
            </View>

            
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

export default SignupScreen

const styles = StyleSheet.create({
    container : container,
    heading : heading,
    desc : {
        marginLeft: 10,
        fontFamily: 'Poppins-Medium',
        fontSize : 18,
        marginVertical : 12,
        color : '#000',
        textAlign : 'center',
    },
    inputBox : { 
        borderWidth : 1,
        borderColor : 'black',
        borderRadius : 10,
        margin : 10,
        paddingHorizontal: 40,
    },
    textInputField : {
        fontSize : 20,
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
        marginTop : 20,
        alignItems : 'center',
        justifyContent : 'center',
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
    },
    signupBtnBox:{
        alignItems: 'center',
        marginTop: 20,
    },
    signupButton : btn1,
    signupButtonText : {
        color : '#fff',
        fontSize : 20,
        textAlign : 'center',
        padding : 10,
        borderRadius : 10,
        fontFamily: 'Poppins-Medium',
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