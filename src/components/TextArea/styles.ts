import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        height: 95,
        width: '100%',
        backgroundColor: theme.colors.background3,
        color: theme.colors.reading,
        borderRadius: 8,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        padding: 16,
        textAlignVertical: 'top'
    },
});