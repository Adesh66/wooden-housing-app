import React from 'react';
const list = [
    "bhk",
    "warrantyYears",
    "floors",

]
const ProjectDetails = ({ projectDetails , gallery }) => {
console.log(projectDetails);

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
                                    {i == 3 && (
                                        <p>
                                            View <br />
                                            More ({gallery.length - 3})
                                        </p>
                                    )}
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <div className='details-table-wrapper flex flex-col justify-start items-start w-full'>
                <div className='sec-title'>Project Details</div>
                <div className='details-table flex flex-col'>
                    {Object.keys(projectDetails).map((item) => {
                        if(!list.includes(item)) {
                            return (
                                <div className='detail-list flex flex-row w-full justify-between'>
                                    <div className='left-col flex flex-row justify-start items-center'>
                                        <div className='icon'></div>
                                        {item}
                                    </div>
                                    <div className='right-col capitalize'>
                                        {projectDetails[item] || '--'}
                                    </div>
                                </div>
                            );
                        }
                        
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
