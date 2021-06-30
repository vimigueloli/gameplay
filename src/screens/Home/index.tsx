import React, {useState, useCallback} from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/profile';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelection } from '../../components/CategorySelection';
import { Appointments, AppointmentProps } from '../../components/appointment';
import { Divisor } from '../../components/Divisor';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Background } from '../../components/Background';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/storage';
import { Load } from '../../components/Load';

export function Home(){
    const [category, setCategory] = useState("");
    const [loading, setLoading]= useState(true)
    const navigation = useNavigation();
    const [appointments, setAmppointments] = useState<AppointmentProps[]>([])

    function handleCategorySelection(categoryId: string){
        categoryId === category ? setCategory(""): setCategory(categoryId);
    }
    function detalhes(appointmentSel: AppointmentProps){
        navigation.navigate('AppointmentDetails',{appointmentSel})
    }
    function createAppointment(){
        navigation.navigate('AppointmentCreate')
    }
    async function loadAppointments(){
        const storage= await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
        const response: AppointmentProps[] = storage ? JSON.parse(storage): []
        if(category){
            setAmppointments(response.filter(item => item.category === category))
        }else{
            setAmppointments(response)
        }
        setLoading(false)
    }

    useFocusEffect(useCallback(()=>{loadAppointments()},[category]))

    return(
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={createAppointment}/>
            </View>
            <View >
            <CategorySelection  categorySelected={category} setCategory={handleCategorySelection} />
            </View>

            {
                loading ? <Load/> :
                <>  
                    <View style={styles.content}>
                        <ListHeader title='PARTIDAS AGENDADAS' subtitle= {`total ${appointments.length}`} />
                    </View>
                    <FlatList contentContainerStyle={{paddingBottom: 30}} style={styles.matches} showsVerticalScrollIndicator={false} data={appointments} keyExtractor ={item => item.id}  renderItem={({item})=> (<Appointments data={item} onPress={() => detalhes(item)}/>)} ItemSeparatorComponent={() => <Divisor />}/>
                </>
            }
        </Background>
    );
}