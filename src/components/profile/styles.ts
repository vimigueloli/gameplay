import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    user:{
        flexDirection: 'row',
    },

    greeting:{
        fontFamily: theme.fonts.text400,
        fontSize: 22,
        color: theme.colors.reading,
        marginRight: 5,
    },

    username:{
        fontFamily: theme.fonts.text500,
        fontSize: 22,
        color: theme.colors.reading
    },

    message:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.reading
    }
});