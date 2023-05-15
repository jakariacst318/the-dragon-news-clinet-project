import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AcceptTerm = () => {
    return (
        <Container>
            <h2> Accept Terms and conditions </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, minima?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default AcceptTerm;