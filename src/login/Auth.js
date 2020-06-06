import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Keyboard,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { THEME } from "../theme";
import { login, logout } from "../store/types";
import { color } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";

export const Auth = ({ route, navigation }) => {
  const isLogined = useSelector((state) => {
    return state.auth.isLogined;
  });
  if (isLogined) {
    navigation.navigate("Main");
  }
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const pressHandllerr = () => {
    if (!email && !password) {
      Alert.alert("Поля не могут быть пустыми!");
    } else if (!password) {
      Alert.alert("Поле password может быть пустым!");
    }else if(password.length<8){
      Alert.alert("Длинна пароля не может быть меньше 8 символов");
    } else {
      Keyboard.dismiss();
      const userData = {
        email: email,
        password: password,
      };
      setEmail("");
      setPassword("");
      dispatch(login(userData));
    }
  };

  const registration = () => {
    dispatch(logout());
    navigation.navigate("Registration");
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
          <Text style={styles.title}>Авторизируйся</Text>
          </View>
          <TextInput
            value={email}
            placeholder={"email"}
            onChangeText={setEmail}
            style={styles.input}
            autoCorrect={false}
            autoCapitalize={"none"}
            multilines
          />
          <TextInput
            value={password}
            placeholder={"password"}
            onChangeText={setPassword}
            style={styles.input}
            autoCorrect={false}
            autoCapitalize={"none"}
            multilines
          />
          <View style={styles.buttonWrapper}>
            <View>
              <Button
                style={styles.button}
                onPress={pressHandllerr}
                disabled={!email}
                title={"Войти"}
              />
            </View>
            <View>
              <Button
                style={styles.button}
                onPress={registration}
                title={"Регистрация"}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: "column",
    marginTop: 50,
  },
  input: {
    width: "100%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    padding: 10,
    marginVertical: 20,
  
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
   justifyContent:'space-around',
    color: "red",
  },
  titleWrapper:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  buttonWrapper: {
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop: 20,
    marginVertical: 20,
    padding:20,
    
  },
});
