import React from "react";
import "./Home.scss";
import Group from "../../assets/images/group-image.png";
import Amazon from "../../assets/images/amazon.png";
import Appstore from "../../assets/images/appstore.png";
import Google from "../../assets/images/googlestore.png";
const Home: React.FC = () => {
  return (
    <div>
      <div className="home">
        <div className="arrow-image">
          <div className="dark-background"></div>

          <div className="anime-image">
            <div className="content">
              <h1>Sprinverse</h1>
            </div>

            <img src={Group} alt="" />
          </div>
          <div className="apps">
            <img src={Appstore} alt="" />
            <img src={Google} alt="" />
            <img src={Amazon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
