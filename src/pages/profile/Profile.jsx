import "./profile.css";
import Alex from "../../images/Alex otti.jpg";
import { BiUserCircle } from "react-icons/bi";
import { BiCabinet } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
const Profile = () => {
  return (
    <>
      <div className="container profile">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 right_section pt-5">
            <div className="image_box">
              <img src={Alex} alt="Alex" />
            </div>
            <div>
              <div className="name">
                <span>ALEX OTTI</span>
                <span>Abia State Governor</span>
              </div>
              <div className="dob mt-2">
                <b>Date of Birth:</b>
                <span className="ms-1">1962-12-09</span>
              </div>
              <div className="party">
                <b>Party: </b>
                <span className="ms-1">APC</span>
              </div>
              <div className="party">
                <b>Phone: </b>
                <span className="ms-1">09035537733</span>
              </div>
              <div className="party">
                <b>Email: </b>
                <span className="ms-1">Otti@gmail.com</span>
              </div>
              <div className="email">
                <b>Address: </b>
                <span className="ms-1">-</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 offset-lg-1 pt-5">
            <div className="navigations">
              <ul class="nav nav-tabs nav-fill">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="tab" href="#home">
                    <span class="icon">
                      <BiUserCircle />
                    </span>
                    <span class="text">About</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#menu1">
                    <span className="icon">
                      <BiCabinet />
                    </span>
                    <span className="text">Previous Offices</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#menu2">
                    <span className="icon">
                      <FaUserGraduate />
                    </span>
                    <span className="text">Educational History</span>
                  </a>
                </li>
              </ul>

              <div class="tab-content">
                <div class="tab-pane container active" id="home">
                  <p className="mt-3">
                    Alex Otti (born 18 February 1965) is a Nigerian economist,
                    banker, investor, philanthropist, and politician, serving as
                    the current Governor of Abia State in Nigeria. He is from
                    Isiala-ngwa. Otti is the former Group Managing Director of
                    Diamond Bank Plc, a retail financial institution in Nigeria.
                    Otti was a gubernatorial candidate of Abia State on the
                    platform of All Progressives Grand Alliance (APGA).
                  </p>
                </div>
                <div class="tab-pane container fade" id="menu1">
                  ...
                </div>
                <div class="tab-pane container fade" id="menu2">
                  ...
                </div>
              </div>
            </div>
          </div>
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

export default Profile;
