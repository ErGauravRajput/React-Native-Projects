import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
        style={styles.cardImage}
        source={{
            uri:"https://cdn.britannica.com/25/242225-050-72142DF7/Front-facade-of-Palace-of-the-Winds-Hawa-Mahal-Jaipur-Rajasthan-India.jpg"
        }}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City,Jaipur, Rajasthan, India</Text>
            <Text style={styles.cardDescription}>
                Hawa Mahal, or the Palace of Winds, is a stunning architectural marvel in Jaipur, India. 
                Built in 1799, it features a unique honeycomb structure with 953 small windows, 
                allowing cool breezes to flow through and keeping the palace comfortable in the hot desert climate.
            </Text>
            <Text style={styles.cardFooter}>12 min away</Text>
        </View>
      </View>
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
    card:{
        width:385,
        height:360,
        borderRadius:8,
        marginVertical:12,
        marginHorizontal:12,
    },
    elevatedCard:{
        backgroundColor:"#fff",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:"#fff",
        shadowOpacity:0.5,
        shadowRadius:10,

    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:"#000",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:4,
    },
    cardLabel:{
        color:"#000",
        fontSize:14,
        marginBottom:5,
    },
    cardDescription:{
        color:"#000",
        fontSize:12,
        marginBottom:10,
    },
    cardFooter:{
        color:"#000",
    },
})