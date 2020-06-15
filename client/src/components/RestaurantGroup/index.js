import React from "react";

import { ListGroup } from "react-bootstrap";
import "./index.css";

function RestaurantGroup(props) {
  return (
    <main className="scroll scrollbar-near-moon">
      <hr />
      <h1>Top Matches</h1>
      <hr />
      <ListGroup>
        {(props.user.bookmarks === undefined || props.user.bookmarks.length === 0) ? (
          <p></p>
        ) : (
          <div>
            {props.user.bookmarks.map((business) => (
              <ListGroup.Item key={business.id} border="success" className="side">
                <p>
                  {business.name} | {business.rating} Stars
                </p>
                <div className="info">
                  <a
                    className="address"
                    href={`http://maps.google.com/maps?q=${business.location.display_address[0]} ${business.location.display_address[1]}`}
                  >
                    {business.location.display_address}
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
