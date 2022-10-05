import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import ReqForm from "./ReqForm";
import GenericForm from "./components/GenericForm/GenericForm";
import { Exp } from "./types";

const modalStyle = {
  backgroundColor: "white",
  position: "fixed",
  minWidth: "300px",
  maxWidth: "700px",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  overflowX: "hidden",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "",
  },
};

export default function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      sx={{ height: "100vh" }}
      wrap="nowrap"
    >
      <Grid item>
        <Button
          sx={{
            backgroundColor: "orange",
            color: "black",
            fontSize: "1.1rem",
            borderRadius: "10px",
            fontWeight: 900,
          }}
          onClick={handleOpen}
        >
          Fill a new Budget Request
        </Button>
      </Grid>
      <Grid item>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box
              sx={modalStyle}
              width="84vw"
              height="80vh"
              border="0.2rem solid #000"
              boxShadow={24}
              borderRadius="5vw"
              padding="4vw"
            >
              {/* <ReqForm closeModal={handleClose} /> */}
              <GenericForm
                closeForm={handleClose}
                item={{} as Exp}
                refresh={() => {}}
              />
            </Box>
          </Fade>
        </Modal>
      </Grid>
    </Grid>
  );
}
