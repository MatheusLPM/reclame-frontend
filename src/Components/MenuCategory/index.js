import React, { useState, useEffect, useRef } from "react";

import { BodyMenuCategory, StyledCategory } from "./style";
import { findCategory } from "../../Services/api";

export default function MenuCategory({ changeCategory }) {

    const [categories, setCategories] = useState([0]);

    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const categorybar = useRef();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await findCategory();
                setCategories(data);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };

        fetchData();
    }, []);

    const handleNext = (e) => {

        categorybar.current.scrollLeft += (categorybar.current.offsetWidth + 16);

    }
    const handlePrev = (e) => {

        categorybar.current.scrollLeft -= (categorybar.current.offsetWidth + 16);

    };

    const handleCategoryClick = (categoryItem) => {

        setSelectedCategory(categoryItem)
        changeCategory(categoryItem)

    };

    return (
        <BodyMenuCategory>
            <button className="nav-button" onClick={handlePrev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
            </button>

            <div className="carousel" ref={categorybar}>

                <StyledCategory
                    className="default"
                    onClick={() => handleCategoryClick("Todos")}
                    isSelected={selectedCategory === "Todos"}
                >
                    Todos
                </StyledCategory>

                {categories.map((item, index) => (
                    <StyledCategory
                        key={index}
                        onClick={() => handleCategoryClick(item)}
                        isSelected={selectedCategory == item}
                    >
                        {item.categoria}
                    </StyledCategory>
                ))}
            </div>

            <button className="nav-button" onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
            </button>

        </BodyMenuCategory>
    );
}