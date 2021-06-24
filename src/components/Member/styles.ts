import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title:{
        fontFamily: theme.fonts.title500,
        color: theme.colors.reading,
        fontSize: 18
    },
    status:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    statusName:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.destaque3,
        fontSize: 13
    },
    bullet:{
        width: 13,
        height: 13,
        borderRadius: 8,
        marginLeft: 8,
        marginRight: 9,
        borderWidth: 1,
        borderColor: theme.colors.destaque2,
    }
});