import React from 'react';

import type {PropsWithChildren} from 'react';
import {View ,Text,StyleSheet} from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>;

const currencyButton=(props:CurrencyButtonProps):JSX.Element=>{
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    buttonContainer:{
            alignItems: 'center',
            
    },
    flag:{
        fontSize:28,
        color:"#fff",
        marginBottom: 4,
    },
    country:{
        fontSize:14,
        color:"#000",
        marginBottom: 4,
        fontWeight: 'bold',
    }
})

export default currencyButton;