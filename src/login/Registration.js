import React, { useState, use } from "react";
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
import { registration } from "../store/types";
import { useDispatch, useSelector } from "react-redux";
import {  logout } from "../store/types";

export const Registration = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const success = useSelector((state) => {
    return state.auth.success;
  });
 
  const pressHandllerr = () => {
    let check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email && !passwordConfirm && !password) {
      Alert.alert("Поля не могут быть пустыми!");
    } else if (!email) {
      Alert.alert("Поле email не может быть пустым!");
    } else if (!password) {
      Alert.alert("Поле password может быть пустым!");
    } else if (!passwordConfirm) {
      Alert.alert("Поле passConf не может быть пустым!");
    } else if (password !== passwordConfirm) {
      Alert.alert("Пароли не совпадают!");
    }else if(!check.test(email)){
      Alert.alert("Не валидный email");
    } else {
      Keyboard.dismiss();
      const userData = {
        email: email,
        password: password,
        password_confirmation: passwordConfirm,
      };
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      dispatch(registration(userData));
    }
  };
  
  const goBack=()=>{
    dispatch(logout());
    navigation.navigate("Auth")
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View style={styles.wrapper}>
        <View style={styles.successWrapper}>
            <Text style={styles.success}>{success}</Text>
          </View>
          <View style={styles.titleWrapper}>
          <Text style={styles.title}>Регистрация</Text>
          </View>
          <TextInput
            value={email}
            placeholder={"Email"}
            onChangeText={setEmail}
            style={styles.input}
            autoCorrect={false}
            autoCapitalize={"none"}
            multilines
          />
          <TextInput
            value={password}
            placeholder={"Password"}
            onChangeText={setPassword}
            style={styles.input}
            autoCorrect={false}
            autoCapitalize={"none"}
            multilines
            secureTextEntry={true}
          />
          <TextInput
            value={passwordConfirm}
            placeholder={"Password confirm"}
            onChangeText={setPasswordConfirm}
            style={styles.input}
            autoCorrect={false}
            autoCapitalize={"none"}
            multilines
            secureTextEntry={true}
          />
          <View style={styles.buttonWrapper}>
            <Button
              style={styles.button}
              onPress={pressHandllerr}
              title={"Зарегистрироваться"}
            />
            <Button
              style={styles.button}
              onPress={() => goBack() }
              title={"Назад"}
            />
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
    marginTop: 100,
    backgroundColor:'#E6E6FA'
  
  },
  input: {
    width: "100%",
    borderBottomColor: THEME.MAIN_COLOR,
    padding: 10,
    marginVertical: 20,
    backgroundColor:'#FFF8DC'
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "space-around",
    color: "#FF00FF",
  },
  titleWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginVertical: 20,
    padding: 20,
  },
 
  success: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    color: "blue",
  },
  successWrapper:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
});
