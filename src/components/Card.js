import React from "react";

const Card = ({id , name , email}) => {
  return (
    <div className="tc br3 ma2 grow dib card">
      <img alt='alien_img' src={`https://robohash.org/${id}?set=set2`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
