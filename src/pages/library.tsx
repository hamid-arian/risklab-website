import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Banner from "../components/layout/banner/Banner";
import { TypeAnimation } from "react-type-animation";

const Library = () => {
  const [tab, setTab] = useState("python");
  return (
    <Layout header={true} footer={1}>
      {/* banner section */}
      <section className="section">
        <Banner title={"RiskLabAI Library"} />
        <div className="library_description">
          <h6 data-aos="fade-up" data-aos-duration="600">
            At RiskLab AI, we combine powerful programming languages to bring
            our research to life.
          </h6>
        </div>
      </section>
      {/* terminal section */}
      <section>
        <div className="library_terminal">
          {/* tabs */}
          <div
            className="library_terminal_tabs"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <button
              type="button"
              onClick={() => setTab("python")}
              className={`btn ${
                tab === "python" ? "btn--primary" : "btn--secondary"
              }`}
              style={{ marginRight: 10 }}
            >
              Python
            </button>
            <button
              type="button"
              onClick={() => setTab("julia")}
              className={`btn ${
                tab === "julia" ? "btn--primary" : "btn--secondary"
              }`}
            >
              Julia
            </button>
          </div>
          {/* terminal box */}
          <div
            className="library_terminal_box"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="library_terminal_box_header">
              <h6>Terminal</h6>
              <div className="terminal_btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            {tab === "python" ? (
              <div className="library_terminal_box_body">
                <TypeAnimation
                  style={{
                    whiteSpace: "pre-line",
                    height: "220px",
                    display: "block",
                    fontSize: "1.7em",
                    color: "#d63384",
                    marginBottom: 15,
                    lineHeight: "50px",
                  }}
                  sequence={[
                    `pip install RiskLabAI\nimport RiskLabAI\nRiskLabAI.function_example()`,
                    1000,
                  ]}
                />
              </div>
            ) : null}
            {tab === "julia" ? (
              <div className="library_terminal_box_body">
                <TypeAnimation
                  style={{
                    whiteSpace: "pre-line",
                    height: "220px",
                    display: "block",
                    fontSize: "1.7em",
                    color: "#d63384",
                    marginBottom: 15,
                    lineHeight: "50px",
                  }}
                  sequence={[
                    `add RiskLabAI\nusing RiskLabAI\nRiskLabAI.function_example()`,
                    1000,
                  ]}
                />
              </div>
            ) : null}
          </div>
          {/* language descs */}
          <div
            className="library_terminal_language_description"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <p>
              {tab === "python"
                ? "Python's versatile libraries and frameworks, such as NumPy, pandas, and scikit-learn, enable us to conduct comprehensive data analysis, machine learning, and statistical modeling. Python's broad user community and extensive resources make it an invaluable tool in our research."
                : "Known for its high performance and ease of use, Julia is particularly well-suited for numerical and scientific computing. We leverage Julia's mathematical modeling and data manipulation strength to implement our quantitative research."}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Library;
