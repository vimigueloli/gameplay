import React, {useState} from 'react';
import { View, FlatList, Text, ImageBackground } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ListHeader } from '../../components/ListHeader';
import { theme } from '../../../global/styles/theme';
import Banner from '../../assets/banner.png';
import { Members } from '../../components/Member';
import { Divisor } from '../../components/Divisor';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/appointment';
import { api } from '../../services/api';

type Params = {
    appointmentSel: AppointmentProps
}

export function AppointmentDetails(){
    const route = useRoute()
    const {appointmentSel} = route.params as Params
    const members =[
        {
            id: '1',
            username: 'Victor',
            url: 'https://github.com/vimigueloli.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Victor',
            url: 'https://github.com/vimigueloli.png',
            status: 'offline'
        }

    ]
    async function fetchGuildInfo(){
        try{
            const response = await api.get(`./guilds/${appointmentSel.guild.id}/widget.json`)
        }catch{
            
        }
    }
    return(
        <View style={styles.container}>
            <Header title='DETALHES' action={<BorderlessButton><Fontisto  name='share' size={24} color={theme.colors.reading}/></BorderlessButton> } />
            <ImageBackground source={Banner} style={styles.banner}>
                <View style= {styles.content}>
                    <Text style={styles.title}>
                        {appointmentSel.guild.name}
                    </Text>
                    <Text style={styles.subtitle}>
                        {appointmentSel.description}
                    </Text>
                </View> 
            </ImageBackground>
            <ListHeader title='Jogadores' subtitle='total 3'/>
            <FlatList style={styles.members} data={members} keyExtractor={item => item.id} renderItem={({item}) => (<Members data ={item}/>)} ItemSeparatorComponent={() => <Divisor centro={true}/>}/>
            <View style={styles.botao}>    
                <ButtonIcon title='ENTRAR NA PARTIDA' />
            </View>
        </View>
    );
}