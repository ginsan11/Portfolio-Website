import React, { useEffect, useState } from 'react'

/**
 * useThemeSwitcher custom hook for managing the theme switcher functionality.
 * @returns {[string, function]} A tuple containing the current mode and a function to update the mode.
 */
const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");
    useEffect(() => {

        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme")

        /**
        * handleChange function to handle the theme change based on user preference or system settings.
        */
        const handleChange = () => {
            if(userPref){
                // If user preference is stored, use it to determine the mode (dark or light)
                let check = userPref === "dark" ? "dark" : "light"
                setMode(check)
                if(check==="dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }else{
            // If user preference is stored, use it to determine the mode (dark or light)
                let check = mediaQuery.matches ? "dark" : "light"
                setMode(check);
                if(check==="dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }
        }
        // Call handleChange initially to set the initial theme
        handleChange();
        // Add event listener to handle changes in system settings
        mediaQuery.addEventListener("change", handleChange)
        // Clean up the event listener when the component is unmounted
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    useEffect (() => {
        // Update the stored theme preference and apply the appropriate CSS class based on the mode
        if(mode=== 'dark'){
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark")
        }
        
        if(mode==="light"){
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")
        }
        
    }, [mode])

  return [mode, setMode]
}

export default useThemeSwitcher