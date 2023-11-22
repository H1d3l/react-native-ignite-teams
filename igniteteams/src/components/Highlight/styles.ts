import { useTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${() => useTheme().FONT_SIZE.XL};
  font-family: ${() => useTheme().FONT_FAMILY.BOLD};
  color: ${() => useTheme().COLORS.WHITE};
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${() => useTheme().FONT_SIZE.MD};
  font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
  color: ${() => useTheme().COLORS.GRAY_300};
`;
