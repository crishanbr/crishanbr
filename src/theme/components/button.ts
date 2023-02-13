import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
   baseStyle: {
      borderRadius: "lg",
      background: "transparent",
      _hover: {
         borderColor: "blue.500",
      },
   },
   variants: {
      outline: {
         borderWidth: 2,
         _active: {
            background: "transparent !important",
            borderColor: "blue.500",
            color: "blue.500",
         },
      },
   },
};