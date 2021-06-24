import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles/theme";


export const styles = StyleSheet.create({
    container:{
        flex: 1, 
        
    },
    label:{
        fontSize: 17,
        fontFamily: theme.fonts.title700,
        color: theme.colors.reading,
        paddingHorizontal: 24,
        
    },
    form:{
        paddingHorizontal: 24,
        marginTop: 32,
        alignItems: 'center'
    },
    lista:{
        marginBottom: 25,        
    },
    select:{
        width: '100%',
        height: 70,
        flexDirection: 'row',
        borderColor: theme.colors.destaque,
        borderWidth: 1,
        borderRadius: 8,
        paddingRight: 25,
        alignItems: 'center',
        overflow:  'hidden',
        

    },
    selectBody:{
        flex: 1,
        alignItems: 'center',
        paddingBottom: 8,       
    },
    image:{
        width: 68,
        height: 68,
        backgroundColor: theme.colors.destaque,
        borderRadius:7,
    }
});