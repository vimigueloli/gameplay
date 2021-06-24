import React, {useState} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { CategorySelection } from '../../components/CategorySelection';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../../global/styles/theme';
import { GuildIcon } from '../../components/GuildIcon';

export function AppointmentCreate(){
    const [category, setCategory] = useState("");
    return(
        <View style={styles.container}>
            <Header title='AGENDAR PARTIDA' ajuste={true} />
            <Text style= {[styles.label, {marginBottom: 18, marginTop: 25}]}>
                Categoria
            </Text>
            <View style={styles.lista}>
            <CategorySelection  hasCheck setCategory={setCategory} categorySelected={category} />
            </View>            
            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        {
                            //<View style={styles.image}/>
                            <GuildIcon  />
                        }
                        <View style={styles.selectBody}>
                            <Text style={styles.label}> Selecione um Servidor</Text>
                        </View>
                        <Feather name='chevron-right' color={theme.colors.reading} size={18}/>
                    </View>
                </RectButton>
            </View>
        </View>
    );
}