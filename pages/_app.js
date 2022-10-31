import Layout from "../Layout/Layout";
import "../styles/components/navbar.scss";
import "../styles/components/home.scss";
import "../styles/globals.css";

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // generic colors
      white: "#ffffff",
      black: "#000000",

      // background colors (light)
      background: "$white",
      backgroundAlpha: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
      foreground: "$black",
      backgroundContrast: "$white",

      //semantic colors (light)
      blue50: "#EDF5FF",
      // ...
      blue900: "#00254D",
      // ...

      // brand colors
      primaryLight: "$blue200",
      primaryLightHover: "$blue300", // commonly used on hover state
      primaryLightActive: "$blue400", // commonly used on pressed state
      primaryLightContrast: "$blue600", // commonly used for text inside the component
      primary: "$blue600",
      primaryBorder: "$blue500",
      primaryBorderHover: "$blue600",
      primarySolidHover: "$blue700",
      primarySolidContrast: "$white", // commonly used for text inside the component
      primaryShadow: "$blue500",

      // ... rest of colors (secondary, success, warning, error, etc)
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primaryLight: "$yellow200",
      primaryLightHover: "$yellow300",
      primaryLightActive: "$yellow400",
      primaryLightContrast: "$yellow600",
      primary: "#F5A524",
      primaryBorder: "$yellow500",
      primaryBorderHover: "$yellow600",
      primarySolidHover: "$yellow700",
      primarySolidContrast: "$white",
      primaryShadow: "$yellow500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
      myColor: "#ff4ecd",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
