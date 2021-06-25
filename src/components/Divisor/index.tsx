import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props ={
    centro?: boolean;
}


export function Divisor({centro = false} : Props){
    return(
        <View style = {[styles.container, centro ? {marginVertical:10, width: '100%'}: {marginTop:0, marginBottom: 15, width: '80%' }]} /> 
    );
}