import styles from "./aboutMe.module.css";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

export const AboutMe = () => {
  return (
    <div id="about" className={styles.wrapper}>
      <h1>About me</h1>
      <div className={styles.container} container="true" spacing={1}>
        <div className={styles.imgBox}>
          <img src="feeling_proud.png" alt="" />
        </div>
        <div>
          <div className={styles.textBox}>
            <p>
              A dedicated full-stack developer with a specialized skill-set that
              enables me to build robust web applications. I am adept in both
              front-end and back-end and have an eye for attention to detail and
              accuracy.
            </p>
            <div className={styles.iconBox}>
              <IconButton onClick={()=>{window.open("https://linkedin.com/in/shailendrasingh22")}} className={styles.linkedIn}>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton onClick={()=>{window.open("https://github.com/Shelen22")}} className={styles.gitHub}>
                <GitHubIcon fontSize="large" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
