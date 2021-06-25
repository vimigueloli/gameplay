import React, {useState} from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/profile';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelection } from '../../components/CategorySelection';
import { Appointments } from '../../components/appointment';
import { Divisor } from '../../components/Divisor';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';

export function Home(){
    const [category, setCategory] = useState("");
    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild:{
                id:'1',
                name:'Game Central',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'é hoje que vamos ao challenger sem perder uma partida da m10'
        },
        {
            id: '2',
            guild:{
                id:'1',
                name:'Game Central',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'é hoje que vamos ao challenger sem perder uma partida da m10'
        },
        {
            id: '3',
            guild:{
                id:'1',
                name:'Game Central',
                icon: null,
                owner: true
            },
            category: '4',
            date: '22/06 às 20:40',
            description: 'é hoje que vamos ao challenger sem perder uma partida da m10'
        },
        {
            id: '5',
            guild:{
                id:'1',
                name:'Game Central',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'é hoje que vamos ao challenger sem perder uma partida da m10'
        },
        {
            id: '6',
            guild:{
                id:'1',
                name:'Game Central',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'é hoje que vamos ao challenger sem perder uma partida da m10'
        },
        {
            id: '7',
            guild:{
                id:'1',
                name:'Game Central',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'é hoje que vamos ao challenger sem perder uma partida da m10'
        },
        {
            id: '8',
            guild:{
                id:'1',
                name:'Game Central',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40',
            description: 'é hoje que vamos ao challenger sem perder uma partida da m10'
        }
    ]

    function handleCategorySelection(categoryId: string){
        categoryId === category ? setCategory(""): setCategory(categoryId);
    }
    function detalhes(){
        navigation.navigate('AppointmentDetails')
    }
    function createAppointment(){
        navigation.navigate('AppointmentCreate')
    }
    return(
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={createAppointment}/>
            </View>
            <View >
            <CategorySelection  categorySelected={category} setCategory={handleCategorySelection} />
            </View>
            <View style={styles.content}>
                <ListHeader title='PARTIDAS AGENDADAS' subtitle= 'total 6' />
            </View>
            <FlatList contentContainerStyle={{paddingBottom: 30}} style={styles.matches} showsVerticalScrollIndicator={false} data={appointments} keyExtractor ={item => item.id}  renderItem={({item})=> (<Appointments data={item} onPress={detalhes}/>)} ItemSeparatorComponent={() => <Divisor />}/>
        </Background>
    );
}