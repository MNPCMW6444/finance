import Axios from "axios";
import { useEffect } from "react";
import { Store } from "react-notifications-component";
import domain from "./domian";

interface SignupFinProps {
  setLabel: Function;
  email: string;
  secretKey: string;
  fullname: string;
  password: string;
  passwordagain: string;
  l: any;
  closemodal: any;
}

export default function SignupFin(props: SignupFinProps) {
  const {
    setLabel,
    email,
    secretKey,
    fullname,
    password,
    passwordagain,
    l,
    closemodal,
  } = props;
  useEffect(() => {
    const signupFin = async () => {
      try {
        await Axios.post(domain + "user/signupfin", {
          email,
          key: secretKey,
          fullname,
          password,
          passwordagain,
        });
        setLabel("Success!");
        closemodal();
        l();
        setTimeout(() => setLabel("Continiue to Home Page"), 1500);
      } catch (err: any) {
        Store.removeAllNotifications();
        Store.addNotification({
          title: "Error",
          message: err.response.data.clientError,
          type: "danger",
          container: "bottom-center",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
          insert: "top",
        });
        setLabel("Error!");
        setTimeout(() => setLabel("Sign Up"), 1500);
      }
    };
    signupFin();
  }, [email, fullname, secretKey, password, passwordagain, setLabel, l]);
  return null;
}
