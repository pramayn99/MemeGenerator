import React from "react";
import { Card, CardImg, Button, CardTitle, CardText } from "reactstrap";

const MemeCard = props => {
  console.log(props);
  return (
    <Card body className="text-center meme-card">
      <CardTitle className="card-title">{props.meme.name}</CardTitle>
      <CardImg bottom width="100%" src={props.meme.url} alt="Card image cap" />
    </Card>
  );
};

export default MemeCard;
