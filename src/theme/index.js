import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { shadows } from "./shadows";
import { sizes } from "./sizes";
import { components } from "./components";

export const theme = extendTheme({
  colors,
  shadows,
  sizes,
  space: sizes,
  components,
  ...fonts,
});
