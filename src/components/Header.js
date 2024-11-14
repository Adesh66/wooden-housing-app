import { Button } from 'antd';
import React from 'react';

const Header = () => {
    return (
        <>
            <div className='welcome-header flex flex-row justify-center items-center'>
                Welcome to Woodenhousing!
            </div>
            <div className='header bg-white min-h flex flex-row justify-between items-center'>
                <div className='container mx-auto '>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='logo'></div>
                        <ul className='navigation flex flex-row justify-center items-center gap-9'>
                            <li>
                                <a href='' className=''>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='' className=''>
                                    Designs
                                </a>
                            </li>
                            <li>
                                <a href='' className=''>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href='' className=''>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href='' className=''>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href='' className=''>
                                    Career
                                </a>
                            </li>
                        </ul>
                        <div className='action-wrapper'>
                            <Button
                                type='primary'
                                className='btn-contact bg-theme'
                                size='large'
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sub-header bg-white min-h flex flex-row justify-between items-center'>
                <div className='container mx-auto '>
                    <div className='flex flex-row justify-start items-center'>
                        <ul className='extra-link flex flex-row justify-center items-center gap-9'>
                            <li>
                                <a href=''>Why wooden house?</a>
                            </li>
                            <li>
                                <a href=''>Benefits of wooden house</a>
                            </li>
                            <li>
                                <a href=''>3D design tour</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
