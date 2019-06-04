import React from "react";

const Meme = props => {
  return (
    <div className="container mb-5 mt-5">
      <img className="w-60" src={props.targetMeme.url} />
    </div>
  );
};

export default Meme;
