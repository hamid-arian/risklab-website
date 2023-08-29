import styles from "./research_card.module.css";
import Image from "next/image";

const ResearchCard = ({ research }: any) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      className={styles.research_card}
    >
      <Image src={research.icon} alt="research" />
      <h5>{research.title}</h5>
      <p>{research.content}</p>
      <div>
        <button className="btn btn--primary" type="button">
          View Articles
        </button>
      </div>
    </div>
  );
};
export default ResearchCard;
