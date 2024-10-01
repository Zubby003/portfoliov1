import styles from "./ContactStyles.module.css";
import { contact } from "../../common/Portfolio";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <a href={`mailto:${contact.email}`}>
        {/* <span type="button" className="btn btn--outline">
          Email me
        </span> */}
        <button className="hover"> Email me</button>
      </a>
    </section>
  );
}

export default Contact;
