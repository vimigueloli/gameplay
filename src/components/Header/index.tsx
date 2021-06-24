import React, {ReactNode} from 'react';
import { Text, Image, View} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';
import { theme } from '../../../global/styles/theme';
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
type Props ={
    title: string;
    action?: ReactNode;
    ajuste?: boolean;
}

export function Header({title, action, ajuste=false} : Props){
    const navigation= useNavigation();
    function voltar(){
        navigation.navigate('Home');
    }
    return(
        <LinearGradient style = {styles.container}  colors= {[theme.colors.background, theme.colors.destaque3]}>
            <BorderlessButton onPress={voltar}>
                <Feather  name='arrow-left' size={24} color={theme.colors.reading} />
            </BorderlessButton>
            {
                ajuste === true ?
                <Text style={styles.title1}  >
                    {title}
                </Text> :
                <Text style={styles.title}  >
                    {title}
                </Text> 
            }
            
            {
                action &&
                <View>
                    {action}
                </View>
            }
        </LinearGradient>  
    );
}