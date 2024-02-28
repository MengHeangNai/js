export const styles: { [key: string]: React.CSSProperties } = {
  countryList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    height: "100%",
    width: "100%",
  },
  countryCard: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    width: "19%",
    height: "340px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    textAlign: "center",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flagImage: {
    maxWidth: "50%", // Set max-width to 100% to ensure image size is constrained within its container
    height: "100px", // Ensures image aspect ratio is maintained
    width:"150px",
    marginBottom: "10px",
    alignSelf: "center",
  },
  countryName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "black",
  },
  countryInfo: {
    fontSize: "14px",
    marginBottom: "5px",
    color: "black",
  },
  searchInput: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    // maxWidth: "300px",
    marginBottom: "10px",
    boxSizing: "border-box",
    fontSize: "16px",
    color: "black",
  },
  container:{
    flex:1,
    background:'white',
    height:'100%',
    padding:20
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  paginationButton: {
    margin: "0 5px",
    padding: "5px 10px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    color: "#333",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  paginationButtonHover: {
    backgroundColor: "#f0f0f0",
  },
  activePaginationButton: {
    backgroundColor: "#007bff",
    color: "black",
  },
};
