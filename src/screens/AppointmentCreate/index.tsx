import React, {useState} from 'react';
import { View, Text, Platform,  ScrollView, KeyboardAvoidingView} from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { CategorySelection } from '../../components/CategorySelection';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../../global/styles/theme';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Botao } from '../../components/Botao';
import { ModalView } from '../../components/Modal';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Giuld';
import uuid from "react-native-uuid"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/storage';
import { useNavigation } from '@react-navigation/native';

export function AppointmentCreate(){
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
    const [day, setDay] = useState('');
    const [month, setMonh] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');
    const navigation = useNavigation();

    function openGuilds(){
        setOpen(true)
    }
    function selectGuild(guildSelected: GuildProps){
        setGuild(guildSelected);
        setOpen(false);  
    }
    function closeModal(){
        setOpen(false)
    }

    function handleCategorySelection(categoryId: string){
        setCategory(categoryId);
    }

    async function save(){
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}`,
            description
        };
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
        const appointments = storage ? JSON.parse(storage) :  []
        await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments,newAppointment]))
        navigation.navigate("Home")
    }
    
    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
        <View style={styles.container}>
            <Header title='AGENDAR PARTIDA' ajuste={true} />
            <Text style= {[styles.label, {marginBottom: 18, marginTop: 25}]}>
                CATEGORIA
            </Text>
            <View style={styles.lista}>
            <CategorySelection  hasCheck setCategory={handleCategorySelection} categorySelected={category} />
            </View>            
            <View style={styles.form}>
                <RectButton onPress={openGuilds}>
                    <View style={styles.select}>
                        {
                            guild.icon ?  <GuildIcon guildId={guild.id} iconId={guild.icon}  /> :
                            <View style={styles.image}/>
                            
                        }
                        <View style={styles.selectBody}>
                            <Text style={styles.label}> 
                                { guild.name ? guild.name : 'Selecione um Servidor'}
                            </Text>
                        </View>
                        <Feather name='chevron-right' color={theme.colors.reading} size={18}/>
                    </View>
                </RectButton>
                <View style= {styles.field}>
                    <View>
                        <Text style={styles.label2}>
                                DIA E MÊS
                        </Text>
                        <View style={styles.column}>
                            <SmallInput maxLength={2} onChangeText = {setDay}/>
                            <Text style={styles.texto}> / </Text>
                            <SmallInput maxLength={2} onChangeText = {setMonh}/>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.label2}>
                                HORARIO
                        </Text>
                        <View style={styles.column}>
                            <SmallInput maxLength={2} onChangeText = {setHour}/>
                            <Text style={styles.texto}> : </Text>
                            <SmallInput maxLength={2} onChangeText = {setMinute}/>
                        </View>
                    </View>
                </View>
                <View style={styles.descricao}>
                    <Text style={styles.label2}>DESCRIÇÃO</Text>
                    <Text style={styles.texto2}>Max 100 caracteres</Text>
                </View> 
                <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} onChangeText = {setDescription}/> 
                <View style={styles.botao}>
                        <Botao title='AGENDAR' onPress={save}/>
                </View>                           
            </View>
        </View>
        </ScrollView>
        <ModalView close={closeModal} visible={open}>
         <Guilds selectGuild={selectGuild}/>
        </ModalView>
        </KeyboardAvoidingView>
    );
}