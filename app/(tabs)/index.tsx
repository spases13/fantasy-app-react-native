import { Text, View } from "react-native";
import Register from "../../_screens/Register";
import { Link, Redirect } from "expo-router";
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(true);
  return loggedIn ? (
    <View>
      <Text>This is home page</Text>
    </View>
  ) : (
    <Redirect href="/register/" />
  );
}

Home.navigationOptions = {
  headerShown: false,
};
