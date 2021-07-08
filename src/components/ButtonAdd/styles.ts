import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        height: 57,
        width: 57,
        backgroundColor: theme.colors.primary,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon:{
        color: theme.colors.reading,
    }
});