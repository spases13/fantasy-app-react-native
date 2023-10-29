import { View, Text, TouchableOpacity, useColorScheme } from "react-native";
import React from "react";
import getStyles from "./styles/SubmitButtonStyles";

const SubmitButton = ({ loading, onPress }: any) => {
  const colorScheme: any = useColorScheme();
  const styles = getStyles({ colorScheme });
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.btn}>
      <Text style={styles.btn_text}>
        {" "}
        {`${loading ? "Loading" : "Submit"}`}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
