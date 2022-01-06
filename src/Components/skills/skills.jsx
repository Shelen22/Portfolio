import styles from "./skills.module.css";
import { Technologies } from "./Technologies/Technologies";

export const Skills = () => {
    return (
        <div id="skills" className={styles.wrapper}>
            <h1>Skills</h1>
            <Technologies data={techno} title={"Technologies"} />
            <Technologies data={proficiencies} title="Proficiencies" />
        </div>
    );
};


const techno = [
    {
        name: "HTML",
        image: "html.png",
        id: "1"
    },
    {
        name: "CSS",
        image: "css.png",
        id: "2"
    },
    {
        name: "JavaScript",
        image: "javascript.png",
        id: "3"
    },
    {
        name: "React",
        image: "react.png",
        id: "4"
    },
    {
        name: "Redux",
        image: "redux.png",
        id: "5"
    },
    {
        name: "Material Ui",
        image: "materialui.png",
        id:"6"
    },
    {
        name: "Node.js",
        image: "nodejs.png",
        id: "7"
    },
    {
        name: "MongoDb",
        image: "mongodb.png",
        id: "8"
    },
    {
        name: "Bootstrap",
        image: "bootstrap.png",
        id: "9"
    },
    {
        name: "Express.js",
        image: "expressjs.png",
        id: "10"
    },
];

const proficiencies = [
    {
        name: "Front-end",
        image: "frontend.png",
        id: "1"
    },
    {
        name: "Backend",
        image: "backend.png",
        id: "2"
    },
    {
        name: "DS & Algorithm",
        image: "datastructure.png",
        id: "3"
    },
];

