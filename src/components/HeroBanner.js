import React from 'react';
import Breadcrumb from './Breadcrumb';

const HeroBanner = ({ img, title, description }) => {
    return (
        <div
            className='hero-banner flex justify-center'
            style={{ backgroundImage: `url(${img})` }}
        >
            {/*  */}
            <div className='relative container mx-auto flex justify-start items-center'>
                <div className='absolute top-0 left-0'>
                    <Breadcrumb />
                </div>
                <div className='content-wrapper flex flex-col justify-start items-start'>
                    <div className='hero-title'>{title}</div>
                    <div className='hero-subtitle'>{description}</div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
