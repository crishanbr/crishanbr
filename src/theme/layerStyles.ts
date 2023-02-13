import type { SystemStyleObjectRecord } from "@chakra-ui/react";

export const layerStyles: SystemStyleObjectRecord = {
   mainLayout: {
      marginX: "auto",
      width: "full",
      maxWidth: {
         base: "100vw",
         md: "85vw",
         lg: "75%",
      },
      paddingY: 2,
      paddingX: {
         base: 4,
         md: 0,
      },
   },
   bgBlur: {
      backdropFilter: "blur(5px)",
      WebkitBackdropFilter: "blur(5px)",
   },
};