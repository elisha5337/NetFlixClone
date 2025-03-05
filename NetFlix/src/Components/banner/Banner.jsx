import React, { useState, useEffect } from "react";
import axios from "../../utils/Axios";
import request from "../../utils/Request"; // Make sure to import your request object
import img1 from "../../../../assets/mobile.jpg";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const req = await axios.get(request.fetch1);
        setMovie(
          req.data.results[Math.floor(Math.random() * request.fetch1.length)]
        ); // Use req.data to get the actual movie data
      } catch (error) {
        console.log("Error fetching movie data:", error);
      }
    };

    fetchMovie(); // Call the function to fetch movie data
  }, []); // Add an empty dependency array to run only once on mount
  console.log("Movie has data fetched:", movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div
        className="back"
        style={{
          color: "red",
          background: `url(${img1})`,
          backgroundPosition: "centder",
          backgroundRepeat: "no-rfepeat",
        }}
      >
        Netflix
      </div>
      <div></div>
      <div
        className="banner"
        style={{
          background: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="Bcontents">
          <h1> {movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner_buttons">
            <button className="button1">Play</button>
            <button className="button2">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>{" "}
          <h1>This is banner</h1>
        </div>{" "}
        <div className="fade-bottom"> </div>
      </div>
    </>
  );
}

export default Banner;
