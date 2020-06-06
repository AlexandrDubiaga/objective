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
  TouchableWithoutFeedback
} from "react-native";
import { THEME } from "../theme";
import { registration } from "../store/types";
import {useDispatch, useSelector } from "react-redux";


export const Registration = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const pressHandllerr = () => {
    if(!email && !passwordConfirm && !password){
        Alert.alert("Поля не могут быть пустыми!");
    }
    else if(!email){
        Alert.alert("Поле email может быть пустым!");
    }else if(!password){
        Alert.alert("Поле password может быть пустым!");
    }else if(!passwordConfirm){
        Alert.alert("Поле passConf может быть пустым!");
    }else if(password!== passwordConfirm){
        Alert.alert("Пароли не совпадают!");
    }else{
        Keyboard.dismiss();
        const userData  = {
          email: email,
          password:password,
          password_confirmation:passwordConfirm
        };
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        dispatch(registration(userData));
    }
  };


  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Регистрация</Text>
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
         <TextInput
          value={passwordConfirm}
          placeholder={"password confirm"}
          onChangeText={setPasswordConfirm}
          style={styles.input}
          autoCorrect={false}
          autoCapitalize={"none"}
          multilines
        />
        <Button style={styles.button} onPress={pressHandllerr} title={'Зарегистрироваться'} />
           <Button style={styles.button} onPress={()=>navigation.navigate("Auth")}  title={'Назад'} />
      </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
  padding:10,
  flexDirection:'column',
  marginTop:50
  
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
    alignItems:'center',
    color:'red'
  },
  button: {
  
  },
});