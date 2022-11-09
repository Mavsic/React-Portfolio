import project1 from './assets/images/img1.png'; 
import project2 from './assets/images/img2.png'; 
import project3 from './assets/images/img3.png'; 
import project4 from './assets/images/img4.png';

export default  function portfolio() {
    const projects =
    [
    {
        "id": 1,
        "name": "My portfolio",
        "image": project1,
        "github": "https://github.com/Mavsic/My_Portfolio",
        "deploy": "https://mavsic.github.io/My_Portfolio/"
    },
    {
        "id": 2,
        "name": "Quiz-game",
        "image": project2,
        "github": "https://github.com/Mavsic/Quiz-Game",
        "deploy": "https://mavsic.github.io/Quiz-Game/"
    },
    {
        "id": 2,
        "name": "Back-End_e-commerce",
        "image": project3,
        "github": "https://github.com/Mavsic/E-commerce-Back-End",
        "deploy": "https://github.com/Mavsic/E-commerce-Back-End"
    },
    {
        "id": 4,
        "name": "Social-Media",
        "image": project4,
        "github": "https://github.com/Mavsic/Social-Media",
        "deploy": "https://github.com/Mavsic/Social-Media"
    }
];
return projects;
}

