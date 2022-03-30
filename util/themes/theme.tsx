import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,

  styles: {
    global: {
      _focus: {},
      body: {
        _focus: {
          boxShadow: "0px 0px 1px 2px rgba(144, 205, 244, 0.5)",
        },
        Button: {
          _focus: {
            boxShadow: "0px 0px 1px 2px rgba(144, 205, 244, 0.5)",
          },
        },
      },
    },
  },

  fonts: {
    heading: "Open sans, sans-serif",
    body: "Greycliff CF, sans-serif",
  },

  shadows: {
    outline: "0px 0px 1px 2px rgba(144, 205, 244, 0.5)",
  },
});

export default theme;