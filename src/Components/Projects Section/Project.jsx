import {useState, useEffect} from 'react';

import './projects.css'
import { FiGithub } from "react-icons/fi";

// Example local data
import calculatormedie from './../../assets/calculatorMedie.jpg';
import coffeshop from './../../assets/coffeShop.jpg';
import draganddrop from './../../assets/dragAndDrop.jpg';
import fitnessapp from './../../assets/fitnessApp.jpg';
import imagesearch from './../../assets/imageSearch.jpg';
import quizz from './../../assets/quizz.jpg';
import shoppingcart from './../../assets/shoppingCart.jpg';
import todolist from './../../assets/toDoList.jpg';
import weatherapp from './../../assets/weatherApp.jpg';
import pozasv from './../../assets/pozasv.jpg';

const data = [
    {
        id: 1,
        image: calculatormedie,
        demo: '',
        github: 'https://github.com/PoliceJukeBox/Calculator-Medie',
        title: "Calculator Medie",
        category: "medium",
        desc: "App that calculates the grade average for various educational levels, with or without a final exam.",
        features: "Grade input, add/remove grades, average calculation with/without final exam.",
        skills: "JavaScript, form handling, state management, advance CSS",
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'JS',
        tech4: '' 
    },
    {
        id: 2,
        image: coffeshop,
        demo: 'https://coffe-shop-sv.vercel.app/',
        github: 'https://github.com/PoliceJukeBox/Coffee-Shop',
        title: "Coffe Shop",
        category: "hard",
        desc: "Comprehensive shopping site with product listings, shopping cart, contact and review section.",
        features: "Product search/filter, user reviews, order management, and fetchAPI (email and map).",
        skills: "Full-stack development, contact paths, and advanced styling.",
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'JS',
        tech4: 'API' 
    },
    {
        id: 3,
        image: draganddrop,
        demo: '',
        github: 'https://github.com/PoliceJukeBox/Drag-and-Drop',
        title: "Drag and Drop App",
        category: "easy",
        desc: "Simple application that allows users to move and organize items by dragging and dropping them.",
        features: "Dynamic item rearrangement, multiple categories/columns, real-time updates.",
        skills: "JavaScript, DOM manipulation, event handling, state management, user interface design.",
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'JS',
        tech4: '' 
    },
    {
        id: 4,
        image: fitnessapp,
        demo: 'https://fitness-exercises-app-hazel.vercel.app/',
        github: 'https://github.com/PoliceJukeBox/Fitness-exercises-app',
        title: "Fitness Exercises App",
        category: "hard",
        desc: "Fitness application where users can search for exercises, view detailed exercise information, using data fetched from external APIs.",
        features: "Exercise search, detailed exercise information, API integration for exercise data, responsive design.",
        skills: "API integration, JSON handling, HTML/CSS, JavaScript, session management.",
        tech1: 'React',
        tech2: 'CSS',
        tech3: 'API',
        tech4: '' 
    },
    {
        id: 5,
        image: imagesearch,
        demo: '',
        github: 'https://github.com/PoliceJukeBox/Image-search-using-API',
        title: "Image Search with API",
        category: "easy",
        desc: "Small application that allows users to search and view images by keyword using an external image search API.",
        features: "Search bar, image grid display, infinite scroll, responsive design, error handling",
        skills: "API integration, JSON handling, HTML/CSS, pagination, error handling",
        tech1: 'HTML',
        tech2: 'JS',
        tech3: 'API',
        tech4: '' 
    },
    {
        id: 6,
        image: quizz,
        demo: '',
        github: 'https://github.com/PoliceJukeBox/Quizz',
        title: "Quiz App",
        category: "medium",
        desc: "Simple application that presents questions to the user, collects their answers, and displays the score.",
        features: "Multiple choice questions, answer validation, and score calculation.",
        skills: "Data structures (arrays/objects), event handling, and conditional logic.",
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'JS',
        tech4: '' 
    },
    {
        id: 7,
        image: shoppingcart,
        demo: '',
        github: 'https://github.com/PoliceJukeBox/Shopping-Cart',
        title: "Shopping Cart",
        category: "medium",
        desc: "E-commerce application where users can browse products, add items to a shopping cart, and manage their purchases, with data stored in a database.",
        features: "Product listing, add/remove items to/from cart, quantity management, price calculation, order summary, database integration",
        skills: "SQL/Database management, HTML/CSS, JavaScript, CRUD operations, session management",
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'JS',
        tech4: 'SQL' 
    },
    {
        id: 8,
        image: todolist,
        demo: '',
        github: 'https://github.com/PoliceJukeBox/ToDoList',
        title: "To-Do List",
        category: "easy",
        desc: "Simple to-do list app where users can add, remove, and mark tasks as completed.",
        features: "Adding tasks, deleting tasks, and marking tasks as completed.",
        skills: "DOM manipulation, event handling, basic styling with CSS",
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'JS',
        tech4: '' 
    },
    {
        id: 9,
        image: weatherapp,
        demo: '',
        github: 'https://github.com/PoliceJukeBox/Weather-App',
        title: "Weather App with API",
        category: "easy",
        desc: "Small application that fetches and displays weather data for a city using a weather API.",
        features: "Input for city name, display current weather, and basic error handling.",
        skills: "Fetch API, JSON handling, basic DOM manipulation.",
        tech1: 'HTML',
        tech2: 'CSS',
        tech3: 'JS',
        tech4: 'API' 
    }
];

function Project() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(data);
    const filters = ["easy", "medium", "hard"];

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            // Remove category if already selected
            let updatedFilters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(updatedFilters);
        } else {
            // Add new category
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    useEffect(() => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters
                .toReversed()
                .map((selectedCategory) => {
                    return data.filter((item) => item.category === selectedCategory);
                });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...data]);
        }
    }, [selectedFilters]);

    return (
        <section id="projects" className='projects container section'>
            <div className="sectionTitle">
                <span className="titleNumber">03.</span>
                <h5 className="titleText">
                    Projects
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            {/* Category Filter Buttons */}
            <div className="dificultyFilter flex">
                {filters.map((category, idx) => (
                    <button
                        onClick={() => handleFilterButtonClick(category)}
                        className={`button ${selectedFilters.includes(category) ? "active" : ""}`}
                        key={`filters-${idx}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="projectContainer grid">
                {filteredItems.toReversed().map((item, idx) => (
                    <div key={`data-${idx}`} className="singleProject">
                        <div className="externalLinks flex">
                            <div className="goToPageLink">
                                {item.demo !== '' && (
                                <a href={item.demo} target="_blank" rel="noopener noreferrer">
                                Go to site
                                </a>
                                )}
                            </div>
                            
                            <div className="githubIcon">
                                <a href={item.github} target='_blank' rel="noopener noreferrer">
                                    <FiGithub className='icon' />
                                </a>
                            </div>
                        </div>

                        <div className="imgDiv">
                            <a href={item.demo} target='_blank' rel="noopener noreferrer">
                                <img src={item.image} alt={item.title} />
                            </a>
                        </div>

                        <div className="projectTitle">
                            <h3>
                                {item.title}
                                <span> - </span>
                                <span className={item.category}>{item.category}</span>
                            </h3>
                        </div>

                        <div className="desc">{item.desc}</div>

                        <div className="features">
                            <b>Features:</b> {item.features}
                        </div>

                        <div className="skills">
                            <b>Skills:</b> {item.skills}
                        </div>

                        <div className="technologies flex">
                            <small>{item.tech1}</small>
                            <small>{item.tech2}</small>
                            <small>{item.tech3}</small>
                            <small>{item.tech4}</small>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;