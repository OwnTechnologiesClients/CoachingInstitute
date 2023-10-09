import React from 'react'

const Details = ({imgSrc}) => {
    return (
        <div className="card card-md-3 mx-auto border-0" style={{ width: "18rem" }}>
            <img src={imgSrc} className="card-img-top" alt="..." />
            <div className="card-body ps-1">
                <h5 className="card-title">EXPERIENCE YOURSELF</h5>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam voluptate, magni maiores non eligendi!</p>
            </div>
        </div>
    )
}

const Courses = ({imgSrc}) => {
    return (
        <div className="card g-0 m-2 card-md-3 mx-auto border-0 position-relative" style={{ width: "18rem" }}>
            <div className="position-absolute end-0 px-3 text-white bg-dark opacity-75 border-start border-5 blue-border ">$299</div>
            <img src={imgSrc} className="card-img-top" alt="..." />
            <div className="card-body ps-3 pt-4">
                <h5 className="card-title">EXPERIENCE YOURSELF</h5>
                <p className="card-text">We care for children, protect their welfare, and prepare them for the future. We care for children, protect heir welfare, and prepare</p>
            </div>
            <button className='btn bg-dark text-white w-50 m-2 ms-3 my-md-4'>View Details</button>
        </div>
    )
}
const PopularVideosCard = ({imgSrc}) => {
    return (
        <div className="card m-4 g-0 mx-auto border-0" style={{ width: "18rem" }}>
            <img src={imgSrc} className="card-img-top" alt="..." />
            <div className="card-body ps-3 pt-4">
                <h5 className="card-title">EXPERIENCE YOURSELF</h5>
                <p className="card-text">We care for children, protect their welfare, and prepare them for the future. We care for children, protect heir welfare, and prepare</p>
            </div>
            <button className='btn bg-dark text-white w-50 m-2 my-4 rounded-1'>WATCH NOW</button>
        </div>
    )
}



export {Details, Courses, PopularVideosCard};