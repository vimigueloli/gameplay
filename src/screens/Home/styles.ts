import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    header:{
        width: '100%',
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },

    content:{
        marginTop: 15,
    },

    matches:{
        marginTop: 24,
        marginLeft: 24,        
    }
});