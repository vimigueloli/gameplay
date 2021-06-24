import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { SingIn } from "../screens/SingIn";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";
const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator headerMode="none" screenOptions={{cardStyle: {backgroundColor: 'transparent'}}}>
            <Screen name= "SingIn" component={SingIn}/>
            <Screen name= "Home" component={Home}/>
            <Screen name= "AppointmentDetails" component={AppointmentDetails}/>
            <Screen name= "AppointmentCreate" component={AppointmentCreate}/>
        </Navigator>
    )
}