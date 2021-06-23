import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';
import { categories } from '../../utils/categories';
import Player from '../../assets/player.svg';
import Calendario from '../../assets/calendar.svg';
import { theme } from '../../../global/styles/theme';

export type GuildProps = {
    id: string,
    name: string
    icon: null,
    owner: boolean
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props= RectButtonProps &{
    data: AppointmentProps;
};


export function Appointments({data, ...rest} : Props){
    const [category] = categories.filter(item => item.id === data.category)  
    const {owner} = data.guild;
    return(
        <RectButton {...rest}>
            <View style={styles.container} >
                <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>
                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>
                        <View style={styles.footer}>
                            <View style={styles.dateInfo}>
                                <Calendario />
                                <Text style={styles.date}>
                                    {data.date}
                                </Text>
                            </View>
                        
                        <View style={styles.playersInfo}>
                            <Player  fill={owner ? theme.colors.primary : theme.colors.on}/>
                            <Text style={[styles.player, {color: owner ? theme.colors.primary : theme.colors.on}]}>
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                        
                    </View>
                </View>
            </View>
        </RectButton>
    );
}