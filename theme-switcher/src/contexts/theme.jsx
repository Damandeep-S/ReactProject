
import {createContext,useContext} from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme: ()=>{}
})

export const ThemeProvider=ThemeContext.Provider

//we can also make custom hooks

export default function useTheme(){
    return useContext(ThemeContext)
}