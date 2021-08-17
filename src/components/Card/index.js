import React from "react";
import {
  CardDiv,
  CardHeader,
  CardBody,
  CardHeaderContainer,
  CardElementButton,
} from "./CardElements";

const Card = ({ imgtype, title, body }) => {
  return (
    <CardDiv>
        <CardHeaderContainer>
    <CardHeader />
    </CardHeaderContainer>
        <img
            src={imgtype}
            style={{
            position: "relative",
            top: "-40px",
            height: "67px",
            }}
        />
        <CardBody>
            <h2>{title}</h2>
            <p>{body}</p>
            <a target="_blank" href="https://wa.me/8888807242">
                <CardElementButton>
                    Call Now
                </CardElementButton>
            </a>
        </CardBody>
    </CardDiv>
  );
};

export default Card;
