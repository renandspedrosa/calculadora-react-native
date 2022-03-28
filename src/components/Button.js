import React from "react"
import { StyleSheet, Text, TouchableHighlight, View, Dimensions } from "react-native"

export default props => {

  const stylesButton = [styles.button]
  if(props.double) stylesButton.push(styles.buttonDouble)
  if(props.triple) stylesButton.push(styles.buttonTriple)
  if(props.operation) stylesButton.push(styles.operationButton)
  return (
      <TouchableHighlight onPress={props.onClick}>
          <Text style={stylesButton}>{props.label}</Text>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
      backgroundColor: "#f0f0f0",
      height: Dimensions.get('window').width /4,
      width: Dimensions.get('window').width /4,
      textAlign: "center",
      padding: 20,
      borderWidth:1,
      borderColor:'#888',
      fontSize:40,
      color:'#888'  
  },
  operationButton:{
    color:'#fff',
    backgroundColor:'#fa8231'
  },
  buttonDouble:{
    width:(Dimensions.get('window').width/4)*2
  },
  buttonTriple:{
    width:(Dimensions.get('window').width/4)*3
  }
})
