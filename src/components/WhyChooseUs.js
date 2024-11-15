import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='why-us flex flex-row justify-between items-center'>
            <div className='choose-card flex flex-col justify-center items-center gap-4'>
                <div className=' icon icon-1'></div>
                <div className='choose-title'>Earthquake Resistance</div>
            </div>
            <div className='choose-card flex flex-col justify-center items-center gap-4'>
                <div className=' icon icon-2'></div>
                <div className='choose-title'>Heat & Cold Resistance</div>
            </div>
            <div className='choose-card flex flex-col justify-center items-center gap-4'>
                <div className=' icon icon-3'></div>
                <div className='choose-title'>Fire Resistance</div>
            </div>
            <div className='choose-card flex flex-col justify-center items-center gap-4'>
                <div className=' icon icon-4'></div>
                <div className='choose-title'>Sound Resistance</div>
            </div>
            <div className='choose-card flex flex-col justify-center items-center gap-4'>
                <div className=' icon icon-5'></div>
                <div className='choose-title'>3 Years Warranty</div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
