import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 150
    },
    overlay:{
        flex: 1,
        backgroundColor: theme.colors.overlay
    },
    bar:{
        width: 55,
        height: 4,
        borderRadius: 4,
        backgroundColor: theme.colors.destaque3,
        alignSelf: 'center',
        marginTop: 13,

    }
});