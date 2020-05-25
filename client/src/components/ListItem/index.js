import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListItem(props) {
    return (
        <Row>
            <Col xs={1}>
                <FontAwesomeIcon icon={props.icon} />
            </Col>
            <Col>
                {props.label}
            </Col>
        </Row>
    );
}

export default ListItem;
