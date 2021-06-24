import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";


export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    banner:{
        width: '100%',
        height: 275,
        marginBottom: 15
    },
    title:{
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.reading
    },
    subtitle:{
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.reading
    },
    content:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 15
    },
    members:{
        marginLeft: 24,
        marginTop: 24
    },
    botao:{
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 20
    }
});