import React from "react";
import Header from "../componet/header";
import Footer from "../componet/footer";
import FirstComp from "../componet/firstComp";
import { Card, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


import secBackground from "../img/timage.png";
import marrImage from "../img/marrImage.png";

import "../App.css";


export default function froentPage() {
  return (
    <>
      <FirstComp></FirstComp>

      <div>
        <Card
          className="text-center"
          border="0"
          style={{
            backgroundImage: `url(${secBackground})`,
            backgroundRepeat: "no-repeat",
          }}
          fluid
        >
          <Card.Title className="p-4" style={{ color: "#FFF" }} as="h3">
            OUR GOAL
          </Card.Title>
          <Card.Body className="transparent-card" border="0" as="h4">
            <ListGroup
              variant="flush"
              className="transparent-card"
              border="0"
              as="ul"
            >
              <ListGroup.Item className="transparent-card" as="li">
                - Help poor by making online services accessible
              </ListGroup.Item>
              <ListGroup.Item className="transparent-card" as="li">
                - Help connecting community people by providing FREE websites
              </ListGroup.Item>
              <ListGroup.Item className="transparent-card" as="li">
                - Help bridging marriage match between Rich & Poor.
              </ListGroup.Item>
              <ListGroup.Item className="transparent-card" as="li">
                - Help poor in conducting marriage ceremony.
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>

      <Container style={{ backgroundColor: "#cbc6c6"}} fluid className="p-5">
        <Row>
          <Col> 
          <img src={marrImage} class="rounded" alt="Matrimony image" width="90%" />
          
          </Col>
          <Col>
            <Card border="0" fluid className="transparent-card">
              <Card.Title className="p-4" style={{ color: "#FFF", FontFamily: "Jura"}} as="h2">
                Helping Poor in <span style={{ color: "red" }} >  Marriage </span>
              </Card.Title>
              <Card.Body className="transparent-card" border="0" as="h6">
                <ListGroup
                  variant="flush"
                  className="transparent-card"
                  border="0"
                  as="ul"
                >
                  <ListGroup.Item className="transparent-card" as="li">
                    We help poor Brides/Grooms finding their matches by
                    <span style={{ color: "red" }} > Sponsoring </span> PREMIUM ACCOUNT charges 100%. Making it
                    absolutely FREE.
                  </ListGroup.Item>
                  <ListGroup.Item className="transparent-card" as="li">
                    AND partly sponsoring PREMIUM ACCOUNT charges for all others
                    for encouragement. websites
                  </ListGroup.Item>
                  <ListGroup.Item className="transparent-card" as="li">
                    Also conduct mass Bride/Groom Mela, matrimony selection
                    events in associations with different community
                  </ListGroup.Item>
                  <ListGroup.Item className="transparent-card" as="li">
                    <Button variant="danger"> Donate </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}
