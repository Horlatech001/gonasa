import { useEffect, useState } from "react";
import "./profile.css";
import { BiUserCircle } from "react-icons/bi";
import { BiCabinet } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { useParams } from "react-router-dom";
const Profile = ({ senators }) => {
  const { id } = useParams();
  const senatorId = parseInt(id);

  const [senator, setSenator] = useState(null);

  useEffect(() => {
    const foundSenator = senators.find((senator) => senator.id === senatorId);
    setSenator(foundSenator);
  }, [senators, senatorId]);

  if (!senator) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container profile">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 right_section pt-5">
            <div className="image_box">
              <img src={senator?.featuredImage} alt={senator?.title} />
            </div>
            <div>
              <div className="name">
                <span>{`Sen. ${senator?.title}`}</span>
                <span>{senator?.district}</span>
              </div>
              <div className="dob mt-2">
                <b>Date of Birth:</b>
                <span className="ms-1">{senator?.dob}</span>
              </div>
              <div className="party">
                <b>Party: </b>
                <span className="ms-1">{senator?.party}</span>
              </div>
              <div className="party">
                <b>Phone: </b>
                <span className="ms-1">{senator?.phone}</span>
              </div>
              <div className="party">
                <b>Email: </b>
                <span className="ms-1">{senator?.email}</span>
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
              <ul className="nav nav-tabs nav-fill">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#home"
                  >
                    <span className="icon">
                      <BiUserCircle />
                    </span>
                    <span className="text">About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu1">
                    <span className="icon">
                      <BiCabinet />
                    </span>
                    <span className="text">Previous Offices</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#menu2">
                    <span className="icon">
                      <FaUserGraduate />
                    </span>
                    <span className="text">Educational History</span>
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane container active" id="home">
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
                <div className="tab-pane container fade" id="menu1">
                  ...
                </div>
                <div className="tab-pane container fade" id="menu2">
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
