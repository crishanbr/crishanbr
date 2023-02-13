import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import { layerStyles } from "./layerStyles";
import { semanticTokens } from "./semanticTokens";
import { styles } from "./styles";

const theme = extendTheme({
   colors,
   components,
   config,
   layerStyles,
   semanticTokens,
   styles,
});

export default theme;