import React from "react";
import "./main.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

import legoImg from "./starwars.jpg";

const Main = props => {
  return (
    <div className="mainContainer">
      <CardDeck>
        <Card>
          <CardImg top height="50%" src={legoImg} alt="Card image cap" />
          <CardBody>
            <CardTitle>
              <h2>Name: {props.name}</h2>
            </CardTitle>
            <CardSubtitle>
              <h3>Character Attributes</h3>
            </CardSubtitle>
            <CardText>
              <p>Height: {props.height}</p>
            </CardText>
            <CardText>
              <p>Mass: {props.mass}</p>
            </CardText>
            <CardText>
              <p>Hair Color: {props.hair_color}</p>
            </CardText>
            <CardText>
              <p>Skin tone: {props.skin_color}</p>
            </CardText>
            <CardText>
              <p>Eye color: {props.eye_color}</p>
            </CardText>
            <CardText>
              <p>Birthyear: {props.birth_year}</p>
            </CardText>
            <CardText>
              <p>Gender: {props.gender}</p>
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        {/* <Card>
          <CardImg top width="100%" src="" alt="Card image cap" />
          <CardBody>
            <CardTitle>Name: {props.name}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card> */}
      </CardDeck>
      {/* <CardTitle>
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardSubtitle>Sub-Title</CardSubtitle>
          <CardText>Card Text</CardText>
          <Button>Submit</Button>
        </CardBody>
      </CardTitle> */}
    </div>
  );
};

export default Main;
