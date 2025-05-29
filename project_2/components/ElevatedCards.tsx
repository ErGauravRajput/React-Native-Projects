import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>More...</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>😂</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
     headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
        color:"#fff",
    },
    container:{
        padding:8,
    },
    card:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
    },
    elevatedCard:{
        backgroundColor:"#cad5e2",
        elevation:4,
        shadowOffset:{
            width:10,
            height:10,
        },
        shadowColor:"#333",
        shadowOpacity:0.5,
        shadowRadius:10,

    },
})