import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './components/Home';
import Page2 from './components/Page2';
import ImgPicker from './components/ImgPicker';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'ios-home'
                    : 'ios-home';
                } 
                else if(route.name === 'Page2') {
                  iconName = focused ? 'ios-newspaper' : 'ios-newspaper';
                }
                else if(route.name === 'Immagine') {
                  iconName = focused ? 'ios-image' : 'ios-image';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#004489',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Home" component={Home} /> 
            <Tab.Screen name="Page2" component={Page2} />
            <Tab.Screen name="Immagine" component={ImgPicker} />
          </Tab.Navigator>
        </NavigationContainer>

    );
  }
}
