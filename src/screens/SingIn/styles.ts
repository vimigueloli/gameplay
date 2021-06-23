import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    input:{
        height: 50,
        width: 200,
        borderBottomWidth: 2
    },

    title:{
        color: theme.colors.reading,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 45
    },

    subtitulo:{
        color: theme.colors.reading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        lineHeight: 100
    },

    conteudo:{
        marginTop: -40,
        paddingHorizontal: 50
    },

    image:{
        width: '100%',
        height: 450
    }

});

