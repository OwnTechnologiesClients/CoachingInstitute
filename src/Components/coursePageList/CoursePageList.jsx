import React from 'react';
import { Link } from 'react-router-dom';
import './CoursePageList.scss';

const CoursePageList = ({ hd1, hd2, link1, link2, link3, activeLink, onLinkClick, url1 }) => {
    return (
        <div className="course-list">
            <h2>
                {hd1} <span className='under-bar'>{hd2}</span>
            </h2>
            <div className="course-links">
                <Link to={url1} onClick={() => onLinkClick(link1)}>
                    <div className={`course-link ${activeLink === link1 ? 'active' : ''}`}>
                        {link1}
                    </div>
                </Link>
                <Link to="#" onClick={() => onLinkClick(link2)}>
                    <div className={`course-link ${activeLink === link2 ? 'active' : ''}`}>
                        {link2}
                    </div>
                </Link>
                <Link to="#" onClick={() => onLinkClick(link3)}>
                    <div className={`course-link ${activeLink === link3 ? 'active' : ''}`}>
                        {link3}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CoursePageList;
