import "./senator.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useState, useEffect } from "react";
import states from "../../data";
import { parties } from "../../data";
import { Link } from "react-router-dom";

const Senator = ({ senators }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [visibleStates, setVisibleStates] = useState(states.slice(0, 5));
  const [visibleParties, setVisibleParties] = useState(parties.slice(0, 5));

  const [selectedParties, setSelectedParties] = useState([]);

  const [searchQueryState, setSearchQueryState] = useState("");
  const [searchQueryParty, setSearchQueryParty] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [filteredSenators, setFilteredSenators] = useState([]);

  useEffect(() => {
    // Ensure currentPage is set to 1 if filtered result is less than itemsPerPage
    const totalPages = Math.ceil(filteredSenators.length / itemsPerPage);
    if (totalPages === 1 && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [filteredSenators, currentPage]); // Add filteredSenators and currentPage as dependencies

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalPages = Math.ceil(filteredSenators.length / itemsPerPage);

  const renderPagination = () => {
    if (totalPages <= 1) {
      return null; // Hide pagination buttons if there's only one page or less
    }
  
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }
    return pages;
  };
  

  const toggleAccordion = (accordionNumber) => {
    if (accordionNumber === 1) {
      setIsOpen1(!isOpen1);
      setIsOpen2(false);
    } else if (accordionNumber === 2) {
      setIsOpen2(!isOpen2);
      setIsOpen1(false);
    }
  };

  const handleSearchState = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQueryState(query);
    const filtered = states.filter((state) =>
      state.label.toLowerCase().includes(query)
    );
    setVisibleStates(filtered.slice(0, 5));
  };

  const handleSearchParty = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQueryParty(query);
    const filtered = parties.filter((party) =>
      party.label.toLowerCase().includes(query)
    );
    setVisibleParties(filtered.slice(0, 5));
  };

  const handlePartyChange = (e) => {
    const party = e.target.value;
    const isChecked = e.target.checked;

    let updatedParties;
    if (isChecked) {
      updatedParties = [...selectedParties, party];
    } else {
      updatedParties = selectedParties.filter((p) => p !== party);
    }

    setSelectedParties(updatedParties);
  };

  useEffect(() => {
    // Update filtered senators when selected parties change
    const filtered = senators.filter((senator) =>
      selectedParties.length === 0
        ? true
        : selectedParties.includes(senator.party)
    );
    setFilteredSenators(filtered);
  }, [selectedParties, senators]);

  return (
    <>
      <div className="title">
        <p>Distinguished Senators</p>
        <div></div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 filter_box">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <div
                    className="accordion-button collapsed"
                    type="button"
                    onClick={() => toggleAccordion(1)}
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
                      onChange={handleSearchState}
                    />
                    <ul className="mt-3">
                      {visibleStates.map((state) => (
                        <li key={state.id}>
                          <input type="checkbox" id={state.id} />
                          <label htmlFor={state.id} className="indented-label">
                            {state.label}
                          </label>
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
                    onClick={() => toggleAccordion(2)}
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
                      onChange={handleSearchParty}
                    />
                    <ul className="mt-3">
                      {visibleParties.map((party) => (
                        <li key={party.id}>
                          <input
                            type="checkbox"
                            id={party.id}
                            value={party.label}
                            onChange={handlePartyChange}
                            checked={selectedParties.includes(party.label)}
                          />
                          <label htmlFor={party.id} className="indented-label">
                            {party.label}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 senator_box">
            {filteredSenators.slice(indexOfFirstItem, indexOfLastItem).map((senator, index) => (
              <div key={index} className="s_card1">
                <div className="senator_card">
                  <div className="s_img">
                    <img src={senator?.featuredImage} alt={senator.name} />
                  </div>
                  <div className="s_details">
                    <Link className="names" to={`/profile/${senator.id}`}>
                      <span>{`Sen. ${senator?.title}`}</span>
                    </Link>
                    <p>{senator?.district}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <ul className="pagination justify-content-center">
              {renderPagination()}
            </ul>
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

export default Senator;
