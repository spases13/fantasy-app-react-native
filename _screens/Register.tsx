import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ColorSchemeName,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles/RegisterStyles";
import getStyles from "./styles/RegisterStyles";
import { useColorScheme } from "react-native";

export const Register = () => {
  const colorScheme: any = useColorScheme();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const styles = getStyles({ colorScheme });
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.form}>
        <Text style={styles.text}>Username : {username} </Text>
        <Text style={styles.text}>Email : {email} </Text>
        <Text style={styles.text}>Password : {password}</Text>
        <TextInput
          selectionColor="#5A247B"
          autoCorrect={false}
          style={styles.form_input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          selectionColor="#5A247B"
          style={styles.form_input}
          autoCorrect={false}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          selectionColor="#5A247B"
          style={styles.form_input}
          autoCorrect={false}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
          <Text style={styles.btn_text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
