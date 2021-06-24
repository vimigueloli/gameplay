import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles'
import { LinearGradient } from "expo-linear-gradient";
import { SvgProps } from 'react-native-svg'
import { theme } from '../../../global/styles/theme';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheck?: boolean;
    checked: boolean; 
};

export function Category({title,icon: Icon,hasCheck= false,checked = false, ...rest} : Props){
    return(
        <RectButton {...rest}>
            <LinearGradient style={styles.container} colors = {[theme.colors.destaque, theme.colors.destaque2]}>
                <LinearGradient style={[styles.content,{ opacity: checked ? 1:0.5}]} colors={[theme.colors.destaque2 , checked ? theme.colors.background3 : theme.colors.background2]} >
                    {
                        hasCheck &&
                        <View style={checked ? styles.checked: styles.check} />
                    }
                    <Icon width={48} height= {48} />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>  
    );
}