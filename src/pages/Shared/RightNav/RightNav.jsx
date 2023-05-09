import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h4> Login With</h4>
            <Button className='mb-2 w-100' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button className=' w-100' variant="outline-secondary"> <FaGithub /> Login With Github</Button>

            <div>
            
                <h4 className='mt-4 mb-2'>Find Us On</h4>
                <ListGroup >
                    <a  className='text-decoration-none' href="https://www.facebook.com/" target="_blank">
                        <ListGroup.Item> <FaFacebookF className='text-primary'></FaFacebookF> Facebook</ListGroup.Item>
                    </a>
                    <a  className='text-decoration-none' href="https://www.Twitter.com/" target="_blank"> <ListGroup.Item> <FaTwitter className='text-primary'></FaTwitter> Twitter</ListGroup.Item></a>

                    <a  className='text-decoration-none' href="https://www.instagram.com/" target="_blank"> <ListGroup.Item> <FaInstagram className='text-danger'></FaInstagram> instagram</ListGroup.Item></a>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;