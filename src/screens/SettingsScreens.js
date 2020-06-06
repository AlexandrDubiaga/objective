import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";
import { THEME } from "../theme";
import { logout } from "../store/types";
import { useDispatch, useSelector } from "react-redux";
export const SettingsScreens = ({route, navigation}) => {
  const dispatch = useDispatch();
  navigation.setOptions({
    title: "Settings",
    headerRight: () => (
      <Button 
        onPress={() => {
          dispatch(logout());
          navigation.navigate("Auth");
        }}
        title="logout"
      />
    ),
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerTitleAlign:'center'
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