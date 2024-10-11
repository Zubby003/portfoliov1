import styles from "./ProjectsStyles.module.css";
import freshFruit from "../../assets/fruits.webp";
import FinApp from '../../assets/Finance-App.png'
import Wardrobe from '../../assets/clothes-hangers.jpg'
import dashboard from "../../assets/dashb.jpg";
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
          src={Wardrobe}
          link="https://wardrobe-fit.vercel.app/"
          h3="Wardrobe Fit"
          p="Ecommerce App"
        />
        <ProjectCard
          src={dashboard}
          link="https://dashboard-type.vercel.app/"
          h3="Dashboard"
          p="Dashboard Ui"
        />
      </div>
    </section>
  );
}

export default Projects;
