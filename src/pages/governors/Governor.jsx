import "./governor.css";
import Alex from "../../images/Alex otti.jpg";
import Fintiri from "../../images/Fintiri.jpg";
import Umo from "../../images/Umo.jpg";
import Charles from "../../images/Charles-Soludo.jpg";
import Bala from "../../images/Bala.jpg";
import Diri from "../../images/Douye-Diri.jpg";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useState } from "react";
import states from "../../../src/data";

const Governor = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [visibleStates, setVisibleStates] = useState(states.slice(0, 5));

  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = states.filter(state =>
      state.label.toLowerCase().includes(query)
    );
    setVisibleStates(filtered.slice(0, 5)); // Slice the first 5 checkboxes from the filtered list
  };


  const filteredStates = visibleStates.filter((state) =>
    state.label.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      <div className="title">
        <p>Nigerian State Governors</p>
        <div className="line"></div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 filter_box">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <div
                    className="accordion-button collapsed"
                    type="button"
                    onClick={toggleAccordion1}
                    aria-expanded={isOpen1 ? "true" : "false"}
                    aria-controls="flush-collapseOne"
                    data-bs-target="#flush-collapseOne"
                    data-bs-toggle="collapse"
                  >
                    State
                  </div>
                  <div className="icon-wrapper">
                    {isOpen1 ? <BiMinus /> : <BiPlus />}
                  </div>
                </h2>
                <div
                  id="flush-collapseOne"
                  className={`accordion-collapse collapse ${
                    isOpen1 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <input
                      type="text"
                      placeholder="Search State"
                      onChange={handleSearch}
                    />
                    <ul className="mt-3">
                      {visibleStates.map((state) => (
                        <li key={state.id}>
                          <input type="checkbox" id={state.id} />
                          <label htmlFor={state.id} className="indented-label">{state.label}</label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <div
                    className="accordion-button collapsed"
                    type="button"
                    onClick={toggleAccordion2}
                    aria-expanded={isOpen2 ? "true" : "false"}
                    aria-controls="flush-collapseTwo"
                    data-bs-target="#flush-collapseTwo"
                    data-bs-toggle="collapse"
                  >
                    Party
                  </div>
                  <div className="icon-wrapper">
                    {isOpen2 ? <BiMinus /> : <BiPlus />}
                  </div>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className={`accordion-collapse collapse ${
                    isOpen2 ? "show" : ""
                  }`}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <input
                      type="text"
                      placeholder="Search Party"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 governor_box">
            <div className="g_card1">
              <div className="governor_card">
                <div>
                  <img src={Alex} alt="alex" />
                </div>
                <div className="names">
                  <span>ALEX</span>
                  <span>OTTI</span>
                </div>
                <p>Abia State</p>
              </div>
              <div className="governor_card">
                <div>
                  <img src={Fintiri} alt="alex" />
                </div>
                <div className="names">
                  <span>AHMADU UMARU</span>
                  <span>FINTIRI</span>
                </div>
                <p>Adamawa State</p>
              </div>
              <div className="governor_card">
                <div>
                  <img src={Umo} alt="alex" />
                </div>
                <div className="names">
                  <span>UMO</span>
                  <span>ENO</span>
                </div>
                <p>Akwa Ibom State</p>
              </div>
            </div>
            <div className="g_card1">
              <div className="governor_card">
                <div>
                  <img src={Charles} alt="alex" />
                </div>
                <div className="names">
                  <span>CHARLES</span>
                  <span>SOLUDO</span>
                </div>
                <p>Anambra State</p>
              </div>
              <div className="governor_card">
                <div>
                  <img src={Bala} alt="alex" />
                </div>
                <div className="names">
                  <span>BALA</span>
                  <span>MUHAMMED</span>
                </div>
                <p>Bauchi State</p>
              </div>
              <div className="governor_card">
                <div>
                  <img src={Diri} alt="alex" />
                </div>
                <div className="names">
                  <span>DOUYE</span>
                  <span>DIRI</span>
                </div>
                <p>Bayelsa State</p>
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

export default Governor;
