import React, {useState} from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/profile';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelection } from '../../components/CategorySelection';
import { Appointments } from '../../components/appointment';
import { Divisor } from '../../components/Divisor';
import { GuildProps} from '../../components/Giuld'
import { useNavigation } from '@react-navigation/native';
import { Guild } from '../../components/Giuld';

type Props ={
    selectGuild: (guild: GuildProps) => void;
}

export function Guilds({selectGuild}: Props){
    const guilds =[
        {
                id:'1',
                name:'Game Central',
                icon: 'image.png',
                owner: true
        },
        {
            id:'2',
            name:'otario',
            icon: null,
            owner: true
        }
    ];
    
    return(
        <View style={styles.container}>
            <FlatList style={styles.guilds} showsVerticalScrollIndicator={false} data={guilds} ItemSeparatorComponent={() => <Divisor/> } keyExtractor= {item => item.id} renderItem={({item}) => (<Guild onPress={() => selectGuild(item)} data={item}/>)} />
        </View>
    );
}