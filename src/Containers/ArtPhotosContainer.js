import React from "react";
import ArtCard from "../Components/ArtCard";
import ArtContainer from "./ArtContainer";
import "../styles/Arts.css";

const ArtPhotosContainer = ({ arts, selectArt }) => {
  const randomArts = arts.sort(() => Math.random() - 0.5);

  return (
    <div className="all-arts">
      {randomArts.map((art) => (
        <ArtCard key={art.id} art={art} selectArt={selectArt} />
      ))}
    </div>
  );
};

export default ArtPhotosContainer;
