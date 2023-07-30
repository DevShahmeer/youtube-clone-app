// Importing necessary modules from React
import React, { createContext, useState, useEffect } from "react";

// Importing the fetchDataFromApi function from the '../utils/api' file
import { fetchDataFromApi } from "../utils/api";

// Creating a new Context object
export const Context = createContext();

// Creating a custom AppContext component
export const AppContext = (props) => {
    // Using state hooks to manage different states
    const [loading, setLoading] = useState(false); // State to manage loading status
    const [searchResults, setSearchResults] = useState([]); // State to store search results
    const [selectedCategory, setSelectedCategory] = useState("New"); // State to manage selected category
    const [mobileMenu, setMobileMenu] = useState(false); // State to manage mobile menu status

    // useEffect hook to fetch data when 'selectedCategory' changes
    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    // Function to fetch data based on the selected category
    const fetchSelectedCategoryData = (query) => {
        setLoading(true); // Set loading to true to indicate data fetching
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents); // Logging the fetched data (optional)
            setSearchResults(contents); // Storing the fetched data in 'searchResults'
            setLoading(false); // Set loading back to false after data is fetched
        });
    };

    // Providing the Context's value and making it available to child components
    return (
        <Context.Provider
            value={{
                loading, // Current loading status
                setLoading, // Function to update loading status
                searchResults, // Current search results
                selectedCategory, // Current selected category
                setSelectedCategory, // Function to update selected category
                mobileMenu, // Current mobile menu status
                setMobileMenu, // Function to update mobile menu status
            }}
        >
            {props.children} {/* Rendering child components */}
        </Context.Provider>
    );
};