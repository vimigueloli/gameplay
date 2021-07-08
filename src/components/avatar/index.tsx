import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { styles } from "./styles";
import { theme } from "../../../global/styles/theme";

type Props = {
    urlImage: string;
}

export function Avatar({urlImage}: Props) {
    return(
        <LinearGradient style={styles.container} colors = {[theme.colors.destaque2, theme.colors.destaque3]}>
            <Image source={{uri : urlImage}} style={styles.avatar}/>    
        </LinearGradient>
    )
}