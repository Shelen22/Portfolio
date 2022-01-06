
import { AboutMe } from '../AboutMe/AboutMe';
import { Navbar } from '../Navbar/Navbar';
import { Profile } from '../Profile/Profile';
import { Projects } from '../Projects/Projects';
import Sidebar from "../Sidebar/"
import { useState } from 'react';
import { Contact } from '../Contact/Contact';
import { Skills } from '../skills/skills';
import { Top} from '../TopButton/Top';


function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Profile />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Top />
    </div>
  );
}

export default Homepage;
