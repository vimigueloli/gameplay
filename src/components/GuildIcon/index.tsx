import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { styles } from './styles';


export function GuildIcon(){
    const uri ='https://cdn.tugatech.com.pt/imagens/topicos/tugatech-2020-06-21-f82b8ee1-b6fb-42bc-8f5e-fa4c2e9be063.jpg'
    return(
        <Image source={{uri}} resizeMode='cover'style={styles.image} />
    );
}