import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "@theme/index";
import { Groups } from "@screens/Groups";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      {fontsLoader ? <Groups /> : <Loading/>}
    </ThemeProvider>
  );
}
