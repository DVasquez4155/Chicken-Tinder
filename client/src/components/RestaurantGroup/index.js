import React from "react";

import { ListGroup, Button } from "react-bootstrap";
import "./index.css";

function RestaurantGroup(props) {
  return (
    <main className="scroll scrollbar-near-moon">
      <br />
      <div className="text-center">
        <Button href={`/group/${props.group.uuid}`}>Share</Button>
      </div>

      <p>{`${props.user.name}`}</p>
      <hr />
      <h1 className="list-title">Your Matches</h1>
      <ListGroup>
        {props.group.matches === undefined ||
        props.group.matches.length === 0 ? (
          <p></p>
        ) : (
          <div>
            {props.group.matches.map((business) => (
              <ListGroup.Item
                key={business.id}
                border="success"
                className="side"
              >
                <p>
                  {business.name} | {business.rating} Stars
                </p>
                <div className="info">
                  <a
                    className="address"
                    href={`http://maps.google.com/maps?q=${business.location}`}
                  >
                    {business.location}
                  </a>
                  <br />
                  <a href={`tel:${business.display_phone}`}>
                    {business.display_phone}
                  </a>
                </div>
              </ListGroup.Item>
            ))}
          </div>
        )}
      </ListGroup>

      <h4 className="list-title">Your favorites</h4>
      <ListGroup>
        {props.user.bookmarks === undefined ||
        props.user.bookmarks.length === 0 ? (
          <p></p>
        ) : (
          <div>
            {props.user.bookmarks.map((business) => (
              <ListGroup.Item
                key={business.id}
                border="success"
                className="side"
              >
                <p>
                  {business.name} | {business.rating} Stars
                </p>
                <div className="info">
                  <a
                    className="address"
                    href={`http://maps.google.com/maps?q=${business.location}`}
                  >
                    {business.location}
                  </a>
                  <br />
                  <a href={`tel:${business.display_phone}`}>
                    {business.display_phone}
                  </a>
                </div>
              </ListGroup.Item>
            ))}
          </div>
        )}
      </ListGroup>
    </main>
  );
}

export default RestaurantGroup;
