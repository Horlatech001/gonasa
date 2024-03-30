import "./home.css";
import Senator from "../../images/senator.png";
import Reps from "../../images/reps.png";
import States from "../../images/933 State.png";
import Gov1 from "../../images/Abdulrahman (1).png";
import Gov2 from "../../images/Seyi.png";
import Rep1 from "../../images/Rectangle 19882.png";
import Rep2 from "../../images/Rectangle 19883.png";
import Rep3 from "../../images/Rectangle 19884.png";
import Rep4 from "../../images/Rectangle 19885.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid hero_banner">
        <div className="hero_text">
          <h4>DO YOU KNOW THOSE</h4>
          <h1>ELECTED TO MAKE DECISIONS</h1>
          <h4>
            ON YOUR <span className="line">BEHALF</span>?
          </h4>
        </div>
      </div>

      <div className="container-fluid categories_section">
        <div className="row">
          <div className="inner_cat">
            <div className="boxes">
              <img src={Senator} alt="senator" />
            </div>
            <div className="boxes">
              <img src={Reps} alt="Reps" />
            </div>
            <div className="boxes">
              <img src={States} alt="States" />
            </div>
          </div>
          <div className="cat_text">
            <p>
              It's difficult to search through a vast amount of information and
              locate exactly what you're looking for. You won't have to worry
              about that thanks to INRID’s many features.
            </p>
          </div>
          <hr className="mt-3" />
        </div>

        <div className="row mb-5">
          <div className="state_text">
            <h4>Nigerian State</h4>
            <h4>Governors</h4>
          </div>

          <div className="governors">
            <div className="govs_box">
              <img src={Gov1} alt="Abdulrahman" />
              <h5>AbdulRahman</h5>
              <h5>AbdulRasaq</h5>
              <h6>NGF, Chairman</h6>
            </div>

            <div className="govs_box seyi_box">
              <img src={Gov2} alt="Seyi" />
              <h5>Oluseyi Makinde</h5>
              <h6>NGF, Vice Chairman</h6>
            </div>

            <div className="all_states">
              <div className="state_wrapper">
                <Link to="/governor" className="link-text">
                  <h6>
                    View All <br /> State <br /> Governors
                  </h6>
                </Link>
              </div>
              <div className="state_border"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid assembly">
        <div className="row">
          <div className="state_text">
            <h4>National Assembly</h4>
            <h4>Leadership</h4>
          </div>
        </div>

        <div className="assembly_group row">
          <div className="col-lg-5">
            <div className="assembly_left">
              <div className="aleft_1">
                <img src={Rep1} alt="Godswill" />
                <h5>Godswill Akpabio</h5>
                <h6>Senate President </h6>
              </div>
              <div className="aleft_2">
                <img src={Rep2} alt="Barau" />
                <h5>Barau Jibrin</h5>
                <h6>Deputy Senate President </h6>
              </div>
            </div>

            <div className="all_senators mt-3">
              <div className="a_line"></div>
              <div className="senators">
                <Link className="senator_text" to="/senator">
                  All Senators
                </Link>
              </div>
              <div className="a_line"></div>
            </div>
          </div>

          <div className="col-lg-2 m_line">
            <div className="divider"></div>
          </div>

          <div className="col-lg-5">
            <div className="assembly_right">
              <div className="aleft_1">
                <img src={Rep3} alt="Godswill" />
                <h5>Tajudeen Abbas</h5>
                <h6>Speaker</h6>
              </div>
              <div className="aleft_2">
                <img src={Rep4} alt="Barau" />
                <h5>Benjamin Kalu</h5>
                <h6>Deputy Speaker</h6>
              </div>
            </div>

            <div className="all_reps mt-3">
              <div className="r_line"></div>
              <div className="reps">
                <Link className="senator_text" to="/hor">
                  All Reps
                </Link>
              </div>
              <div className="r_line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="state_text">
            <h4>State Assembly</h4>
            <h4>Members</h4>
          </div>
        </div>
        <div className="inner_cat_1">
          <p>
            Click on the button to see all 933 state house of assembly members{" "}
          </p>
          <button className="state_button">State Assembly Members</button>
        </div>
      </div>
      <div className="container-fluid footer">
        <div className="row">
          <p className="footer-text">
            {" "}
            &copy; 2024 The ICIR, All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
