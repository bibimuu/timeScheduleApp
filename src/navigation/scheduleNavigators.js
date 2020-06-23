import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import {ScheduleScreen} from "../screens/ScheduleScreen";
import {UserScreen} from "../screens/UserScreen";
import Colors from "../constants/Colors";


const defaultStackNavOptions = {
      headerStyle:{
        backgroundColor: Colors.white
      },
      headerTitleStyle:{
        fontFamily:"open-sans-bold"
      },
      headerBackTitleStyle:{
        fontFamily:"open-sans"
      },
      headerTintColor: Colors.black
    };

const MainNavigator = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen
  }
},
{
  defaultNavigationOptions:defaultStackNavOptions
})

const UserNavigator = createStackNavigator({
  Schedule: {
    screen: UserScreen
  }
},
{
  defaultNavigationOptions:defaultStackNavOptions
})

const tabScreenConfig = {
  Schedules:{
    screen:MainNavigator, 
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="md-calendar" size={24} color={tabInfo.tintColor} />
        );
      },
      tabBarLabel: "時間割"
    }
  },
  Users:{
    screen:UserNavigator,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="md-person" size={24} color={tabInfo.tintColor} />
        );
      },
      tabBarLabel: "プロフィール"
    }
  }
}

const BottomTabNavigator = createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions:{
    labelStyle:{
      fontFamily:"open-sans"
    },
    activeTintColor: Colors.blue,
    inactiveTintColor: Colors.gray
  }
});

export default createAppContainer(BottomTabNavigator);