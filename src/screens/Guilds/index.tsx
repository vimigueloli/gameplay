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
            owner: false
        },
        {
            id:'3',
            name:'Game Central',
            icon: 'image.png',
            owner: true
        },
        {
            id:'4',
            name:'otario',
            icon: null,
            owner: true
        },
        {
            id:'5',
            name:'otario',
            icon: null,
            owner: false
        },
        {
            id:'6',
            name:'otario',
            icon: null,
            owner: true
        },
        {
            id:'7',
            name:'otario',
            icon: null,
            owner: false
        }
    ];
    
    return(
        <View style={styles.container}>
            <FlatList  style={styles.guilds} ListHeaderComponent={() => <Divisor centro={true} />} contentContainerStyle={{paddingBottom: 30}} showsVerticalScrollIndicator={false} data={guilds} ItemSeparatorComponent={() => <Divisor centro={true}/> } keyExtractor= {item => item.id} renderItem={({item}) => (<Guild onPress={() => selectGuild(item)} data={item}/>)} />
        </View>
    );
}