import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 75,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background3
    },

    title:{
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title500,
        fontSize: 20,
        color: theme.colors.reading,
        alignSelf: 'center',
    },

    title1:{
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title500,
        fontSize: 20,
        color: theme.colors.reading,
        alignSelf: 'center',
        paddingRight: 25
    }
});