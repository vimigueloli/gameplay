import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width:104,
        height:120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },

    content:{
        width: 100,
        height: 116,
        backgroundColor: theme.colors.destaque,
        borderRadius: 8,
        alignContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7
    },

    checked:{
        width: 10,
        height: 10,
        backgroundColor: theme.colors.destaque2,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderRadius: 3,
    },

    check:{
        width: 10,
        height: 10,
        backgroundColor: theme.colors.destaque2,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderRadius: 3,
        borderColor: theme.colors.primary,
        borderWidth: 2,
    },

    title:{
        fontFamily: theme.fonts.title500,
        color: theme.colors.reading,
        fontSize: 15
    }
});