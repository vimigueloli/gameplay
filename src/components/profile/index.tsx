import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../avatar";
import { useAuth } from "../../context/auth";

export function Profile(){
    const {user} = useAuth();
    return(
        <View style= {styles.container}>
            <Avatar urlImage={user.avatar}/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message}>
                    hoje é dia de vitória
                </Text>
            </View>
        </View>
    )
}