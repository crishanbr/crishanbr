import type { DeepPartial, SemanticValue, ThemeScale } from "@chakra-ui/react";

export type TokenValue = string | number | SemanticValue<string>;

export type ThemeTokenValues = Record<string, TokenValue>;

export type SemanticTokenType = DeepPartial<
   Record<ThemeScale, ThemeTokenValues>
>;

export const semanticTokens: SemanticTokenType = {
   colors: {
      text: {
         default: "gray.900",
         _dark: "gray.200",
      },
      description: "gray.400",
      background: {
         default: "gray.50",
         _dark: "gray.800",
      },
      bg1: {
         default: "gray.50",
         _dark: "gray.700",
      },
      alphaBackground: {
         default: "rgba(255, 255, 255, 0.5)",
         _dark: "rgba(7, 35, 70, 0.5)",
      },
      borderColor: {
         default: "gray.200",
         _dark: "whiteAlpha.300",
      },
   },
};