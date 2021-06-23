import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/native';

export function SingIn(){
    const rotas = useNavigation();

    function handleSingIn(){
        rotas.navigate('Home')
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
                <ButtonIcon title="Entrar com o Discord" onPress={handleSingIn} />
            </View>
        </View>
    );
}