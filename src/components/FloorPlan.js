import React from 'react';
import SectionTitle from './SectionTitle';
import img1 from '../assets/image11.png';
import img2 from '../assets/image12.png';
import { CheckCircleFilled } from '@ant-design/icons';
const FloorPlan = ({projectDetails ={}}) => {
    const {floors = []} = projectDetails

    const filteredFloors = floors.filter(item=> Boolean(item.enabled)) ||[]
    return (
        <div className='flor-plan'>
            <SectionTitle />
            <div className='flex flex-col gap-20 mt-11'>
                <div className='flex flex-row flor-wrapper justify-center'>
                    <div className='flex flex-col'>
                        <img src={img1} className='flex ' alt='i1' />
                    </div>
                    <div className='flex flex-col florplan-details justify-start items-start'>
                        <div className='flor-title'>1st Floor</div>
                        <div className='flor-subtitle'>Total area: 97 sqft</div>
                        <ul className='flex flex-col gap-5'>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Living room
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Open kitchen
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Double bedroom
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Fixed wardrobes
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Bathroom laundry room
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Storage room
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Living room
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Technical room
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row w-full justify-center items-center'>
                    <img src={img2} alt='i2' />
                </div>
            </div>
            <div className='flex flex-col gap-20 mt-11'>
                <div className='flex flex-row-reverse flor-wrapper justify-center'>
                    <div className='flex flex-col'>
                        <img src={img1} className='flex ' alt='i1' />
                    </div>
                    <div className='flex flex-col florplan-details justify-start items-start'>
                        <div className='flor-title'>1st Floor</div>
                        <div className='flor-subtitle'>Total area: 97 sqft</div>
                        <ul className='flex flex-col gap-5'>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Living room
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Open kitchen
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Double bedroom
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Fixed wardrobes
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Bathroom laundry room
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Storage room
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Living room
                            </li>
                            <li className='flex flex-row gap-3'>
                                <CheckCircleFilled
                                    style={{ color: '#4A3456' }}
                                />
                                Technical room
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row w-full justify-center items-center'>
                    <img src={img2} alt='i2' />
                </div>
            </div>
        </div>
    );
};

export default FloorPlan;
