const domain =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/"
    : "/server/";
export default domain;
