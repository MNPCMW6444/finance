import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import memory from "./memory.png"
import attention from "./attention2.png"
import multiplayer from "./multiplayer.png"
import performance from ".//performance.png"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid
                container
                width="100vw"
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 5 }}
                justifyContent="center"
                alignItems="center"
                direction="column"
            >
                <Grid item xs={12} md={12} lg={12}>
                    <Typography align="center" sx={{ padding: "1em", maxWidth: "70vW", fontSize: "2em" }} variant="h4">
                        If we didn't change your mind - you can!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12} height="100vhs">
                    <Typography sx={{ fontSize: "1.5em" }} align="center" variant="h5" >
                        100% money back guarantee for 30 days!
                    </Typography>
                    <br></br>
                </Grid>
            </Grid>

            <Grid container justifyContent="center"
                height="60vh"
                width="100vw"
                alignItems="center"
                direction="row" sx={{ padding: "5vh" }} rowSpacing={{ xs: 1, sm: 2, md: 2 }} columnSpacing={{ xs: 3, sm: 2, md: 2 }}>
                <Grid item container xs={6} width="35vh" height="30vh" md={6} sx={{ maxWidth: "40vw" }} alignItems="center" justifyContent="center" direction="column">
                    <Grid item>
                        <Avatar alt="attention" src={attention} sx={{ width: "10vh", height: "10vh" }}></Avatar>
                    </Grid>
                    <Grid item>

                        <Typography sx={{ fontSize: "1em" }} align='center'>Performance enhancement neurofeedback training for Attention, focus and memory! </Typography>
                    </Grid>

                </Grid>
                <Grid item container xs={6} width="35vh" height="30vh" md={6} alignItems="center" justifyContent="center" sx={{ maxWidth: "40vw" }} direction="column" >
                    <Grid item>
                        <Avatar alt="memory"
                            src={memory}
                            sx={{ width: "10vh", height: "10vh" }}></Avatar>
                    </Grid>
                    <Grid item >

                        <Typography sx={{ fontSize: "1em" }} align='center'>Wellbeing neurofeedback training for Anxiety and stress relief and mindfulness! </Typography>
                    </Grid>
                </Grid>

                <Grid item container width="35vh" height="30vh" xs={6} md={6} justifyContent="center" alignItems="center" direction="column">
                    <Grid item>
                        <Avatar src={multiplayer}
                            sx={{ width: "10vh", height: "10vh" }}></Avatar>
                    </Grid>
                    <Grid item>

                        <Typography sx={{ fontSize: "1em" }} align='center'>The first and only online multyplayer neurofeedback training platform</Typography>
                    </Grid>
                </Grid>

                <Grid item container width="35vh" height="30vh" xs={6} md={6} alignItems="center" justifyContent="center" direction="column">
                    <Grid item>
                        <Avatar src={performance} alt="performance"
                            sx={{ width: "10vh", height: "10vh" }}></Avatar>
                    </Grid>
                    <Grid item >

                        <Typography sx={{ fontSize: "1em" }} align='center'>  Science proved brain prformence assasment to check your progress</Typography>
                    </Grid>
                </Grid>


            </Grid>

        </Box >
    );
}
