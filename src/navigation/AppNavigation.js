import React from 'react';
import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import BookedScreen from '../screens/BookedScreen';
import CreateScreen from '../screens/CreateScreen';
import AboutScreen from '../screens/AboutScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { THEME } from '../theme';
import AppCameraIcon from '../components/AppCameraIcon';
import AppLogo from '../components/AppLogo';
import AppStarIcon from '../components/AppStarIcon';
import { Ionicons } from '@expo/vector-icons'

const navConfig = {
  headerStyle: {
    backgroundColor: THEME.MAIN_COLOR
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'coming-soon'
  },
}


const PostNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={navConfig}>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'My great Blog',
          headerRight: () => <AppCameraIcon />,
          headerLeft: () => <AppLogo />,
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          title: `Post by ${new Date(route.params?.date).toLocaleDateString()}`,
          headerRight: () => <AppStarIcon />,
        })
        }
      />
    </Stack.Navigator>
  )
}


const BookedNavigator = () => {
  const BookedStack = createStackNavigator();

  return (
    <BookedStack.Navigator screenOptions={navConfig} >
      <BookedStack.Screen
        name="Booked"
        component={BookedScreen}
        options={{
          title: 'Marked posts',
          headerLeft: () => <AppLogo />,
        }}
      />
      <BookedStack.Screen
        name="Post"
        component={PostScreen}
        options={() => {
          return {
            title: 'Post',
            headerRight: () => <AppStarIcon />,
          }
        }
        }
      />
    </BookedStack.Navigator>
  )
}

function BottomNavigator() {
  const Tab = createMaterialBottomTabNavigator()

  return (
    <Tab.Navigator
      shifting={true}
      activeColor='#fff'
      barStyle={{ backgroundColor: THEME.MAIN_COLOR }}
    >
      <Tab.Screen
        name="Main"
        component={PostNavigator}
        options={{
          tabBarIcon: config => <Ionicons
            name='ios-albums'
            size={25}
            color={config.color} />,
          tabBarLabel: 'All'
        }}
      />
      <Tab.Screen
        name="Booked"
        component={BookedNavigator}
        options={{
          tabBarIcon: config => <Ionicons
            name='ios-star'
            size={25}
            color={config.color} />,
          tabBarLabel: 'Marked'
        }}
      />
    </Tab.Navigator>
  )
}

function AboutNavigator() {
  const About = createStackNavigator();

  return <About.Navigator screenOptions={navConfig}>
    <About.Screen
      name="About"
      component={AboutScreen}
      options={{
        title: 'About App',
        headerLeft: () => <AppLogo />,
      }}
    />
  </About.Navigator>
}

function CreateNavigator() {
  const Create = createStackNavigator();

  return <Create.Navigator screenOptions={navConfig}>
    <Create.Screen
      name="Create"
      component={CreateScreen}
      options={{
        title: 'Create new post',
        headerLeft: () => <AppLogo />,
      }}
    />
  </Create.Navigator>
}


export default function AppNavigation() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: THEME.MAIN_COLOR,
          activeBackgroundColor: '#cbe6ef',
          labelStyle: {
            paddingVertical: 5,
            fontFamily: 'coming-soon',
            fontSize: 18
          },
          contentContainerStyle: {
            flex: 1,
            backgroundColor: '#ebf1f8'
          }
        }}
      >
        <Drawer.Screen name="PostTabs" component={BottomNavigator}
          options={{
            title: 'Main page',
            drawerIcon: ({ color }) => <Ionicons name='ios-apps' size={24} color={color} />
          }} />
        <Drawer.Screen name="Create" component={CreateNavigator}
          options={{
            title: 'Create post',
            drawerIcon: ({ color }) => <Ionicons name='ios-create' size={24} color={color} />
          }}
        />
        <Drawer.Screen name="About" component={AboutNavigator}
          options={{
            title: 'About app',
            drawerIcon: ({ color }) => <Ionicons name='ios-information' size={24} color={color} />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
