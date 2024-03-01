'use client'
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import Modal from "./components/Modal";
import { AiOutlineSearch } from "react-icons/ai";

const ListCountry = () => {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rowsPerPage = 25;

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
        setLoading(false);
      });
  }, []);

  const filteredData = searchTerm
    ? countryData.filter((item:any) =>
        item.name.official.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : countryData;

  const pageCount = Math.ceil(filteredData.length / rowsPerPage);
  const pagination = Array.from({ length: pageCount }, (_, index) => index + 1);

  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedCountries = filteredData.slice(startIndex, endIndex);

  const handleCountryClick = (country:any) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        style={styles.searchInput}
      />
      <AiOutlineSearch style={{
        position: "absolute",
        top: "25px",
        right: "30px",
        color: "#666",
        fontSize: "30px",
      }} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={styles.countryList}>
          {displayedCountries.map((item:any, index) => (
            <div key={index} style={styles.countryCard}>
              <img
                src={item?.flags?.png}
                alt="Country Flag"
                style={styles.flagImage}
              />
              <p onClick={()=>handleCountryClick(item)} style={styles.countryName}>{item?.name?.official}</p>
              <p style={styles.countryInfo}>CCA2: {item?.cca2}</p>
              <p style={styles.countryInfo}>CCA3: {item?.cca3}</p>
              {item?.name?.nativeName?.ell && (
                <p style={styles.countryInfo}>
                  Native Name (Ell): {item?.name?.nativeName?.ell?.official}
                </p>
              )}
              {item?.name?.nativeName?.tur && (
                <p style={styles.countryInfo}>
                  Native Name (Tur): {item?.name?.nativeName?.tur?.official}
                </p>
              )}
              <p style={styles.countryInfo}>
                Country Calling Codes: {item?.idd?.root}
              </p>
              <p style={styles.countryInfo}>
                Alternative Country Name: {item?.altSpellings}
              </p>
            </div>
          ))}
        </div>
      )}
      <div style={styles.paginationContainer}>
        {pagination.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              ...styles.paginationButton,
              ...(currentPage === page ? styles.activePaginationButton : {}),
            }}
            onMouseEnter={(e:any) => (e.target.style.backgroundColor = "#f0f0f0")}
            onMouseLeave={(e:any) => (e.target.style.backgroundColor = "white")}
          >
            {page}
          </button>
        ))}
      </div>
      {isModalOpen && (
        <Modal
          country={selectedCountry}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ListCountry;
