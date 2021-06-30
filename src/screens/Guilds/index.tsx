import React, {useState, useEffect} from 'react';
import { View, FlatList, Text } from 'react-native';
import { Load } from '../../components/Load';
import { styles } from './styles';
import { Divisor } from '../../components/Divisor';
import { GuildProps} from '../../components/Giuld'
import { Guild } from '../../components/Giuld';
import { api } from '../../services/api';

type Props ={
    selectGuild: (guild: GuildProps) => void;
}

export function Guilds({selectGuild}: Props){
    const [guilds,setGuilds] = useState<GuildProps[]>([]);  
    const [loading, setLoading]= useState(true)  
    async function fetchGuilds(){
        const response = await api.get('/users/@me/guilds')
        setGuilds(response.data)
        setLoading(false)
    }

    useEffect(()=>{
        fetchGuilds()
    },[])

    return(
        <View style={styles.container}>
            {
                loading ? <Load/> :
                <FlatList  style={styles.guilds} ListHeaderComponent={() => <Divisor centro={true} />} contentContainerStyle={{paddingBottom: 30}} showsVerticalScrollIndicator={false} data={guilds} ItemSeparatorComponent={() => <Divisor centro={true}/> } keyExtractor= {item => item.id} renderItem={({item}) => (<Guild onPress={() => selectGuild(item)} data={item}/>)} />
            }  
        </View>
    );
}