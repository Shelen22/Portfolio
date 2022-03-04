import styles from "./profile.module.css"
import GetAppIcon from '@material-ui/icons/GetApp';
import { motion } from "framer-motion";
import { fade } from "../../animation";
import Typical from "react-typical"
export const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <motion.div variants={fade} initial="hidden" animate="show" className={styles.imgBox}>
                    <img src="./Myprofile.jpeg" alt="" />
                </motion.div>
                <div className={styles.myName}>Hi, I'm <span>Shailendra Singh</span></div>
                <div className={styles.title}>I'm a{" "}
                    <Typical
                        loop={100}
                        wrapper="span"
                        steps={[
                            'Web Developer', 1000,
                            '', 1000,
                            'Web Developer', 1000,
                        ]}
                    />
                </div>
                <p className={styles.descrip}>
                    An Aspiring Developer with a passion for developing scalable web applications.
                </p>
                <button onClick={() => { window.open("https://drive.google.com/file/d/1F73ZBRJzBCwGf5_CA9lMsjLNG8ishEgl/view?usp=sharing") }}> RESUME</button>
            </div>
        </div>
    )
}
