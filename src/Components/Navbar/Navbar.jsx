import styles from "./navbar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import styled from 'styled-components';
import { useState } from "react";

export const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? `${styles.wrapper} ${styles.active}` : `${styles.wrapper}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div onClick={() => { animateScroll.scrollToTop(); }}>
            S
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.menuItems}>
            <div>
              <NavLinks to="about" spy={true} exact smooth={true} duration={500} offset={-80} >
                About
              </NavLinks>
            </div>
            <div>
              <NavLinks to="skills" spy={true} exact smooth={true} duration={500} offset={-80} >
                Skills
              </NavLinks>
            </div>
            <div>
              <NavLinks to="projects" spy={true} exact smooth={true} duration={500} offset={-90} >
                Projects
              </NavLinks>
            </div>
            <div>
              <NavLinks to="contact" spy={true} exact smooth={true} duration={500} offset={-120}>
                Contact
              </NavLinks>
            </div>
          </div>
          <div className={styles.menuButton}>
            <IconButton onClick={toggle}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export const NavLinks = styled(ScrollLink)`
  color: white;
  display: flex;
  align-items: center; 
  text-decoration: none; 
  /* padding: 0 1rem; */
  margin: 0 10px;
  height: 100%;
  font-size: 15px;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #FFF
  }
  &:hover{
    color: rgba(255, 255, 255, 0.945);
    transform: scale(1);
    // text-shadow : 0px 5px 2px white;
    transition:transform .2s;
  }
`;