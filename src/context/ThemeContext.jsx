import { useContext , createContext} from "react";

import { useToggle } from "../hooks/useToggle";


const ThemeConext = createContext() ;

export const useThemeContext = () => {
    return useContext( ThemeConext )
}

export const ThemeProvider = ({ children }) => {
    const [ darkMode , toggle ] = useToggle()
    
    const  toggleDarkMode = () => {
        toggle()
    }

    return(
        <ThemeConext.Provider value={[ darkMode , toggleDarkMode ]}>
            {children}
        </ThemeConext.Provider>

    )
}
