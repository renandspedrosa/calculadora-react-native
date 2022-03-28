import React from 'react'
import { StyleSheet,Text,View } from 'react-native'


export default props =>
    <View style={Style.display}>
        <Text style={Style.displayValue}>{props.value}</Text>
    </View>



const Style = StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.6)',
        alignItems:'flex-end'
    },
    displayValue:{
        fontSize:60,
        color:'#fff'
    }
})