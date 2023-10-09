import React from 'react'
const Navbar = () => {
    return (
        <nav id='navbar' className="navbar navbar-expand-lg border-bottom border-4 blue-border " data-bs-theme="dark">

            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active px-4 py-1 m-1  bg-white rounded-5 text-dark" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link px-4 py-1 m-1 dropdown-toggle rounded-5 text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Courses
                            </a>
                            <ul className="dropdown-menu bg-white">
                                <li><a className="dropdown-item text-dark" href="#">Online course {">"}</a></li>
                                <li><a className="dropdown-item text-dark" href="#">Online course {">"}</a></li>
                            </ul>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-4 m-1 py-1 rounded-5 text-white" href="#">Videos</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-4 m-1 py-1 rounded-5 text-white" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-4 m-1 py-1 rounded-5 text-white" href="#">About Us</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-4 m-1 py-1 rounded-5 text-white" href="#">Test Series</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-4 m-1 py-1 rounded-5 text-white" href="#">Study Material</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-4 m-1 py-1 rounded-5 text-white" href="#">Student Login</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link px-4 m-1 py-1 rounded-5 text-white" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="text-white new-batch blue-bg p-2">
                    <a className="nav-link" href="#">NEW BATCH</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar