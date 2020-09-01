import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import React from 'react' ///Utilizar sempre que for utilizar JSX
import {NavigationContainer} from '@react-navigation/native' // Recupera o container de navegação pra rotas
import { createStackNavigator } from '@react-navigation/stack' //Recupera o modelo de navegação stack



const AppStack = createStackNavigator()

import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

export default function Routes(){

    return (

        <NavigationContainer>


            <AppStack.Navigator screenOptions={{headerShown: false}}>


                <AppStack.Screen name="Incident" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />

            </AppStack.Navigator>

        </NavigationContainer>


    )

}