import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { BiHeart } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { BiImage } from "react-icons/bi";
//import splogo from './../Splogo.svg';
import background from "../img/fimage1.png";

import "../App.css";

function firstComp() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat' }}
      fluid>
      <Card className="transparent-card" border="0">
        <Card.Title className="p-4">
          <Card className="transparent-card" border="0">
            <Card.Title className="p-4" style={{color: '#FFF'}}>
              Helping your COMMUNITY & Community’s Brides/Grooms
            </Card.Title>
          </Card>
        </Card.Title>

        <Card.Body class="shadow-lg p-3 mb-5 bg-white rounded">
          <Card className="text-center" border="0" >
            <Card.Body border="0">
              <Card.Text className="p-4">
                <ListGroup horizontal>
                  {/* <ListGroup.Item> <img src={splogo} alt="My Logo" /> Sponsoring</ListGroup.Item> */}
                  <ListGroup.Item>
                    {" "}
                    <BiHeart size={30} color="red" /> Sponsoring
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <BsPeople size={30} /> Public Event
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <BiImage size={30} color="blue" /> Photo Gallery
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default firstComp;
