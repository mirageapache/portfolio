import Header from 'components/Header.jsx';
import AboutMe from 'components/AboutMe.jsx';
import Skill from 'components/Skill.jsx';
import Experience from 'components/Experience.jsx';
import Portfolio from 'components/Portfolio.jsx';
import Contact from 'components/Contact.jsx';
import 'styles/css/homepage.css';

export default function HomePage(){
  return(
    <div className="homepage">
      <Header />
      <AboutMe />
      {/* <Skill /> */}
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  )
}