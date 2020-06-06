import React from "react";
import { StyleSheet, Text, View, Button,ActivityIndicator,Image } from "react-native";
import { THEME } from "../theme";
import { logout } from "../store/types";
import { useDispatch, useSelector } from "react-redux";
import { AppLoading } from "expo";

export const MainScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => {
    return state.auth.userData.user;
  });
  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() => {
          dispatch(logout());
          navigation.navigate("Auth");
        }}
        title="logout"
        style={styles.logout}
      />
    ),
    title: "Home",
    headerTitleAlign:'center',
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
      <Text>Hello, {userProfile.email}</Text>
      <Image source={{ uri: userProfile.avatar }} style={styles.image} />
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
  title:{
    color:"red",
    fontSize:20
  },
  image: {
    width: "100%",
    height: 200,
  },
});
