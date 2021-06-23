import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../avatar";

export function Profile(){
    return(
        <View style= {styles.container}>
            <Avatar urlImage="http://github.com/vimigueloli.png"/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Rodrigo
                    </Text>
                </View>
                <Text style={styles.message}>
                    hoje é dia de vitória
                </Text>
            </View>
        </View>
    )
}