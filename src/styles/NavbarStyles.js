import sizes from "./sizes";
export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh"
  },

  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    },
    [sizes.down("xs")]: {
      display: "none"
    }
  },
  slider: {
    width: "340px",
    margin: "0 20px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "#5bc0de",
      outline: "none",
      border: "2px solid #5bc0de",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px"
    },
    [sizes.down("sm")]: {
      width: "150px"
    }
  },
  container: {
    marginLeft: "auto",
    marginRight: "1.5rem"
  }
};
