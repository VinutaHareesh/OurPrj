import React from "react";
import Header from "../componet/header";
import Footer from "../componet/footer";
import road from "../img/road.png";
import { Card, Container } from "react-bootstrap";


function ComingSoon() {
  const redBoxStyle = {
    // Set the background color to red
    backgroundColor: "red",

    // Add padding for spacing
    padding: "20px",

    // Set the text color to white
    color: "white",
  };

  return (
    <>
      {/* <Card
        className="text-center"
        border="0"
        style={{
          backgroundImage: `url(${road})`, backgroundRepeat: "no-repeat",
          height: "100vh",
          width:'100%' 
        }}
        fluid
      >
        <Card.Title className="p-4" style={{ color: "#FFF" }} as="h1" >
          <mark> COMING SOON </mark>
        </Card.Title>

      </Card> */}

      <Container
        style={{
          backgroundImage: `url(${road})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          
        }}
        className="d-flex align-items-center  
                        justify-content-center vh-100"
      >
        <Card>
          <Card.Body>
            <Card.Title className="p-4" style={{ color: "#FFF" }} as="h1">
              <mark> COMING SOON </mark>
            </Card.Title>
            {/* <div style={redBoxStyle}> 
                        <h5 className="card-title"> 
                            Red Box with Text 
                        </h5> 
                        <p className="card-text"> 
                            This is a red box with some text 
                        </p> 
                    </div>  */}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ComingSoon;