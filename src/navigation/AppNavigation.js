import React from 'react';
import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { THEME } from '../theme';

const AppNavigation = () => {
  const Stack = createStackNavigator();

  return (<NavigationContainer>
    <Stack.Navigator
      initialRouteName='Main'
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'coming-soon'
        },
      }}>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'My Blog',
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          title: `Post by ${new Date(route.params?.date).toLocaleDateString()}`,
        })
        }
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigation

