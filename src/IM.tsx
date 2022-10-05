import "./authStyle.css";
import LoginPageSignInSignUpStyle from "./authStyle";
import NeurobicaLogo from "./NeurobicaLogo";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { passwordStrength } from "check-password-strength";
/* import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3"; */
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/Email";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Signin from "./Signin";
import Badge from "@mui/icons-material/Badge";
import Lock from "@mui/icons-material/Lock";
import SignupFin from "./SignupFin";
import { Link } from "@mui/material";

export default function IM({ email, e, l, closemodal }: any) {
  const [isSignIn, setIsSignIn] = useState(e || false);
  const [key, setKey] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordagain, setPasswordagain] = useState("");
  const [label, setLabel] = useState<string>(isSignIn ? "Login" : "register");

  const [accept, setaccept] = useState<boolean>(false);

  const passwordValidation =
    passwordStrength(password).value === "Strong" ||
    passwordStrength(password).value === "Medium";

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <NeurobicaLogo height="180px" width="280px" />
      </Grid>
      <Grid item>
        <Box className="loginPageSignInSignUp">
          <ToggleButtonGroup value={isSignIn}>
            <ToggleButton
              onClick={() => {
                setIsSignIn(true);
                setLabel("Login");
              }}
              sx={
                isSignIn
                  ? LoginPageSignInSignUpStyle.selected
                  : LoginPageSignInSignUpStyle.unselected
              }
              value="signin"
            >
              {isSignIn ? "Login" : "Already Registred?"}
            </ToggleButton>
            <ToggleButton
              onClick={() => {
                setIsSignIn(false);
                setLabel("Register");
              }}
              sx={
                isSignIn
                  ? LoginPageSignInSignUpStyle.unselected
                  : LoginPageSignInSignUpStyle.selected
              }
              value="signup"
            >
              {isSignIn ? "Not Registred?" : "Register"}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Grid>
      <Grid item>
        <TextField
          sx={{
            m: 0,
            width: "40vh",
          }}
          id="sandard-basic"
          variant="standard"
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          value={email}
          placeholder="Enter Your Email Address"
          disabled
        />
      </Grid>
      {isSignIn ? (
        <>
          <Grid item>
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              id="tandard-basic"
              variant="standard"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid item>
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              type="text"
              variant="standard"
              label="Full Name (Optional)"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Badge />
                  </InputAdornment>
                ),
              }}
              value={fullname}
              placeholder="Enter Your Full Name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              type="password"
              variant="standard"
              label="key"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              value={key}
              placeholder="Enter Your Key (check you email inbox)"
              onChange={(e) => setKey(e.target.value)}
            />{" "}
          </Grid>
          <Grid item>
            {" "}
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={!passwordValidation && !!password}
              type="password"
              variant="standard"
              label={
                !passwordValidation && !!password
                  ? "Password is to weak"
                  : "Password"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Grid container direction="row" width="100%" height="5px">
              <Grid
                item
                width="25%"
                sx={{ backgroundColor: !!password ? "red" : "white" }}
              ></Grid>
              <Grid
                item
                width="25%"
                sx={{
                  backgroundColor:
                    passwordStrength(password).id > 0 ? "orange" : "white",
                }}
              ></Grid>
              <Grid
                item
                width="25%"
                sx={{
                  backgroundColor:
                    passwordStrength(password).id > 1 ? "yellow" : "white",
                }}
              ></Grid>
              <Grid
                item
                width="25%"
                sx={{
                  backgroundColor:
                    passwordStrength(password).id > 2 ? "green" : "white",
                }}
              ></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={
                password !== passwordagain && !!password && !!passwordagain
              }
              type="password"
              variant="standard"
              label={
                password !== passwordagain && !!password && !!passwordagain
                  ? "Passwords doesn't match"
                  : "Retype Password"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              value={passwordagain}
              placeholder="Confirm Your Password"
              onChange={(e) => {
                setPasswordagain(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              label={
                <Box>
                  I accept the{" "}
                  <Link href={"/termsandpolicy.html"}>
                    terms of use and privacy policy
                  </Link>
                </Box>
              }
              sx={{
                color: "GrayText",
                width: "35vh",
              }}
              control={
                <Checkbox
                  sx={{
                    fontSize: "28",
                  }}
                  checked={accept}
                  onChange={(e) => setaccept(!accept)}
                  name="checkedB"
                  color="default"
                  size="small"
                />
              }
            />
          </Grid>
        </>
      )}
      <Grid />
      {/*  <Grid item xs={4}>
        <GoogleReCaptchaProvider reCaptchaKey="6LcrTYUhAAAAALcocJuPUztaWEIAsY_DdAuRxx8b">
          <GoogleReCaptcha
            onVerify={() => {
              setSsAllowedToSignIn(true);
            }}
          />
        </GoogleReCaptchaProvider>
      </Grid> */}
      <Grid item>
        <Button
          disabled={
            ((!passwordValidation && !!password) ||
              (password !== passwordagain && !!password && !!passwordagain) ||
              !email ||
              !key ||
              !password ||
              !passwordagain ||
              !accept) &&
            !isSignIn
          }
          color="inherit"
          variant="outlined"
          sx={{
            color: "#FF8B17",
            width: "45vh",
            height: "6vh",
            borderRadius: "30px",
          }}
          onClick={() => setLabel(isSignIn ? "Logging In..." : "Registring...")}
        >
          {label}
        </Button>
      </Grid>

      {label === "Logging In..." && (
        <Grid item>
          <Signin
            email={email}
            password={password}
            setLabel={setLabel}
            l={l}
            closemodal={closemodal}
          />
        </Grid>
      )}
      {label === "Registring..." && (
        <Grid item>
          <SignupFin
            setLabel={setLabel}
            email={email}
            secretKey={key}
            fullname={fullname}
            password={password}
            passwordagain={passwordagain}
            l={l}
            closemodal={closemodal}
          />
        </Grid>
      )}
    </Grid>
  );
}
