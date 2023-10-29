import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ColorSchemeName,
  Alert,
} from "react-native";
import React, { useState } from "react";
import getStyles from "./(styles)/styles";
import { useColorScheme } from "react-native";
import { Link } from "expo-router";
import SubmitButton from "../../components/custom/SubmitButton";

export const Register = () => {
  const colorScheme: any = useColorScheme();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const styles = getStyles({ colorScheme });
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    try {
      setLoading(true);
      if (!username || !email || !password) {
        Alert.alert("Please fill-in all fields");
        alert("Please fill-in all fields");
        setLoading(false);
        return;
      } else {
        setLoading(false);
        console.log("Register Data =>");
        console.log({ username, email, password });
      }
    } catch (err: any) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.form}>
        {/* <Text style={styles.text}>
          {JSON.stringify({ username, email, password }, null, 4)}
        </Text> */}
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
        <SubmitButton onPress={handleSubmit} loading={loading}></SubmitButton>
        <Text style={styles.text}>
          Already Registred ?
          <Link href="/Login" style={styles.link}>
            Login
          </Link>
          <View>
            <Link href="/" style={styles.link}>
              HOME
            </Link>
          </View>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;

Register.navigationOptions = {
  headerShown: false,
};
