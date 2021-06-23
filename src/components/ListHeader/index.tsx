import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { styles } from './styles';

type Props={
    title: string;
    subtitle: string;
}


export function ListHeader({title, subtitle} : Props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        </View>
    );
}