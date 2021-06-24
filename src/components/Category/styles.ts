import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width:104,
        height:120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 15 
    },

    content:{
        width: 102,
        height: 118,
        borderRadius: 8,
        alignContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    },

    checked:{
        position: 'absolute',
        top: 7,
        right:7,
        width: 13,
        height: 13,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
    },

    check:{
        position: 'absolute',
        top: 7,
        right:7,
        width: 12,
        height: 12,
        backgroundColor: theme.colors.destaque2,
        borderRadius: 8,
        borderColor: theme.colors.primary,
        borderWidth: 0.75,
    },

    title:{
        fontFamily: theme.fonts.title500,
        color: theme.colors.reading,
        fontSize: 15
    }
});