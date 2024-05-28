module.exports = {
    Colors : {
        primary : '#000000',
        secondary : '#ffffff'
    },
    titles : {
        title : 30,
        btnText : 20,
    },
    btn1 : {
        width  :'80%',
        height : 50,
        borderRadius : 10,
        backgroundColor : '#d47261',
        color : '#ffffff',
        elevation : 10,
        alignItems : 'center',
        justifyContent : 'center',
    },
    hr80 : {
        width : '100%',
        borderBottomWidth : 2,
        borderColor : '#d47261',
        marginVertical : 20,
    },
    container :{
        flex : 1,
        backgroundColor : '#fff',
        paddingHorizontal : 20,
    },
    heading : {
        color : '#000',
        fontSize : 30,
        textAlign : 'center',
        marginTop :  Platform.OS === 'ios' ? 100 : 70,
        fontFamily: 'Poppins-SemiBold'
    },
    normalText : {
        fontSize : 18,
        color: '#000',
        fontWeight: 'bold',
    },
}