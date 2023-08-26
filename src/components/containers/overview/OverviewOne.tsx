import React from "react";
import Image from "next/image";

import NeuralNetworks from "../../../../public/images/neural_networks.png";
import BackTesting from "../../../../public/images/back_testing.png";
import DataAnalysis from "../../../../public/images/data_analysis.png";
import FeatureImportance from "../../../../public/images/feature_importance.png";

const OverviewOne = () => {
  return (
    <div className="overview">
      <div className="container">
        <div className="row items-gap">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="overview__single"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <Image src={DataAnalysis} priority alt="Image" />
              <p className="h6">Data Analysis</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="overview__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <Image src={NeuralNetworks} priority alt="Image" />
              <p className="h6">Neural Networks</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="overview__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <Image src={FeatureImportance} priority alt="Image" />
              <p className="h6">Feature Importance</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="overview__single"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="800"
            >
              <Image src={BackTesting} priority alt="Image" />
              <p className="h6">Back testing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewOne;
