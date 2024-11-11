// src/components/MovieDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../movies";

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default MovieDetail;
