import React from 'react'
import Logo from "../image/consulting-logo.png";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css"

function Navbar() {

    return (
        
        <>
            {/* <!-- Navbar --> */}
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="navbar navbar-expand-lg"
            >
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="">
                        <img src={Logo} alt="" className="logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <motion.div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <motion.li className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/home" className="active all-item fs-5 text-decoration-none text-reset  text-white">
                                    Home
                                </Link>
                            </motion.li>
                            <motion.li className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/about" className="active all-item fs-5 text-decoration-none text-reset text-white">
                                    About
                                </Link>
                            </motion.li>
                            <motion.li className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/service" className="active all-item fs-5 text-decoration-none text-reset text-white">
                                    Services
                                </Link>
                            </motion.li>
                            <motion.li className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/testimonial" className="active all-item fs-5 text-decoration-none text-reset text-white">
                                    Testimonial
                                </Link>
                            </motion.li>
                            <motion.li className="nav-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact" className="active all-item fs-5 text-decoration-none text-reset text-white">
                                    Contact
                                </Link>
                            </motion.li>
                        </ul>
                        <div className="mx-2">
                            <motion.button
                                className="button-danger fs-5"
                                data-bs-toggle="modal"
                                data-bs-target="#loginModal"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Login
                            </motion.button>
                            <motion.button
                                className="button-success fs-5"
                                data-bs-toggle="modal"
                                data-bs-target="#signupModal"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Signup
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.nav>

            {/* Login Modal */}
            <div
                className="modal fade"
                id="loginModal"
                tabIndex="-1"
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-4 fw-bold" id="exampleModalLabel">
                                <img
                                    src={Logo}
                                    height="60"
                                    alt=""
                                    className="p-2"
                                />
                                Login to Mortgage Solutions
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="container my-2 d-flex flex-column justify-content-center align-items-center">
                                <div className="col-12">
                                    <label htmlFor="exampleInputEmail1" className="form-label fs-5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control fs-5"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Your Email"
                                    />
                                    <small className="form-text text-muted fs-6">
                                        We will never share your email with anyone else.
                                    </small>
                                </div>
                                <div className="col-12">
                                    <br />
                                    <label htmlFor="inputPassword" className="form-label fs-5">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control fs-5"
                                        id="inputPassword"
                                        placeholder="Enter Your Password"
                                    />
                                    <small className="form-text text-muted fs-6">
                                        We will never share your password with anyone else.
                                    </small>
                                </div>
                                <br />
                                <div className="col-12">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                        />
                                        <label className="form-check-label fs-5" htmlFor="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                    <br />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="button-success fs-5">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="button-danger fs-5"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Signup Modal */}
            <div
                className="modal fade"
                id="signupModal"
                tabIndex="-1"
                aria-labelledby="signupModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-4 fw-bold" id="exampleModalLabel">
                                <img
                                    src={Logo}
                                    height="60"
                                    alt=""
                                    className="p-2"
                                />
                                Create a Mortgage Solutions Account
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="container my-2 d-flex flex-column justify-content-center align-items-center">
                                <div className="col-12">
                                    <label htmlFor="exampleName" className="form-label fs-5">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control fs-5"
                                        id="exampleName"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <div className="col-12">
                                    <br />
                                    <label htmlFor="examplePhone" className="form-label fs-5">
                                        Phone Number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control fs-5"
                                        id="examplePhone"
                                        placeholder="Enter Your Mobile Number"
                                    />
                                </div>
                                <div className="col-12">
                                    <br />
                                    <label htmlFor="exampleEmail" className="form-label fs-5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control fs-5"
                                        id="exampleEmail"
                                        placeholder="Enter Your Email"
                                    />
                                </div>
                                <div className="col-12">
                                    <br />
                                    <label htmlFor="examplePassword" className="form-label fs-5">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control fs-5"
                                        id="examplePassword"
                                        placeholder="Enter Your Password"
                                    />
                                </div>
                                <div className="col-12">
                                    <br />
                                    <label
                                        htmlFor="exampleConfirmPassword"
                                        className="form-label fs-5"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control fs-5"
                                        id="exampleConfirmPassword"
                                        placeholder="Confirm Your Password"
                                    />
                                </div>
                                <br />
                                <div className="col-12">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input fs-5"
                                            type="checkbox"
                                            id="signupCheck"
                                        />
                                        <label
                                            className="form-check-label fs-5"
                                            htmlFor="signupCheck"
                                        >
                                            Check me out
                                        </label>
                                    </div>
                                    <br />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="button-success fs-5">
                                        Create Account
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="button-danger fs-5"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;