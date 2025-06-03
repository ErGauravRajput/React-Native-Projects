import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PropsWithChildren, useState } from 'react'
import React from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";


import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps=PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice=({imageUrl}: DiceProps):JSX.Element =>{
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}
export default function App() {
  const [diceImage,setDiceImage]=useState<ImageSourcePropType>(DiceOne);
  const rollDiceTap=()=>{
    const randomNumber=Math.floor(Math.random()*6)+1;
    switch(randomNumber){
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;  
    }

    ReactNativeHapticFeedback.trigger("impactLight", options);

  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <TouchableOpacity onPress={rollDiceTap}>
        <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#81cff4',
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
    textTransform: 'uppercase',
    marginTop: 20,
    backgroundColor: '#ebd197',
  },
})