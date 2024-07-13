import { useEffect, useState } from "react";
import "./profile.css";
import { BiUserCircle, BiCabinet } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { useParams } from "react-router-dom";

const MemberProfile = ({ senators, hor, type }) => {
  const { id } = useParams();
  const memberId = parseInt(id);

  const [member, setMember] = useState(null);

  useEffect(() => {
    const foundMember = type === "senator"
      ? senators.find((member) => member.id === memberId)
      : hor.find((member) => member.id === memberId);

    setMember(foundMember);
  }, [senators, hor, memberId, type]);

  if (!member) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container profile">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 right_section pt-5">
            <div className="image_box">
              <img src={member?.featuredImage} alt={member?.title} />
            </div>
            <div>
              <div className="name">
                <span>{`${type === "senator" ? "Sen." : "Hon."} ${member?.title}`}</span>
                <span>{member?.district}</span>
              </div>
              <div className="dob mt-2">
                <b>Date of Birth:</b>
                <span className="ms-1">{member?.dob}</span>
              </div>
              <div className="party">
                <b>Party: </b>
                <span className="ms-1">{member?.party}</span>
              </div>
              <div className="party">
                <b>Phone: </b>
                <span className="ms-1">{member?.phone}</span>
              </div>
              <div className="party">
                <b>Email: </b>
                <span className="ms-1">{member?.email}</span>
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
                  <p className="mt-3" dangerouslySetInnerHTML={{ __html: member?.bio }} />
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

export default MemberProfile;
