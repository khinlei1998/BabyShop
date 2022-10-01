
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import WelcomeScreen from './src/view/WelcomeScreen';
import ActionFigureScreen from './src/view/ActionFigureScreen';
import MarvelLegendsScreen from './src/view/MarvelLegendsScreen';
import MapScreen from './src/view/MapScreen';
import PonyPrincessScreen from './src/view/PonyPrincessScreen';
const App = () => {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ActionFigureScreen"
          component={ActionFigureScreen}
          options={{
            title: 'Action Figures',
            headerStyle: {
              backgroundColor: '#0B0B45',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen
          name="Marvel Legends"
          component={MarvelLegendsScreen}
          options={{
            headerStyle: {
              backgroundColor: '#0B0B45',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: 'You can by here...',
            headerStyle: {
              backgroundColor: '#0B0B45',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor: '#fff'
          }}

        />

        <Stack.Screen
          name="Ponyscreen"
          component={PonyPrincessScreen}
          options={{
            title: 'Pony Priincess',
            headerStyle: {
              backgroundColor: '#0B0B45',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor: '#fff'
          }}

        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};
export default App;
