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

export function AppointmentDetails(){
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
    return(
        <View style={styles.container}>
            <Header title='DETALHES' action={<BorderlessButton><Fontisto  name='share' size={24} color={theme.colors.reading}/></BorderlessButton> } />
            <ImageBackground source={Banner} style={styles.banner}>
                <View style= {styles.content}>
                    <Text style={styles.title}>
                        LENDÁRIOS
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View> 
            </ImageBackground>
            <ListHeader title='Jogadores' subtitle='total 3'/>
            <FlatList style={styles.members} data={members} keyExtractor={item => item.id} renderItem={({item}) => (<Members data ={item}/>)} ItemSeparatorComponent={() => <Divisor />}/>
            <View style={styles.botao}>    
                <ButtonIcon title='ENTRAR NA PARTIDA' />
            </View>
        </View>
    );
}