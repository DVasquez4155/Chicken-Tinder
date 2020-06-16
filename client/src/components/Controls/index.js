import React, { useState } from "react";

import { Container, Row, Button } from "react-bootstrap";

import API from "../../utils/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faQuestion,
  faCheck,
  faTimes,
  faUndo,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

require("./index.css");

const Controls = (props) => {
  const [icon, setIcon] = useState(farBookmark);
  function changeIcon(business) {
    if (icon === farBookmark) {
      setIcon(faBookmark);
      API.bookmark(props.user.id, business.id);
    } else {
      setIcon(farBookmark);
      API.removeBookmark(props.user.id, business.id);
    }
  }
  // console.log(props.business)
  // const bookmarked = ((props.user.bookmarks.find(({ id }) => id === props.business.id)) === undefined)
  // console.log(bookmarked)
  // if (bookmarked) {
  //   setIcon(farBookmark);
  // }
  return (
    <Container className="controls" fluid>
      <Row className="interactive-icon">
        <Button
          onClick={() => {
            props.decreaseCount();
            //Needs Fix
            API.undoBusiness(props.user.id, props.business.id);
          }}
          variant="outline-warning"
        >
          <FontAwesomeIcon icon={faUndo} />
        </Button>
        <Button
          onClick={() => {
            props.incrementCount();
            API.noBusiness(props.user.id, props.business.id);
          }}
          className="times large"
          variant="outline-danger"
        >
          <FontAwesomeIcon size="2x" icon={faTimes} />
        </Button>
        <p></p>
        {/* <Button
          onClick={() => {
            props.incrementCount();
            API.maybeBusiness();
          }}
          variant="outline-secondary"
        >
          <FontAwesomeIcon icon={faQuestion} />
        </Button> */}
        <Button
          onClick={() => {
            props.incrementCount();
            API.yesBusiness(props.user.id, props.business.id);
          }}
          className="check large"
          variant="outline-success"
        >
          <FontAwesomeIcon size="2x" icon={faCheck} />
        </Button>
        <Button
          onClick={() => {
            changeIcon(props.business);
          }}
          variant="outline-primary"
        >
          <FontAwesomeIcon id="bookmark" icon={icon} />
        </Button>
      </Row>
    </Container>
  );
};

export default Controls;
