import React from "react";
import Header from "../componet/header";
import Footer from "../componet/footer";
import road from "../img/road.png";
import { Card, Container } from "react-bootstrap";


function Soon() {
    const containerStyle = {
        backgroundImage: `url(${road})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',  // Set a minimum height to cover the viewport
        color: 'white',     // Set text color to white or light color for better visibility
      };


  return (
    <>
    <Container fluid style={containerStyle}>
        <Card bg="transparent" text="light">
          <Card.Body>
            <Card.Title className="p-4" style={{ color: "#FFF" }} as="h1">
              <mark> COMING SOON </mark>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Soon;