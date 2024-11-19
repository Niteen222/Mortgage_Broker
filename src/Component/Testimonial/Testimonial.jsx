import React from "react";
import "../Testimonial/Testimonial.css";

const Testimonial = () => {
    return (
        <>
            <br />
            <br />
            <h1 className="mb-3 text-center fw-bold">Our Testimonials</h1>
            <br />
            <div className="mx-4">
                {/* Client */}
                <h2 className="text-center texts fw-bold ">What Our Clients Are Saying</h2>
                <br />
                <div className=" row align-items-md-stretch">
                    <div class="col-md-6 p-4">
                        <div class="h-100 shadow-lg p-4 mb-5 bg-body-tertiary rounded">
                            <div className="jonim">
                                <h3 className="texts fw-bold ">John D.</h3>
                                <h4><i class="fa-solid fa-quote-left texts fs-2"></i></h4>
                            </div>
                            <br />
                            <p className="fs-5">The design team exceeded our expectations! Our new website perfectly blends luxury with functionality. The user-friendly interface has made it easier for potential clients to connect with us. We’ve already seen a significant uptick in inquiries.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 p-4">
                        <div class="h-100 shadow-lg p-4 mb-5 bg-body-tertiary rounded">
                            <div className="jonim">
                                <h3 className="fw-bold">Sarah W.</h3>
                                <h4><i class="fa-solid fa-quote-left texts fs-2"></i></h4>
                            </div>
                            <br />
                            <p className="fs-5">Working with this team was a seamless experience. They truly understood our brand’s vision and delivered a high-quality website that is both professional and engaging. Our clients love the clean design, and the easy navigation makes it simple for them to take action.
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className=" row align-items-md-stretch">
                    <div class="col-md-6 p-4">
                        <div class="h-100 shadow-lg p-4 mb-5 bg-body-tertiary rounded">
                            <div className="jonim">
                                <h3 className="texts fw-bold ">Michael L</h3>
                                <h4><i class="fa-solid fa-quote-left texts fs-2"></i></h4>
                            </div>
                            <br />
                            <p className="fs-5">We couldn't be happier with the outcome. From the sleek design to the smooth user experience, everything about the site reflects our business values. The subtle animations and call-to-action buttons have helped us engage more visitors, turning them into clients.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 p-4">
                        <div class="h-100 shadow-lg p-4 mb-5 bg-body-tertiary rounded">
                            <div className="jonim">
                                <h3 className="fw-bold">Emily P.</h3>
                                <h4><i class="fa-solid fa-quote-left texts fs-2"></i></h4>
                            </div>
                            <br />
                            <p className="fs-5">The attention to detail was incredible. The site is not only visually appealing, but it's also optimized for conversions. Our client interactions have been more efficient, and the addition of a live chat widget has made a big difference in customer support."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="mx-4">
                <h2 className="texts fw-bold text-center">Success Stories from Our Clients </h2>
                <br />
                <ul className="list-unstyled">
                    <li>
                        <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                            <img src="https://i.pinimg.com/236x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg" className="bd-placeholder-img rounded"  height="206" alt="" />
                            <div className="col-lg-10.5">
                                <h4 className="mb-0 fw-bold">Michael R., CEO of Prestige Finance</h4>
                                <br />
                                <p className="fw-normal fs-5">Working with this team was a game-changer for our business. The design and layout of the site reflect the luxury of our brand, and the intuitive navigation has made it easier for clients to find what they need. We’ve experienced a noticeable uptick in conversions and overall satisfaction from both clients and partners.</p>
                                <small className="text-body-secondary fs-5">March 15, 2024</small>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                            <div className="col-lg-10.5">
                                <h4 className="mb-0 fw-bold">Sophala  D., Marketing Director at Elite Mortgages</h4>
                                <br />
                                <p className="fw-normal fs-5">Our new website has taken our online presence to the next level. The luxury design and user-focused experience have not only improved our brand perception but also contributed to a higher volume of inquiries and applications. It’s been a fantastic investment in the growth of our business.</p>
                                <small className="text-body-secondary fs-5">April 11, 2024</small>
                            </div>
                            <img src="https://i.pinimg.com/236x/a6/20/d9/a620d9be8577730521b30e0a12732599.jpg" className="bd-placeholder-img rounded"  height="206" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                            <img src="https://i.pinimg.com/236x/f8/2c/4b/f82c4b2767242d02de88d7f6d99796fb.jpg   " className="bd-placeholder-img rounded"  height="206" alt="" />
                            <div className="col-lg-10.5">
                                <h4 className="mb-0 fw-bold">Rebecca L., Sales Manager at Luxury Loan Solutions</h4>
                                <br />
                                <p className="fw-normal fs-5">The team delivered an exceptional design that perfectly captures the essence of our brand. The enhanced functionality and ease of use have made a significant difference in user experience. We’ve not only seen an increase in website traffic but also a higher number of qualified leads. We couldn’t be happier with the results.</p>
                                <small className="text-body-secondary fs-5">August 17, 2024</small>
                            </div>
                        </a>    
                    </li>
                    <li>
                        <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                            <div className="col-lg-10.5">
                                <h4 className="mb-0 fw-bold">James T., Founder of Platinum Lending</h4>
                                <br />
                                <p className="fw-normal fs-5">The website design exceeded our expectations. It is visually stunning, professional, and easy to navigate. Clients now have a seamless experience when accessing our mortgage services, and we've seen a direct increase in client engagement. This new look has definitely raised our credibility in the market</p>
                                <small className="text-body-secondary fs-5">August 21, 2024</small>
                            </div>
                            <img src="https://i.pinimg.com/236x/aa/4f/14/aa4f1494ba69f716fb92f0115a6c5fb4.jpg" className="bd-placeholder-img rounded"  height="206" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};


export default Testimonial;