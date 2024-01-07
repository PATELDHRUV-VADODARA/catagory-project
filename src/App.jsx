import React, { useState } from 'react';

const CategorySelector = () => {
    // Correctly structured data for each category
    const data = {
        books: [
            { id: 1, name: "you", author: "dhruv" },
            { id: 2, name: "teri waha", author: "tirht" },
            { id: 3, name: "you2", author: "dhruv2" },
            { id: 4, name: "teri waha2", author: "tirht2" }
        ],
        movies: [
            { id: 1, name: "teri waha2", author: "tirht2" },
            { id: 2, name: "ddlj", author: "saloni" },
            { id: 3, name: "yedj", author: "yesha" }
        ],
        music: [
            { id: 1, name: "malum hai", author: "saloni" },
            { id: 2, name: "malum hai1", author: "dhruv" },
            { id: 3, name: "malum hai2", author: "love" }
        ]
    };

    // State to keep track of the selected item
    const [currentItem, setCurrentItem] = useState(null);

    // Function to handle category selection
    const handleCategoryClick = (category) => {
        const randomIndex = Math.floor(Math.random() * data[category].length);
        setCurrentItem(data[category][randomIndex]);
    };

    return (
        <div>
            <button onClick={() => handleCategoryClick("books")}>Books</button>
            <button onClick={() => handleCategoryClick("movies")}>Movies</button>
            <button onClick={() => handleCategoryClick("music")}>Music</button>
            <div>
                {currentItem && (
                    <p>Selected Item: {currentItem.name} by {currentItem.author}</p>
                )}
            </div>
        </div>
    );
};

export default CategorySelector;