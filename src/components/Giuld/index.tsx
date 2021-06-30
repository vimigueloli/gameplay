import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text , View } from "react-native";
import { styles} from "./styles";
import { GuildIcon } from "../GuildIcon";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../../global/styles/theme";

export type GuildProps ={
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type Props = TouchableOpacityProps & {
    data: GuildProps;
}

export function Guild({data, ...rest}: Props){
    return(
        <TouchableOpacity style={styles.container} {...rest}>
            <GuildIcon  guildId={data.id} iconId={data.icon}/>
            <View style={styles.content}>
                <View style={styles.textos}>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>
                    <Text style={styles.type}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
            </View>
            <Feather name='chevron-right' color={theme.colors.reading} size={24}/>
        </TouchableOpacity>
    );
}