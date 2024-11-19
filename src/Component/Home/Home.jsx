import React from 'react'
import "../Home/Home.css"
import img1 from "../image/home1.gif"
import img2 from "../image/img2.gif"
import img3 from "../image/home3.gif"
import { motion, useInView } from 'framer-motion';
import animate1 from "../image/animate1.gif"
import animate2 from "../image/animate2.gif"
import animate3 from "../image/animate3.gif"
import animate4 from "../image/animate4.gif"
import animate5 from "../image/animate5.gif"
import animate6 from "../image/animate6.gif"

function Home() {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel"
                data-bs-interval="3000">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100" id="image" alt="..." />
                        <div class="overlay"></div>
                        <div class="carousel-caption d-block">
                            <h1 class="fw-bold heading">Your Trusted Partner for Luxury Mortgage Solutions</h1>
                            <p>Expert Business Strategies</p>
                            <button type="button" class="button-home">Start Your Application</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100" id="image" alt="..." />
                        <div class="overlay"></div>
                        <div class="carousel-caption d-block">
                            <h1 class="fw-bold heading">Excellence and Expertise in Luxury Mortgages</h1>
                            <p>Transform Your Business with Expert Insights</p>
                            <button class="button-home">Start Your Application</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100" id="image" alt="..." />
                        <div class="overlay"></div>
                        <div class="carousel-caption d-block">
                            <h1 class="fw-bold heading">Tailored Mortgage Solutions for Your Dream Home</h1>
                            <p>Unlock Your Business Potential</p>
                            <button class="button-home">Start Your Application</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* second section */}
            <div className="p-3">
                <div className="row mb-2 my-4">
                    <div className="col-md-4">
                        <motion.div
                            className="g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                className="col-auto order-1 order-md-2 d-flex align-items-center"
                                initial={{ x: -200 }}
                                whileInView={{ x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <img src={animate1} className="bd-placeholder-img" height={"390"} width={"100%"} alt="" />
                            </motion.div>

                            <motion.div
                                className="col p-4 d-flex flex-column position-static order-2 order-md-1"
                                initial={{ y: 100 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <br />
                                <strong className="d-inline-block mb-2 text-primary fs-5">Mortgage Business Solutions</strong>
                                <h3 className="mb-0 fw-bold">Unlock Your Potential</h3>
                                <div className="mb-1 text-body-secondary fs-5">2024</div>
                                <br />
                                <p className="card-text mb-auto fs-5">
                                    <b className='text-primary'>Unlock your potential</b> to achieve greatness by stepping out of your comfort zone and pushing beyond your limits. Embrace challenges as opportunities for growth, learning from each experience and becoming more resilient with every obstacle you face. The key to success lies in your belief in yourself and the courage to take bold steps toward your goals. Stay determined, trust the process, and with persistence, your dreams will gradually transform into reality, leaving a lasting impact on both your life and the lives of others.
                                </p>
                                <br />
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="col-md-4">
                        <motion.div
                            className="g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                className="col-auto d-flex align-items-center order-1 order-md-2"
                                initial={{ x: -200 }}
                                whileInView={{ x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <img src={animate2} className="bd-placeholder-img" height={"390"} width={"100%"} alt="" />
                            </motion.div>

                            <motion.div
                                className="col p-4 d-flex flex-column position-static order-2 order-md-1"
                                initial={{ y: 100 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <br />
                                <strong className="d-inline-block mb-2 text-danger fs-5">Mortgage Business Solutions</strong>
                                <h3 className="mb-0 fw-bold">Expert Business Solutions</h3>
                                <div className="mb-1 text-body-secondary fs-5">2024</div>
                                <br />
                                <p className="card-text mb-auto fs-5">
                                    <b className='text-primary'>Expert business solutions</b> designed to streamline your processes, boost efficiency, and enhance growth. Our tailored services offer innovative strategies that cater to the unique needs of your business, ensuring you stay ahead in a competitive market. With a focus on optimizing operations and driving results, we provide the expertise you need to achieve long-term success. Partner with us to unlock your business's full potential and transform challenges into opportunities for growth and prosperity.
                                </p>
                                <br />
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="col-md-4">
                        <motion.div
                            className="g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                className="col-auto d-flex align-items-center order-1 order-md-2"
                                initial={{ x: -200 }}
                                whileInView={{ x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <img src={animate3} className="bd-placeholder-img" height={"390"} width={"100%"} alt="" />
                            </motion.div>

                            <motion.div
                                className="col p-4 d-flex flex-column position-static order-2 order-md-1"
                                initial={{ y: 100 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <br />
                                <strong className="d-inline-block mb-2 text-success fs-5">Mortgage Business Solutions</strong>
                                <h3 className="mb-0 fw-bold">Grow with Our Guidance</h3>
                                <div className="mb-1 text-body-secondary fs-5">2024</div>
                                <br />
                                <p className="card-text mb-auto fs-5">
                                    <b className='text-primary'>Grow with Our Guidance</b> represents more than just a motto; it reflects our commitment to your continuous growth and development. We understand that every journey is unique, and that's why we offer personalized advice and support to help you achieve your goals. Through our expert insights and tailored strategies, we enable you to face challenges head-on and discover opportunities you might have overlooked. With a clear vision and the right tools, our guidance helps you unlock your full potential.
                                </p>
                                <br />
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <motion.div
                            className="g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                className="col-auto d-flex align-items-center order-1 order-md-2"
                                initial={{ x: -200 }}
                                whileInView={{ x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <img src={animate4} className="bd-placeholder-img" height={"390"} width={"100%"} alt="" />
                            </motion.div>

                            <motion.div
                                className="col p-4 d-flex flex-column position-static order-2 order-md-1"
                                initial={{ y: 100 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <br />
                                <strong className="d-inline-block mb-2 text-primary fs-5">Mortgage Business Solutions</strong>
                                <h3 className="mb-0 fw-bold">Transform Your Business</h3>
                                <div className="mb-1 text-body-secondary fs-5">2024</div>
                                <br />
                                <p className="card-text mb-auto fs-5">
                                    <b className='text-primary'>Transform Your Business</b> is an invitation to embrace change and innovation for achieving greater success. In today's fast-paced world, adapting and evolving is crucial to staying ahead of the competition. With our expert strategies and cutting-edge solutions, we help you reimagine your business approach, optimize your operations, and unlock new growth opportunities. Whether it's through streamlined processes, advanced technology
                                </p>
                                <br />
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="col-md-4 mt-4">
                        <motion.div
                            className="g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                className="col-auto d-flex align-items-center order-1 order-md-2"
                                initial={{ x: -200 }}
                                whileInView={{ x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <img src={animate5} className="bd-placeholder-img" height={"390"} width={"100%"} alt="" />
                            </motion.div>

                            <motion.div
                                className="col p-4 d-flex flex-column position-static order-2 order-md-1"
                                initial={{ y: 100 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <br />
                                <strong className="d-inline-block mb-2 text-danger fs-5">Mortgage Business Solutions</strong>
                                <h3 className="mb-0 fw-bold">Empower Your Business</h3>
                                <div className="mb-1 text-body-secondary fs-5">2024</div>
                                <br />
                                <p className="card-text mb-auto fs-5">
                                    <b className='text-primary'>Empower Your Business</b> to reach its full potential by embracing smart strategies and innovative solutions. We provide the tools, insights, and support needed to navigate complex business challenges, unlocking new opportunities for growth and success. Our mission is to equip you with the necessary resources to drive sustainable growth, adapt to evolving markets, and lead with confidence. Together, we can create a future where your business thrives.
                                </p>
                                <br />
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <motion.div
                            className="g-0 border rounded overflow-hidden flex-column flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                className="col-auto d-flex align-items-center order-1 order-md-2"
                                initial={{ x: -200 }}
                                whileInView={{ x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <img src={animate6} className="bd-placeholder-img" height={"390"} width={"100%"} alt="" />
                            </motion.div>

                            <motion.div
                                className="col p-4 d-flex flex-column position-static order-2 order-md-1"
                                initial={{ y: 100 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <br />
                                <strong className="d-inline-block mb-2 text-success fs-5">Mortgage Business Solutions</strong>
                                <h3 className="mb-0 fw-bold">Guiding Your Business Towards Excellence </h3>
                                <div className="mb-1 text-body-secondary fs-5">2024</div>
                                <br />
                                <p className="card-text mb-auto fs-5">
                                    <b className='text-primary'>Guiding Your Business Towards Excellence</b> our goal is to guide your business towards excellence through targeted strategies and expert advice. We work closely with you to understand your business goals and provide actionable insights to refine your operations and strategies. Whether you're looking to improve internal processes, expand into new markets, or enhance your customer experience.
                                </p>
                                <br />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home