import "./research_card.scss";

const ResearchCard = ({ imgTab, setImgTab }: any) => {
  return (
    <div
      className="accordion-item"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="600"
    >
      <h5 className="accordion-header" id="headingOne">
        <button
          className={(imgTab == 0 ? "  " : " collapsed") + " accordion-button"}
          onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          What is ChatGPT?
        </button>
      </h5>
      <div
        id="collapseOne"
        className={`accordion-collapse collapse${imgTab === 0 ? " show " : ""}`}
        aria-labelledby="headingOne"
        data-bs-parent="#accordion"
      >
        <div className="accordion-body">
          <p>
            analyses the speaker&apos;s face and gaze during a video
            conversation to maintain eye contact before changing the camera
            position. io at a later time. Clear, consistent, and professional
            voices for marketing, explainer, product, and YouTube videos.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResearchCard;
