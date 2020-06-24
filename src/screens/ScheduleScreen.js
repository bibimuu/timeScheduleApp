import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import Colors from "../constants/Colors";
import {Week} from "../components/Week";

const ScheduleScreen = props => {
  return (
    <>
      <Week/>
    </>
  )
};

ScheduleScreen.navigationOptions = navData => {
  return {
    headerTitle: "時間割",
    headerLeft: () => (
      <HeaderButtons>
        <Item
        title="切替"
        color={Colors.blue}
        onPress={()=>{}}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons>
        <Item
        title="設定"
        color={Colors.blue}
        onPress={()=>{}}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  HeaderButtonColor: {
    color: Colors.blue
  }
});

export {ScheduleScreen};