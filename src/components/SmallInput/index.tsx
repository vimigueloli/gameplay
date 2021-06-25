import React from 'react';
import { TextInputProps, TextInput} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { styles } from './styles';


export function SmallInput({... rest} : TextInputProps){
    return(
        <TextInput style = {styles.container} keyboardType='number-pad' {...rest}/>
    );
}