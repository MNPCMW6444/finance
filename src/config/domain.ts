export default process.env.NODE_ENV === "production"
  ? "/server/"
  : "http://localhost:3001/";
