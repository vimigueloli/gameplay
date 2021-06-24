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
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={createAppointment}/>
            </View>
            <CategorySelection categorySelected={category} setCategory={handleCategorySelection} />
            <View style={styles.content}>
                <ListHeader title='PARTIDAS AGENDADAS' subtitle= 'total 6' />
                <FlatList style={styles.matches} showsVerticalScrollIndicator={false} data={appointments} keyExtractor ={item => item.id}  renderItem={({item})=> (<Appointments data={item} onPress={detalhes}/>)} ItemSeparatorComponent={() => <Divisor />}/>
            </View>
        </View>
    );
}