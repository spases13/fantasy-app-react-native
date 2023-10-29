import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
// import Colors from "../constants/Colors";
type ColorScheme = "light" | "dark";

interface StylesType {
  colorScheme: ColorScheme;
}

// const colorScheme = useColorScheme();
const styles = ({ colorScheme }: StylesType) =>
  StyleSheet.create({
    btn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors[colorScheme ?? "light"].primaryColor,
      textAlign: "center",
      height: 55,
      marginTop: 10,
      borderRadius: 1000,
    },
    btn_text: {
      fontFamily: "NunitoSans_700",
      color: "#fff",
    },
  });

export default styles;
