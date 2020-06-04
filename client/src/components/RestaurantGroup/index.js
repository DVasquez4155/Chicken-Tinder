import React from "react";
import API from "../../utils/API";
import { Container, Col, Row, ListGroup, Image } from "react-bootstrap";
import "./index.css";
var DB = API.getBusinesses();
console.log(DB);

function RestaurantGroup(props) {
  return (
    <main className="scroll">
      <ListGroup variant="flush" variant="danger">
        {DB.map((business) => (
          <ListGroup.Item border="success" className="side">
            <h5>
              {" "}
              {business.name}
              {"  "}
              {business.price}
            </h5>

            <span>
              <Image src={business.image_url} roundedCircle />

              <a href={`tel:${business.display_phone}`}>
                {business.display_phone}
              </a>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </main>
  );
}

export default RestaurantGroup;
