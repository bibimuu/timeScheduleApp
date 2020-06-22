import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useScreens} from "react-native-screens"
import {AppLoading} from "expo";
import * as Font from "expo-font";

import BottomTabNavigator from "./src/navigation/scheduleNavigators";
import {ScheduleScreen} from "./src/screens/ScheduleScreen";

useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans" : require("./assets/Fonts/OpenSans-Regular.ttf"),
    "open-sans-bold" : require("./assets/Fonts/OpenSans-Bold.ttf")
  });
}

export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false);
  if(!fontLoaded){
    return (
    <AppLoading 
    startAsync={fetchFonts} 
    onFinish={()=>setFontLoaded(true)}
    style={styles.container}
    />
    );
  }

  return (
      <BottomTabNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bold: {
    fontFamily: "open-sans-bold"
  }
});
