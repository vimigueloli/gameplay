import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    content:{
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.reading,
        fontSize: 18,
        marginBottom: 5,
    },
    type:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.background3,
        fontSize: 13,
        marginTop: 10,
        opacity: 0.75
    },
    textos:{
        justifyContent: 'flex-end',
        paddingLeft: 10
    }
});