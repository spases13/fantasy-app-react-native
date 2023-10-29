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
    container: {
      flex: 1,
    },
    title: {
      fontFamily: "NunitoSans_700",
      fontSize: 28,
      color: Colors[colorScheme ?? "light"].text,
      marginTop: 70,
      marginBottom: 30,
      fontWeight: "400",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      padding: 32,
      gap: 20,
      width: "100%",
      maxWidth: 800,
      marginVertical: 0,
      marginHorizontal: "auto",
    },
    form_input: {
      fontFamily: "NunitoSans_700",
      color: Colors[colorScheme ?? "light"].text,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "#777",
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
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
    text: {
      color: Colors[colorScheme ?? "light"].text,
    },
    link: {
      cursor: "pointer",
      color: Colors[colorScheme ?? "light"].primaryColor,
      textDecorationLine: "underline",
    },
  });

export default styles;
