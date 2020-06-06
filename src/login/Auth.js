import React, { useState } from "react";
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
import { login } from "../store/types";
import { color } from "react-native-reanimated";


export const Auth = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const pressHandllerr = () => {
    if (email.trim()) {
      Keyboard.dismiss();
      const userData  = {
        email: email,
        password:password
      };
      setValue("");
      dispatch(login(userData));
   
    } else {
      Alert.alert("Поле не может быть пустым!");
    }
  };


  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Логин</Text>
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
   
        <Button style={styles.button} onPress={pressHandllerr} disabled={!email} title={'Войти'} />
           <Button style={styles.button} onPress={()=>navigation.navigate("Registration")}  title={'Регистрация'} />
         
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
    width: "100%",
  },
});