//import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
//import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Avatar from "@mui/material/Avatar";
//import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import yoad from "./money-svgrepo-com.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
//import vi from "/.sign-check-svgrepo-com.svg"
/* const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
})); */

export default function Micael() {

  const matches = useMediaQuery('(min-width:600px)');


  return (
    <Box sx={{ width: "100vw", hight: "100vh", backgroundColor: matches ? "green" : "red" }}>
      <Grid
        container
        width="100vw"
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item xs={12}>
          <Avatar
            alt="Remy Sharp"
            src={yoad}
            sx={{ width: "15vw", height: "15vw" }}
          />
        </Grid>
        <Grid item xs={12} width="70%">
          <Typography sx={{ padding: "2vh", textAlign: "center" }} variant="h5">
            You get much more for less with Neurobica!
          </Typography>
        </Grid>
        <Grid
          item
          xs={10}
          lg={8}
          md={8}
          sx={{ width: "100vw", hight: "100vh" }}
        >
          <Table
            aria-label="simple table"
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell sx={{ fontSize: "25px" }} align="center">Neurobica</TableCell>
                <TableCell align="center">Others</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontSize: "25px" }} align="center">Price</TableCell>
                <TableCell align="center">
                  Only 14.99$ a month or 99.99$ a year!
                </TableCell>
                <TableCell align="center">80$ - 200$ per session</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: "25px" }} align="center">Value</TableCell>
                <TableCell align="center">
                  Fully customizable, dynamic training program
                  and a walkthrough that guides you towards becoming your own personal trainer!
                </TableCell>
                <TableCell align="center">
                  Automated and linear training programs that generally work
                </TableCell>
              </TableRow>
              <TableRow></TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: "25px" }} align="center">Comfort</TableCell>
                <TableCell align="center">
                  Can be done anywhere, at any time, only requires your brain and phone!
                </TableCell>
                <TableCell align="center">
                  Can only be done in a clinic or by personally meeting with a
                  theraphist/trainer
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Box>
  );
}
