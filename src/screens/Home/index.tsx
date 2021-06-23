import React, {useState} from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelection } from '../../components/CategorySelection';

export function Home(){
    const [category, setCategory] = useState("");
    function handleCategorySelection(categoryId: string){
        categoryId === category ? setCategory(""): setCategory(categoryId);
    }
    return(
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelection categorySelected={category} setCategory={handleCategorySelection} />
            
        </View>
    );
}