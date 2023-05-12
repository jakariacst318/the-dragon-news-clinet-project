import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-3 flex-grow-1'>
                    <p className='mb-0'>{author.name}</p>
                    <p><small>{moment(author?.published_date).format("yyyy, MMMM D")}</small></p>
                </div>
                <div >
                    <FaRegBookmark ></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <Card.Img variant="top" src={image_url} />
                    {details.langth < 250 ? <> {details} </> :
                        <> {details.slice(0, 250)} .... <Link className='text-decoration-none text-danger fw-bold' to={`/news/${_id}`}>  Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating = {rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                       <span className='fw-semibold text-secondary'> {rating.number}</span> 
                </div>
                <div>

                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;