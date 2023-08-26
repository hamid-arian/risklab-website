const ResearchCard = ({ research, imgTab, setImgTab }: any) => {
  return (
    <div
      className="accordion-item"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="600"
    >
      <h5 className="accordion-header" id={`heading${research.id}`}>
        <button
          className={
            (imgTab == research.id ? "  " : " collapsed") + " accordion-button"
          }
          onClick={() => setImgTab(research.id)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {research.title}
        </button>
      </h5>
      <div
        id={`collapse${research.id}`}
        className={`accordion-collapse collapse${
          imgTab === research.id ? " show " : ""
        }`}
        aria-labelledby={`heading${research.id}`}
        data-bs-parent="#accordion"
      >
        <div className="accordion-body">
          <p>{research.content}</p>
        </div>
      </div>
    </div>
  );
};
export default ResearchCard;
