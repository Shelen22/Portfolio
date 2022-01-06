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
        image: "/icons/html.png",
        id: "1"
    },
    {
        name: "CSS",
        image: "/icons/css.png",
        id: "2"
    },
    {
        name: "JavaScript",
        image: "/icons/javascript.png",
        id: "3"
    },
    {
        name: "React",
        image: "/icons/react.png",
        id: "4"
    },
    {
        name: "Redux",
        image: "/icons/redux.png",
        id: "5"
    },
    {
        name: "Material Ui",
        image: "/icons/materialui.png",
        id:"6"
    },
    {
        name: "Node.js",
        image: "/icons/nodejs.png",
        id: "7"
    },
    {
        name: "MongoDb",
        image: "/icons/mongodb.png",
        id: "8"
    },
    {
        name: "Bootstrap",
        image: "/icons/bootstrap.png",
        id: "9"
    },
    {
        name: "Express.js",
        image: "/icons/expressjs.png",
        id: "10"
    },
];

const proficiencies = [
    {
        name: "Front-end",
        image: "/icons/frontend.png",
        id: "1"
    },
    {
        name: "Backend",
        image: "/icons/backend.png",
        id: "2"
    },
    {
        name: "DS & Algorithm",
        image: "/icons/datastructure.png",
        id: "3"
    },
];

