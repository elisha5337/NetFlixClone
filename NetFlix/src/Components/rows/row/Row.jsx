import React, { useEffect, useState } from "react";
import axios from "../../../utils/Axios.jsx";
import "./Row.css";
import movieTrailer from "movie-trailer";

import Youtube from "react-youtube";
import Request from "../../../utils/Request";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); // Changed to 'movies' for clarity
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchMovies = async () => {
      // Renamed to 'fetchMovies' for clarity
      try {
        const req = await axios.get(fetchUrl); // Changed 'title' to 'fetchUrl'
        setMovies(req.data.results); // Assuming the API returns results in 'data.results'
        console.log("Data fetched:", req.data.results);
        console.log("Fetch URL:", fetchUrl); // Changed 'title' to 'fetchUrl'
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };
    fetchMovies();
  }, [fetchUrl]); // Added fetchUrl as a dependency
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.original.name).then((url) => {
        console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams);
        console.log(urlParams.get("v"));
        setTrailerUrl(urlParams.get("v"));
      });
    }
  };
  const opts = {
    height: "390",
    width: "500px",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ width: "100%", badckgroundColor: "black" }}>
        <div
          style={{
            marginTop: "0",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "0",

            padding: "40px",
            width: "600px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </div>
  );
}

export default Row;

/*

  */

// useEffect(() => {
//   const fetchMovie = async () => {
//     try {
//       const req = await axios.get(request.fetch1);
//       setMovie(
//         req.data.results[Math.floor(Math.random() * request.fetch1.length)]
//       ); // Use req.data to get the actual movie data
//     } catch (error) {
//       console.log("Error fetching movie data:", error);
//     }
//   };

//   fetchMovie(); // Call the function to fetch movie data
// }, [])
