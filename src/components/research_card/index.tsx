import styles from "./research_card.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const ResearchCard = ({ research }: any) => {
  const router = useRouter();
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
        <button
          onClick={() =>
            router.push(`/researches/view?research_id=${research.id}`)
          }
          className="btn btn--primary"
          type="button"
        >
          View Articles
        </button>
      </div>
    </div>
  );
};
export default ResearchCard;
