import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TempDateScreen from '../screens/TempDateScreen';
import ContactosScreen from '../screens/ContactosScreen';
import VerHoraScreen from '../screens/VerHoraScreen';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="TempDateScreen"
          component={TempDateScreen}
        />
        <Stack.Screen
          name="ContactosScreen"
          component={ContactosScreen}
        />
        <Stack.Screen
          name="VerHoraScreen"
          component={VerHoraScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;