import React from 'react';
import { Link } from 'react-router-dom';
import './CoursePageList.scss';

const CoursePageList = ({ hd1, hd2, links, activeLink, onLinkClick, url1 }) => {

    return (
        <div className="course-list">
            <h2>
                {hd1} <span className='under-bar'>{hd2}</span>
            </h2>
            <div className="course-links">

                {links.map((item, index) => {
                    return <Link key={index} to={url1} onClick={() => onLinkClick(item)}>
                        <div className={`course-link ${activeLink === item ? 'active' : ''}`}>
                            {item}
                        </div>
                    </Link>
                })}

            </div>
        </div>
    );
};

export default CoursePageList;
