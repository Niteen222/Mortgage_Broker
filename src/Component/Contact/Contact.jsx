import React from "react";
import "../Contact/Contact.css";

const Contact = () => {
    return (
        <>
            <br />
            <br />
            <h1 className="mb-3 text-center fw-bold">Contact Us</h1>
            <div className="mx-5">
            <p className="lead text-center ">At <b className="fw-bold text-danger">Mortgage Broker</b>, we prioritize your needs. Whether you’re a first-time homebuyer or refinancing your mortgage, we’re here to provide expert advice and guidance. Get in touch with our team today to discuss how we can help you secure the best mortgage rates and terms</p>
            </div>
            <br />
            <div className="row twopart">
                <div className="col-md-6 one p-2">
                    <div className="row g-3">
                        <div className="col-sm-12">
                            <input
                                type="text"
                                className="form-control p-3"
                                placeholder="Enter Your Full Name"
                                id="firstName"
                                required
                            />
                            <div className="invalid-feedback">Valid first name is required.</div>
                        </div>
                        <div className="col-sm-12">
                            <input
                                type="text"
                                className="form-control p-3"
                                placeholder="Enter Your Email"
                                id="email"
                                required
                            />
                            <div className="invalid-feedback">Valid Email is required.</div>
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control address-box p-3"
                                id="address"
                                placeholder="Enter Your Full Address"
                                required
                            />
                            <div className="invalid-feedback">
                                Please Enter Your Full Address.
                            </div>
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="country" className="form-label">
                                Country
                            </label>
                            <select className="form-select p-3" id="country" required>
                                <option value="">Country</option>
                                <option>India</option>

                            </select>
                            <div className="invalid-feedback">Please select a valid country.</div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="state" className="form-label">
                                State
                            </label>
                            <select className="form-select p-3" id="state" required>
                                <option value="">Choose State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>

                            </select>
                            <div className="invalid-feedback">Please provide a valid state.</div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="zip" className="form-label">
                                Zip
                            </label>
                            <input
                                type="text"
                                className="form-control p-3"
                                id="zip"
                                required
                            />
                            <div className="invalid-feedback">Zip code required.</div>
                        </div>
                    </div>
                    <br />
                    <button className="w-100 tb text-white btn-lg fw-bold" type="submit">
                        Send
                    </button>
                </div>


                <div className="col-md-6 twos p-2">
                    <iframe
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6750.97956584436!2d76.31639716362112!3d32.21797628762592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b50df65bd7311%3A0x3e08bdb100c6dc10!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1725210003071!5m2!1sen!2sin"
                        style={{ border: 0, width: "100%", height: "100%" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dharamshala Map"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Contact;