import React from "react";
import API from "../../utils/API";
import { Container, Col, Row, ListGroup, Image } from "react-bootstrap";
import "./index.css";
var DB = API.getBusinesses();
console.log(DB);

function RestaurantGroup(props) {
  return (
    <main>
      <ListGroup variant="flush">
        <ListGroup.Item border="success" className="side">
          <h5>
            {" "}
            {DB[0].name}
            {"--"}
            {DB[0].price}
          </h5>

          <span>
            <Image src={DB[0].image_url} roundedCircle />

            <a href={`tel:${DB[0].display_phone}`}>{DB[0].display_phone}</a>
          </span>
        </ListGroup.Item>

        <ListGroup.Item className="side">
          {" "}
          <h5>
            {" "}
            {DB[0].name}
            {"--"}
            {DB[0].price}
          </h5>
          <span>
            <Image src={DB[0].image_url} roundedCircle />

            <a href={`tel:${DB[0].display_phone}`}>{DB[0].display_phone}</a>
          </span>
        </ListGroup.Item>
      </ListGroup>
    </main>
  );
}

export default RestaurantGroup;
