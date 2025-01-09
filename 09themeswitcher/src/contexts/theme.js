import { createContext, useContext } from "react";

// 1.Create a context for the theme
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: {},
    lightTheme: {},
});
// 2.Create a provider for the theme context
export const ThemeProvider = ThemeContext.Provider ;
// 3.Create a hook to use the theme context
export const useTheme = () => {
    return useContext(ThemeContext);
}