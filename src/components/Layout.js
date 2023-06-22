import React from "react";

/**
 * Layout component represents the overall layout structure of the application.
 * It receives children and className as props.
 * @param {React.ReactNode} children - The content to be rendered within the layout.
 * @param {string} className - Additional CSS classes for the layout.
 * @returns JSX element representing the overall layout structure.
 */
const Layout = ({children, className=""}) => {
    return(
        <div className={`w-full h-full inline-block z=0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
            {children}
        </div>
    )
}

export default Layout