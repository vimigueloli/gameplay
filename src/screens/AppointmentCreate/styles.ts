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
    label2:{
        fontSize: 17,
        fontFamily: theme.fonts.title700,
        color: theme.colors.reading,
        marginBottom: 5
        
    },
    form:{
        paddingHorizontal: 24,
        marginTop: 32,
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
    },
    field:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    texto:{
        fontFamily: theme.fonts.text500,
        color: theme.colors.reading,
        marginRight: 4,
        fontSize: 15
    },
    texto2:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.reading,
        marginRight: 4,
        fontSize: 13,
        opacity: 0.3
    },
    column:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    descricao:{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 5
    },
    botao:{
        marginVertical: 15,
        marginBottom: 45
    },
    teste:{
        color: theme.colors.reading
    }
});