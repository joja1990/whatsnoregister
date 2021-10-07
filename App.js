import 'react-native-gesture-handler';
import React from 'react';
import {Root} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack =createStackNavigator();
import Inicio from './views/Inicio';
import MenuLateral from './views/menuLateral';
 
 
const App = () => {
  

  return (
     
    <>
    <Root>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{
          title:"Inicio",
          headerShown:false
        }}
        />

      <Stack.Screen
              name="MenuLateral"
              component={MenuLateral}
              options={{
                title:"MenuLateral",
                headerShown:false
              }}
              />


      </Stack.Navigator>
      </NavigationContainer>
      </Root>
      </>
  );
};
 

export default App;
