import { Avatar, Button, styled, Typography } from "@mui/material";
import blue from "@mui/material/colors/blue";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import background from "src/silver-background-for-christmas-1024x725.jpeg"
import DoneIcon from '@mui/icons-material/DoneAll';
import DoneIcon2 from '@mui/icons-material/Done';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "30px",
    border: "solid",
    borderWidth: "3px",
    borderColor: "#C0C0C0",
    backgroundColor: blue[50]
}));
const Item2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "30px",
    border: "solid",
    borderWidth: "3px",
    borderColor: "#FFD700",
    backgroundColor: blue[50]


}));

export default function Pricing() {
    return (
        <Grid container
            justifyContent="center"
            width="100vw"
            alignItems="center"
            direction="row"
            sx={{ padding: "3vh" }} rowSpacing={0} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
            <Grid item xs={12} width="20vh" height="15vh">
                <Typography sx={{ padding: "1vh", textAlign: "center" }} variant="h4">
                    Join Neurobica and boost your brain to the next level!
                </Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={4} md={6} height="50vh">
                <Item elevation={2} sx={{ fontSize: "30px", minHeight: "55vh", maxWidth: "55vh" }} >
                    <Grid item >

                        <Typography sx={{ paddingBottom: "5px" }} variant="h4" >Standard</Typography>
                        <Grid container
                            width="100vw"
                            direction="row"
                            rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                            <Grid item md={12} xs={12} spacing={{ xs: 2, md: 4, lg: 5 }}>
                                <Typography variant="h4" color="black">12.99$ </Typography>
                                <Typography color="black">/mounth </Typography>
                                <Button variant="contained" sx={{ color: "white", backgroundColor: "#C0C0C0" }}>Select</Button>
                            </Grid>

                            <Grid item md={12} xs={12}>
                                <DoneIcon2 sx={{ color: "green" }} />

                                <Typography sx={{ fontSize: "13px" }}>One training domain</Typography>
                                <DoneIcon2 sx={{ color: "green" }} />
                                <Typography sx={{ fontSize: "13px" }}>Multiplayer</Typography>



                            </Grid>
                        </Grid>

                    </Grid>
                </Item>
            </Grid>
            <Grid item xs={6} height="52vh">
                <Item2 elevation={20} sx={{ fontSize: "30px", minHeight: "57vh", maxWidth: "60vh" }} >
                    <Grid item >
                        <Typography sx={{ paddingBottom: "5px" }} variant="h4" >Premium</Typography>
                        <Grid container
                            width="100vw"
                            direction="row"
                            rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                            <Grid item md={12} xs={12}>
                                <Typography variant="h4" color="black">19.99$ </Typography>
                                <Typography color="black">/mounth </Typography>
                                <Button variant="contained" sx={{ color: "black", backgroundColor: "#FFD700" }}>Select</Button>
                            </Grid>

                            <Grid item md={12} xs={12}>
                                <DoneIcon sx={{ color: "green" }} />

                                <Typography sx={{ fontSize: "13px" }}>All training domains</Typography>
                                <DoneIcon sx={{ color: "green" }} />
                                <Typography sx={{ fontSize: "13px" }}>Access to cumulative workouts</Typography>
                                <DoneIcon sx={{ color: "green" }} />
                                <Typography sx={{ fontSize: "13px" }}>Muliyplayer</Typography>
                                <DoneIcon sx={{ color: "green" }} />
                                <Typography sx={{ fontSize: "13px" }}>Brain performance assasment tests for progress tracking
                                </Typography >


                            </Grid>
                        </Grid>

                    </Grid>
                </Item2>
            </Grid>

        </Grid >
    )
}
