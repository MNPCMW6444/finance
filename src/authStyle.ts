import orange from "@mui/material/colors/orange";
const s = {
  unselected: {
    border: orange[900],
    backgroundColor: orange[100],
    borderRadius: "10px",
    color: orange[900],
    "&:hover": {
      backgroundColor: orange[400],
    },
  },
  selected: {
    border: orange[900],
    backgroundColor: orange[900],
    color: orange[100],
    borderRadius: "10px",

    "&:hover": {
      border: orange[900],
      backgroundColor: orange[900],
      color: orange[100],
      borderRadius: "10px",
      cursor: "default",
    },
  },
};
export default s;
