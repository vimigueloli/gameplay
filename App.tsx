import React from 'react';
import { useFonts} from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Oswald_700Bold, Oswald_500Medium  } from '@expo-google-fonts/oswald';
import { Routes } from './src/routes'
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';


export default function App(){
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Oswald_500Medium,
    Oswald_700Bold
  });
  
  if(!fontsLoaded){
    return <AppLoading />
  }

  return(
    <Background>
      <StatusBar barStyle="light-content" />
        < Routes/>
    </Background>
    );
} 