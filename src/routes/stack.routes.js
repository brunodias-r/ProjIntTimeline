import React, { Component } from 'react';
import createStackNavigator, { createAppContainer } from 'react-navigation';
import AtividadeEstudoPrevioScreen from '../components/atividadeEstudoPrevio/index.js';
import TimelineSessoesScreen from '../screens/TimelineSessoesScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoTimelineSessoesScreen from '../screens/InfoTimelineSessoesScreen.js';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Sessões"
                component={TimelineSessoesScreen}
            />

            <Stack.Screen
                name="Informações"
                component={InfoTimelineSessoesScreen}
            />

        </Stack.Navigator>
    );
}


// export default function StackRoutes(){

//     const AppNavigator = createStackNavigator(
//         {
//             Home: {
//                 screen: TimelineSessoesScreen
//             }
//         }
//     )    
    
// }