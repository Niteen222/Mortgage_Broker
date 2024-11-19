import { useState, useEffect } from 'react';
import "../Footer/Footer.css"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Footer = () => {
    return (
        <>

            <div className="bg-u p-5">
                <h1 className="text-center update text-white p-3">Stay Update !!</h1>
                <div className="container p-4">
                    <div className="all">
                        <input type="text" placeholder="Your Email" className="form-control flex-fill fs-5" />
                        <button className="text-white button-white ms-md-2 mt-2 mt-md-0 fs-5">Send</button>
                    </div>

                </div>
                <hr className="text-white" />
            </div>

            <motion.div
                className="ft text-white p-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <footer className="">
                    <div className="d-flex justify-content-center text-center text-md-start ft-hello">
                        <div className="col-12 col-sm-6 col-md-2 mb-3">
                            <h4 className="h5-text fw-bold">Mortgage Broker</h4>
                            <br />
                            <p className="nav-link p-0 text-white mb-2 gap-3 fs-5">
                                <span><i className="fa-solid fa-arrow-right-long fs-5 fw-bold"></i></span>
                                <Link to="/home" className="active all-item fs-5 text-decoration-none text-reset  text-white">
                                    Home
                                </Link>
                            </p>
                            <p className="nav-link p-0 text-white mb-2 gap-3 fs-5">
                                <span><i className="fa-solid fa-arrow-right-long fs-5 fw-bold"></i></span>
                                <Link to="/about" className="active all-item fs-5 text-decoration-none text-reset text-white">
                                    About
                                </Link>
                            </p>
                            <p className="nav-link p-0 text-white mb-2 gap-3 fs-5">
                                <span><i className="fa-solid fa-arrow-right-long fs-5 fw-bold"></i></span>
                                <Link to="/service" className="active all-item fs-5 text-decoration-none text-reset text-white">
                                    Services
                                </Link>
                            </p>
                            <p className="nav-link p-0 text-white mb-2 gap-3 fs-5">
                                <span><i className="fa-solid fa-arrow-right-long fs-5 fw-bold"></i></span>
                                <Link to="/testimonial" className="active all-item fs-5 text-decoration-none text-reset text-white">
                                    Testimonial
                                </Link>
                            </p>
                            <p className="nav-link p-0 text-white mb-2 gap-3 fs-5">
                                <span><i className="fa-solid fa-arrow-right-long fs-5 fw-bold"></i></span>
                                <Link to="/contact" className="active all-item fs-5 text-decoration-none text-reset text-white">
                                    Contact
                                </Link>
                            </p>
                        </div>

                        <div className="col-12 col-sm-6 col-md-2 mb-3">
                            <h4 className="h5-text fw-bold">Follow Us</h4>
                            <br />
                            <p className="nav-link p-0 text-white mb-2 gap-3 fs-5"> <span><i className="fa-brands fa-linkedin"></i></span> Linkedin</p>
                            <p className="nav-link p-0 text-white mb-2 gap-3 fs-5"> <span><i className="fa-brands fa-facebook"></i></span> Facebbok</p>
                            <p className="nav-link p-0 text-white mb-2 gap-3 fs-5"><span><i className="fa-brands fa-instagram"></i></span> Instagram </p>
                            <p className="nav-link p-0 text-white mb-2 gap-3 fs-5"><span><i className="fa-brands fa-x-twitter"></i></span> Twitter</p>
                            <p className="nav-link p-0 text-white mb-2 gap-3 fs-5"><span><i className="fa-brands fa-github"></i></span> Github</p>
                        </div>

                        <div className="col-12 col-sm-6 col-md-2 mb-3">
                            <h4 className="h5-text fw-bold">Get In Touch</h4>
                            <br />
                            <p className="nav-link p-0 text-white mb-2 fs-5 ">123 Street, Delhi, INDIA</p>
                            <p className="nav-link p-0 text-white mb-2 fs-5">infomortgagebroker.com</p>
                            <p className="nav-link p-0 text-white mb-2 fs-5">+012 345 67890 </p>
                        </div>
                    </div>
                    <hr className="text-white" />
                    <br />
                    <div className="backe pt-0">
                        <p>© <span className="border-bottom fw-bold fs-5">Mortgage Broker</span>, All Rights Reserved </p>
                        <p className="float-end mb-1 bag">
                            <a href="#" className="d-flex gap-2 text-white backs text-center fs-5 fw-bold"> Back to Top <span><i className="fa-solid fa-arrow-up-long text-white"></i></span></a>
                        </p>
                    </div>
                </footer>
            </motion.div>
        </>
    );
};



export default Footer   