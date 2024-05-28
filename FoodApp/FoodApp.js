import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FoodApp = () => {
    return (
        <View style = {styles.container} >
            <Text style = {styles.mainText} > Food App </Text>
        </View>
    )
}

export default FoodApp

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#f60'
    },
    mainText : {
        textAlign : 'center',
        color : '#000'
    },
})