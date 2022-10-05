import { AppBar, Grid, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import orange from "@mui/material/colors/orange";
import { useCallback, useEffect, useRef, useState } from "react";
import logo from "./logo512.png";
import Why from "./Why";
import Michaelforreal from "./Michaelforreal";
import Mobile from "./Mobile";
import Nav from "./Nav";
import Register from "./Register";
import blue from "@mui/material/colors/blue";
import Features from "./Features";
import green from "@mui/material/colors/green";
import Pricing from "./Pricing";
import Axios from "axios";
import domain from "./domian";

Axios.defaults.withCredentials = true;

const page = {
  height: "100vh",
  overflow: "hidden",
  width: "100vw",
  paddingTop: "60px",
};

const allSx = {
  width: "100px",
  height: "100px",
};

const logoSx = {
  height: "60px",
  width: "60px",
  position: "static",
  top: "0px",
  left: "0px",
};

function App() {
  const l = useCallback(async () => {
    try {
      const res = await Axios.get(domain + "user/signedin");
      setuser(res.data);
    } catch (e) {}
  }, []);

  const [ismobile, setismobile] = useState(window.innerWidth < 600);
  const [user, setuser] = useState(null);
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setismobile(window.innerWidth < 600);
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    scrollToHome();

    l();
  }, [l]);

  const whyRef = useRef(null);
  const scrollToWhy = () =>
    (whyRef.current as any).scrollIntoView({ behavior: "smooth" });

  const homeRef = useRef(null);
  const scrollToHome = () =>
    (homeRef.current as any).scrollIntoView({ behavior: "smooth" });

  const featuresRef = useRef(null);
  const scrollToFeatores = () =>
    (featuresRef.current as any).scrollIntoView({ behavior: "smooth" });

  const pricingRef = useRef(null);
  const scrollToPricing = () =>
    (pricingRef.current as any).scrollIntoView({ behavior: "smooth" });

  const actions = {
    why: scrollToWhy,
    features: scrollToFeatores,
    pricing: scrollToPricing,
  };

  const actionsM = {
    why: () => setTimeout(() => scrollToWhy(), 0),
    features: () => setTimeout(() => scrollToFeatores(), 0),
    pricing: () => setTimeout(() => scrollToPricing(), 0),
    home: () => setTimeout(() => scrollToHome(), 0),
  };

  return (
    <Box sx={allSx}>
      {ismobile ? (
        <Mobile
          setuser={setuser}
          actions={actionsM}
          user={user}
          width={width}
        />
      ) : (
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: orange[100],
            height: "60px",
          }}
        >
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Box component="img" src={logo} sx={logoSx}></Box>
              </Grid>
              <Grid item>
                <Nav dir="row" actions={actions} />
              </Grid>
              <Grid item>
                <Michaelforreal
                  setuser={setuser}
                  home={scrollToHome}
                  user={user}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}
      <div ref={homeRef}>
        <Box>
          <Register l={l} user={user} />
          <div ref={whyRef} style={{ ...page, backgroundColor: blue[100] }}>
            <Why />
          </div>
        </Box>
        <Box>
          <div
            ref={featuresRef}
            style={{ ...page, backgroundColor: green[100] }}
          >
            <Features />
          </div>
        </Box>
        <Box>
          <div
            ref={pricingRef}
            style={{ ...page, backgroundColor: orange[100] }}
          >
            <Pricing />
          </div>
        </Box>
      </div>
    </Box>
  );
}

export default App;
