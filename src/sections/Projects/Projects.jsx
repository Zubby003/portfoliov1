import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshFruit from "../../assets/fruits.webp";
import FinApp from '../../assets/Finance-App.png'
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={FinApp}
          link="https://financial-app-black.vercel.app/"
          h3="Kobodrop"
          p="Financial App"
        />
        <ProjectCard
          src={freshFruit}
          link="https://fruit-store-lake.vercel.app/"
          h3="GreenFood"
          p="Fruit Store"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Zubby003/OIBSIP-landing-page"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Zubby003/OIBSIP-landing-page"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
