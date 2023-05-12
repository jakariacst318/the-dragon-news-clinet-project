import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png'
import secend from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { useLoaderData } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';
import moment from 'moment/moment';

const EditorsInsight = () => {
    const news = useLoaderData()
    const { title, author,published_date } = news
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-5">
            <Col >
                <Card>
                    <Card.Img variant="top" src={first} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='d-flex'>
                            <FaRegCalendarAlt className='mt-1' ></FaRegCalendarAlt>
                            <p className='ms-2'><small>{moment(author?.published_date).format("yyyy, MMMM D")}</small></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col >
                <Card>
                    <Card.Img variant="top" src={secend} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='d-flex'>
                            <FaRegCalendarAlt className='mt-1' ></FaRegCalendarAlt>
                            <p className='ms-2'><small>{moment(author?.published_date).format("yyyy, MMMM D")}</small></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col >
                <Card>
                    <Card.Img variant="top" src={third} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='d-flex'>
                            <FaRegCalendarAlt className='mt-1' ></FaRegCalendarAlt>
                            <p className='ms-2'><small>{moment(author?.published_date).format("yyyy, MMMM D")}</small></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default EditorsInsight;