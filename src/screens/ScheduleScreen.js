import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const ScheduleScreen = props => {
  return (
    <View>
      <Text>aaaあいうえお</Text>
    </View>
  )
};

ScheduleScreen.navigationOptions = navData => {
  return {
    headerTitle: "時間割",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
        title="切替"
        onPress={()=>{}}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
        title="設定"
        onPress={()=>{}}
        />
      </HeaderButtons>
    )
  }
}

export {ScheduleScreen};