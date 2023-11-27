import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <Container {...rest} placeholderTextColor={useTheme().COLORS.GRAY_300} />
  );
}
