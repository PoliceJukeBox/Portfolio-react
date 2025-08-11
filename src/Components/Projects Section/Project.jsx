import {useState, useEffect} from 'react';

import './projects.css'
import { FiGithub } from "react-icons/fi";

// Example local data
import calculatormedie from './../../assets/calculatorMedie.jpg'; // <-- adjust paths
import weatherapp from './../../assets/weatherApp.jpg';
import pozasv from './../../assets/pozasv.jpg';

const data = [
    {
        id: 1,
        image: calculatormedie,
        demo: 'https://portfolio-sv-eight.vercel.app/',
        github: '',
        title: "Incercare1",
        category: "hard",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus architecto soluta...",
        features: "daaaaaaaaaaaaaaaaaaa",
        skills: "maaaaaaaaaaaa",
        tech1: 'react',
        tech2: 'scss',
        tech3: 'mysql(supabase)',
        tech4: '' 
    },
    {
        id: 2,
        image: weatherapp,
        demo: 'https://portfolio-sv-eight.vercel.app/',
        github: '',
        title: "Incercare2",
        category: "medium",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus architecto soluta...",
        features: "daaaaaaaaaaaaaaaaaaa",
        skills: "maaaaaaaaaaa",
        tech1: 'react',
        tech2: 'scss',
        tech3: 'mysql(supabase)',
        tech4: '' 
    },
    {
        id: 3,
        image: pozasv,
        demo: 'https://portfolio-sv-eight.vercel.app/',
        github: '',
        title: "Incercare3",
        category: "easy",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus architecto soluta...",
        features: "daaaaaaaaaaaaaaaaaaa",
        skills: "maaaaaaaaaaa",
        tech1: 'react',
        tech2: 'scss',
        tech3: 'mysql(supabase)',
        tech4: 'aaa' 
    },
    {
        id: 4,
        image: pozasv,
        demo: 'https://portfolio-sv-eight.vercel.app/',
        github: '',
        title: "Incercare4",
        category: "hard",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus architecto soluta...",
        features: "daaaaaaaaaaaaaa",
        skills: "maaaaaaaaaaaaaa",
        tech1: 'react',
        tech2: 'scss',
        tech3: 'mysql(supabase)',
        tech4: '' 
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
                                <a href={item.demo} target='_blank' rel="noopener noreferrer">
                                    Go to site
                                </a>
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