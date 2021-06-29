import React, {useContext} from 'react';
import { Text, View, Image, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useAuth} from '../../context/auth';
import { theme } from '../../../global/styles/theme';

export function SingIn(){
    
    const {loading, singIn} = useAuth();


    async function handleSingIn(){
        try{
            await singIn();
        } catch(error){
            Alert.alert(error);
        }
    }

    return(
        <View style = {styles.container}>
            
            <Image source={IllustrationImg} style= {styles.image} resizeMode = "stretch" />

            <View style={styles.conteudo}>
                <Text style={styles.title}>
                    ORGANIZE SEU TIME {`\n`}
                    E SUAS JOGATINAS
                </Text>
                <Text style={styles.subtitulo}>
                    Forme equipes para jogar seus jogos favoritos
                </Text>
                { loading ? <ActivityIndicator color={theme.colors.primary} /> : <ButtonIcon title="Entrar com o Discord" onPress={handleSingIn} />}
            </View>
        </View>
    );
}