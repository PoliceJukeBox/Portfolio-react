import './projects.css'
import { FiGithub } from "react-icons/fi";
import pozasv from '../../assets/pozasv.jpg'
import { useState, useEffect } from 'react';

const data = [
    {
        id: 1,
        image: pozasv,
        demo: 'https://portfolio-sv-eight.vercel.app/',
        github: '',
        title: "Incercare1",
        category: "hard",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus architecto soluta. Voluptatem, consequuntur quos! Aspernatur voluptatibus assumenda est doloremque, enim numquam at deserunt minus officiis sed delectus deleniti debitis!",
        tech1: 'react',
        tech2: 'scss',
        tech3: 'mysql(supabase)',
        tech4: '' 
    },
    {
        id: 2,
        image: pozasv,
        demo: 'https://portfolio-sv-eight.vercel.app/',
        github: '',
        title: "Incercare2",
        category: "medium",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus architecto soluta. Voluptatem, consequuntur quos! Aspernatur voluptatibus assumenda est doloremque, enim numquam at deserunt minus officiis sed delectus deleniti debitis!",
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
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus architecto soluta. Voluptatem, consequuntur quos! Aspernatur voluptatibus assumenda est doloremque, enim numquam at deserunt minus officiis sed delectus deleniti debitis!",
        tech1: 'react',
        tech2: 'scss',
        tech3: 'mysql(supabase)',
        tech4: '' 
    },
    {
        id: 4,
        image: pozasv,
        demo: 'https://portfolio-sv-eight.vercel.app/',
        github: '',
        title: "Incercare4",
        category: "hard",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus architecto soluta. Voluptatem, consequuntur quos! Aspernatur voluptatibus assumenda est doloremque, enim numquam at deserunt minus officiis sed delectus deleniti debitis!",
        tech1: 'react',
        tech2: 'scss',
        tech3: 'mysql(supabase)',
        tech4: '' 
    }
]

function Project(){

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(data);
    let filters = ["easy", "medium", "hard"];

    const handleFilterButtonClick = (selectedCategory) => {
        console.log(selectedCategory);
        if(selectedFilters.includes(selectedCategory)){
           let filters = selectedFilters.filter((el) => el !== selectedCategory);
           setSelectedFilters(filters);
        }else{
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    useEffect(() =>{
        filterItems();
    }, [selectedFilters]);

    const filterItems = () =>{
        if(selectedFilters.length > 0){
            let tempItems = selectedFilters.map((selectedCategory) =>{
                let temp = data.filter((item) => item.category ===selectedCategory)
                return temp;
            });
            setFilteredItems(tempItems.flat());
        }else{
            setFilteredItems([...data]);
        }
    };

    return(
        <>
        <section id="projects" className='projects container section'>
            <div className="sectionTitle">
                <span className="titleNumber">03.</span>
                <h5 className="titleText">Projects 
                    <div className="underline"><span></span></div>
                </h5>
            </div>

            <div className="dificultyFilter flex">
                {filters.map((category, idx) => (
                    <button
                        onClick={() => handleFilterButtonClick(category)}
                        className={`button ${selectedFilters?.includes(category) ? "active": ""}`}
                        key={`filters-${idx}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="projectContainer grid">
                {
                    filteredItems.map((item, idx) =>{
                        return(
                            <div key={`data-${idx}`} className="singleProject">
                                <div className="externalLinks flex">
                                    <div className="goToPageLink">
                                        <a href={item.demo} target='_blank'>Go to site</a>
                                    </div>
                                    <div className="githubIcon">
                                        <a href={item.github} target='_blank'>
                                            <FiGithub className='icon'/>
                                        </a>
                                    </div>
                                </div>

                                <div className="imgDiv">
                                    <a href="" target='_blank'>
                                        <img src={item.image} alt={item.title} />
                                    </a>
                                </div>

                                <div className="projectTitle">
                                    <h3>{item.title}<span> - </span><span className={item.category}>{item.category}</span></h3>
                                </div>

                                <div className="desc">
                                    {item.desc}
                                </div>

                                <div className="technologies flex">
                                    <small>{item.tech1}</small>
                                    <small>{item.tech2}</small>
                                    <small>{item.tech3}</small>
                                    <small>{item.tech4}</small>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        </>
    )
}

export default Project;

//{id, github, image, desc, demo, title, category, tech1, tech2, tech3, tech4}