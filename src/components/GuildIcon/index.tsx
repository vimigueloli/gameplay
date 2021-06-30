import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import {CDN_IMAGE} from "../../configs"
import DiscordSVG from "../../assets/discord.svg"

type Props ={
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({iconId, guildId}: Props){
    const uri =`${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
    return(
        <View style= {styles.container}>
            {
                iconId ?
                <Image source={{uri}} resizeMode='cover'style={styles.image} /> :
                <DiscordSVG width = {45} height={45} />           }
        </View>
    );
}