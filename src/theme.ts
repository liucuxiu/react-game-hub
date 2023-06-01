import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: "dark",
}

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#f2f2f2',
      200: '#e6e6e6',
      300: '#cccccc',
      400: '#b3b3b3',
    }
  }
})

export default theme;