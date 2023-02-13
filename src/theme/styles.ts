import { DeepPartial, Theme } from '@chakra-ui/react';

export const styles: DeepPartial<Theme["styles"]> = {
   global: (props) => ({
      /**
       * custom scrollbar
       * https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar#browser_compatibility
       */
      "::-webkit-scrollbar": {
         width: "0.5rem",
         backgroundColor: props.colorMode === "light" ? "gray.300" : "brand.900",
      },
      "::-webkit-scrollbar-thumb": {
         borderRadius: "full",
         backgroundColor: props.colorMode === "light" ? 'gray.400' : 'brand.700',
         "&:hover": {
            backgroundColor: props.colorMode === "light" ? 'gray.500' : 'brand.500',
         },
      },
      html: {
         scrollbarWidth: "thin",
         scrollbarColor: `${props.colorMode === "light" ? "#718096" : "#1050a0"} 
         ${props.colorMode === "light" ? "#CBD5E0" : "#020a15"}`,
      },
   }),
};