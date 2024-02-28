import React from "react";

interface ModalProps {
  country: any;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ country, closeModal }) => {
  const modalStyle: React.CSSProperties = {
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const modalContentStyle: React.CSSProperties = {
    backgroundColor: "#fefefe",
    padding: "20px",
    border: "1px solid #888",
    width: "40%",
    borderRadius: "8px",
    position: "relative",
    color: "black", // Set text color to black
    textAlign: "left", // Display text as column
    display: "flex",
    flexDirection: "column",
  };

  const closeButtonStyle: React.CSSProperties = {
    color: "#aaa",
    fontSize: "28px",
    fontWeight: "bold",
    cursor: "pointer",
    position: "absolute",
    top: "10px",
    right: "10px",
  };

  const paragraphStyle: React.CSSProperties = {
    marginBottom: "5px",
  };

  const flagImageStyle: React.CSSProperties = {
    width: "150px",
    height: "100px",
    margin: "auto", // Center the flag image horizontally
    display: "block", // Ensure the image takes up the full width available
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <span style={closeButtonStyle} onClick={closeModal}>&times;</span>
        <div style={{ marginBottom: "20px" }}>
          <img
            src={country?.flags?.png}
            alt="Country Flag"
            style={flagImageStyle}
            />
        </div>
            <h2>{country.name.official}</h2>
        <p style={paragraphStyle}>CCA2: {country?.cca2}</p>
        <p style={paragraphStyle}>CCA3: {country?.cca3}</p>
        {/* Additional information goes here */}
        {country?.name?.nativeName?.ell && (
          <p style={paragraphStyle}>Native Name (Ell): {country?.name?.nativeName?.ell?.official}</p>
        )}
        {country?.name?.nativeName?.tur && (
          <p style={paragraphStyle}>Native Name (Tur): {country?.name?.nativeName?.tur?.official}</p>
        )}
        <p style={paragraphStyle}>Country Calling Codes: {country?.idd?.root}</p>
        <p style={paragraphStyle}>Alternative Country Name: {country?.altSpellings}</p>
      </div>
    </div>
  );
};

export default Modal;
