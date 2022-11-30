import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes, { AppContainer } from './stack.routes';
import { createAppContainer } from 'react-navigation';

export default function IndexRoutes() {
    return (
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>

        // <NavigatorContainer>
        //     <StackRoutes />
        // </NavigatorContainer>
    );
}