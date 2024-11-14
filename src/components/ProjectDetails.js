import React from 'react';

const ProjectDetails = ({ projectDetails = {}, gallery }) => {
    const filterList = Object.keys(projectDetails).filter(
        (item) => projectDetails[item] !== 'floors' && projectDetails[item] > 0
    );
    console.log(filterList);

    return (
        <div className='project-details flex flex-row justify-between '>
            <div className='project-image-sec'>
                <div className='sec-title'>Project Images</div>
                <div className='project-img'></div>
                <div className='gallery-image'>
                    {gallery.map((gallery, i) => {
                        if (i <= 3) {
                            return (
                                <div
                                    className='img-1 flex justify-center items-center text-center text-white'
                                    style={{
                                        backgroundImage: `url(${gallery})`,
                                    }}
                                >
                                   {i== 3 && <p>View <br/>More ({gallery.length - 3})</p>}
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <div className='details-table-wrapper flex flex-col justify-start items-start w-full'>
                <div className='sec-title'>Project Details</div>
                <div className='details-table flex flex-col'>
                    {filterList.map((item) => {
                        return (
                            <div className='detail-list flex flex-row w-full justify-between'>
                                <div className='left-col flex flex-row justify-start items-center'>
                                    <div className='icon'></div>
                                    {item}
                                </div>
                                <div className='right-col capitalize'>
                                    {projectDetails[item]}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
