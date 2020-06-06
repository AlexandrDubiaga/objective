import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../theme";


export const SettingsScreens = ({route, navigation}) => {
  navigation.setOptions({
    title: "Settings",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    headerTitleStyle: {
      fontWeight: "bold",
    },
  });
  return (
    <View style={styles.center}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
  },
});