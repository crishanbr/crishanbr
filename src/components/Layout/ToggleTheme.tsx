import { IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ToggleTheme = () => {
   const { colorMode, toggleColorMode } = useColorMode();

   return (
      <Tooltip 
         label={`Tema ${colorMode === "light" ? "oscuro" : "claro"}`}
         display={["none", "block"]}
      >
         <IconButton
            aria-label="theme toggle"
            icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
            onClick={toggleColorMode}
            variant="outline"
            size="sm"
         />
      </Tooltip>
   );
};

export default ToggleTheme;