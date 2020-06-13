import React, { useState, useEffect } from "react";
import API from "../utils/API"
import { ListGroup, Button } from "react-bootstrap";

function Login(props) {
    const [group, setGroup] = useState({})
    useEffect(() => {
        loadGroup();
    }, []);
    function loadGroup() {
        API.getSession(props.match.params.group)
        .then(res => 
            setGroup(res.data)
        )
        .catch(err => console.log(err));
    };
    console.log(group)
    console.log(group.users)
    function login(user) {
        window.location.href = "/app/user/" + user.id
    }
    return (
        <main className='loginAs'>
            <ListGroup>
                <ListGroup.Item className='title'>Login As:</ListGroup.Item>
                {JSON.stringify(group) !== "{}" ? (
                    group.users.map(user => (
                    <ListGroup.Item className='items' key={user.id} variant='secondary' action onClick={() => login(user)}>
                        {user.name}
                    </ListGroup.Item>
                    ))
                ) : (
                    <p></p>
                )}
            </ListGroup>
            <br />
            <Button variant='success'>Register</Button>
        </main>
    );
}

export default Login;