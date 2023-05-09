import React from 'react';
import qzone1 from '../../../assets/qzone1.png'
import qzone2 from '../../../assets/qzone2.png'
import qzone3 from '../../../assets/qzone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary rounded py-4  my-5   text-center'>
            <h2 className='pb-4'> Q-Zone</h2>
            <div >
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;