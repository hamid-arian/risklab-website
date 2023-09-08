const NewsCard = ({ news }: any) => {
  return (
    <div className="accordion-item">
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
