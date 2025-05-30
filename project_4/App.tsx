import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [bgColor,setBgColor]=useState("#ffffff");

  const generateColor=()=>{
    let color="#";
    const colorCode="0123456789ABCDEF";
    for(let i=0;i<6;i++){
      const randomIndex=Math.floor(Math.random()*16);
      const randomChar=colorCode[randomIndex];
      color+=randomChar;
    }
    setBgColor(color);
  }
  return (
    <>
      <StatusBar backgroundColor={bgColor}/>
      <View style={[styles.container,{backgroundColor:bgColor}]} >
      <TouchableOpacity onPress={()=>generateColor()}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>Press Me</Text>
        </View>
      </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  actionBtn: {
    backgroundColor: '#6200ee',
    padding: 25,
    borderRadius: 12,
    borderColor: '#000000',
    borderWidth: 4,

  },
  actionBtnText: {
    fontSize:20,
    color: '#fff',
    fontWeight: 'bold',
    // textTransform: 'uppercase',
  }
  
})