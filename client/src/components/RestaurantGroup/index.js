import React from "react";
import API from "../../utils/API";
import { Container, Col, Row, ListGroup, Image } from "react-bootstrap";
import "./index.css";
var DB = API.getBusinesses();
console.log(DB);

function RestaurantGroup(props) {
  return (
    <main>
      <ListGroup className>
        <ListGroup.Item>
          <h5>
            {" "}
            {DB[0].name}
            {"--"}
            {DB[0].price}
          </h5>

          <span class="side">
            <Image src={DB[0].image_url} roundedCircle />
            {DB[0].display_phone}
          </span>
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          <h5>
            {" "}
            {DB[0].name}
            {"--"}
            {DB[0].price}
          </h5>
          <span class="side">
            <Image src={DB[0].image_url} roundedCircle />

            {DB[0].display_phone}
          </span>
        </ListGroup.Item>
      </ListGroup>
    </main>
  );
}

export default RestaurantGroup;
