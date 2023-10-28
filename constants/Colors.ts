import { useColorScheme } from "react-native";

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const primaryColor = "#5A247B";


export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    primaryColor: primaryColor,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#fff',
    tint: tintColorDark,
    primaryColor: primaryColor,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
