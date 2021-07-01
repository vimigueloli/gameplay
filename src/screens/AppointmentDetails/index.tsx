import React, {useState, useEffect} from 'react';
import { View, FlatList, Text, ImageBackground, Alert } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ListHeader } from '../../components/ListHeader';
import { theme } from '../../../global/styles/theme';
import Banner from '../../assets/banner.png';
import { MemberProps, Member } from '../../components/Member';
import { Divisor } from '../../components/Divisor';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/appointment';
import { api } from '../../services/api';
import {Load} from '../../components/Load'
 
type Params = {
    appointmentSel: AppointmentProps
}
type GuildWidget ={
    id: string
    name: string
    instant_invite: string
    members: MemberProps[]
    presence_count: number
}


export function AppointmentDetails(){
    const route = useRoute()
    const {appointmentSel} = route.params as Params
    const [data, setData] = useState<GuildWidget>({} as GuildWidget)
    const [loading, setLoading]= useState(true)
    async function fetchGuildInfo(){
        try{
            const response = await api.get(`guilds/${appointmentSel.guild.id}/widget.json`)
            setData(response.data)
            Alert.alert(`${data.id}`)
            console.log(data.members.keys)
            
        }catch{
            Alert.alert('Falha ao obter jogadores')
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=> {fetchGuildInfo()},[])

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

            { 
                loading ? <Load /> :
                <>
                    <ListHeader title='Jogadores' subtitle='total 3'/>
                    <View >
                        <FlatList style={styles.members} data={data.members} keyExtractor={item => item.id} renderItem={({item}) => (<Member data ={item}/>)} ItemSeparatorComponent={() => <Divisor centro={true}/>}/>:
                    </View>
                </>
            }
            <View style={styles.botao}>    
                <ButtonIcon title='ENTRAR NA PARTIDA' />
            </View>
        </View>
    );
}