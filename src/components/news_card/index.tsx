const NewsCard = ({ news }: any) => {
  return (
    <div
      className="accordion-item"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="600"
    >
      <h5 className="accordion-header" id={`heading`}>
        <button className={"accordion-button"} type="button">
          {news.title}
        </button>
      </h5>
      <div
        id={`collapse`}
        className={`accordion-collapse collapse show`}
        aria-labelledby={`heading`}
        data-bs-parent="#accordion"
      >
        <div className="accordion-body">
          <p>
            {news.content}{" "}
            <a href={news.link_url} target="_blank">
              {news.link_title}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
