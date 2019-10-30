export const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://srv.toprating.tk`
    : `http://localhost:5000`;
//export const API_URL = `https://server-rating.herokuapp.com`;
