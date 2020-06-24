import React, { version } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View} from "react-native";
  import {useSelector} from "react-redux"

  const Week = props => {
    const pickedWeek = useSelector(state=>state.week.week);
    const eachWeek = pickedWeek.map(element => {
     return element.day;
    });
    return (
      <View style={styles.Container}>
        <Text style={styles.text}>{eachWeek}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    Container: {
      alignItems: "center",
      justifyContent: "center",
      margin: 15
    },
    text: {
      justifyContent: "space-around"
    }
  });

  export {Week};
