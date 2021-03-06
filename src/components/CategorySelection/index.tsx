import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type Props={
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheck?: boolean;
};

export function CategorySelection({categorySelected, setCategory, hasCheck = false}: Props){
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 40 }} style={styles.container}>
            
            {
                categories.map(category =>(
                    <Category  key={category.id} title={category.title} icon={category.icon} checked={ category.id === categorySelected} onPress={() => setCategory(category.id)} hasCheck={hasCheck}/>
                ))
            }
        </ScrollView>
    );
}