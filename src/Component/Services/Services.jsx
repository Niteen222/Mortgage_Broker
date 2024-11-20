import React from 'react'
import service1 from "../Services/service1.gif"
import service2 from "../Services/service2.gif"
import service3 from "../Services/service3.gif"
import service4 from "../Services/service4.gif"
import service5 from "../Services/service5.gif"
import service6 from "../Services/service6.gif"

function Services() {
    return (
        <>
            <br />
            <br />
            <h1 className="mb-3 text-center fw-bold">Our Services</h1>
            <br />
            <br />  
            <div class="mx-4">
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7">
                        <h2 className="featurette-heading fw-bold lh-1">Web Design for Mortgage Brokers </h2>
                        <p className="lead fs-5">
                            Our luxury web design service focuses on creating visually stunning, modern, and professional websites for mortgage brokers. We prioritize clean layouts, intuitive navigation, and an aesthetic that reflects trust and sophistication. By integrating high-quality images, premium fonts, and a tailored color scheme, we ensure that every element on your site speaks to your high-end clientele. The result is a seamless user experience that builds confidence and drives conversions.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" width="650" height="500" src={service1} alt="" />
                    </div>
                </div>
                <br />
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-bold lh-1"> Responsive and User-Friendly Layouts </h2>
                        <p className="lead fs-5">
                            We specialize in building responsive websites that look flawless on any device. Whether your clients are browsing on desktops, tablets, or smartphones, our designs adapt to provide an optimal viewing experience. Our team ensures smooth navigation, quick load times, and easy-to-use forms, empowering visitors to engage with your services from any device. This mobile-first approach guarantees that you never lose a potential client, regardless of their browsing preferences.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" width="650" height="500" src={service2} alt="" />
                    </div>
                </div>
                <br />
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7">
                        <h2 className="featurette-heading fw-bold lh-1"> Visual Design with Interactive Elements</h2>
                        <p className="lead fs-5">
                            Elevate your mortgage broker website with stunning visual elements and subtle animations that enhance user interaction. We focus on luxury aesthetics with a color palette of deep blues, gold accents, and high-quality images. The design incorporates smooth hover effects, intuitive buttons, and call-to-action (CTA) features that make the experience feel polished and inviting. These interactive elements ensure that your site remains engaging while reflecting professionalism and sophistication.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" width="650" height="600" src={service3} alt="" />
                    </div>
                </div>
                <br />
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-bold lh-1"> Responsive and User-Friendly Layouts </h2>
                        <p className="lead fs-5">
                            We specialize in building responsive websites that look flawless on any device. Whether your clients are browsing on desktops, tablets, or smartphones, our designs adapt to provide an optimal viewing experience. Our team ensures smooth navigation, quick load times, and easy-to-use forms, empowering visitors to engage with your services from any device. This mobile-first approach guarantees that you never lose a potential client, regardless of their browsing preferences.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" width="650" height="500" src={service5} alt="" />
                    </div>
                </div>
                <br /> 
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7">
                        <h2 className="featurette-heading fw-bold lh-1"> Professional Aesthetic with Luxurious Appeal</h2>
                        <p className="lead fs-5">
                        We design websites that exude professionalism and elegance, tailored to attract high-end clients. By utilizing a refined color scheme with deep blues, greens, and gold accents, along with luxurious images of homes and happy clients, your website will immediately communicate trust and quality. Each visual element is carefully chosen to evoke a sense of luxury while ensuring readability and user-friendliness.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" width="650" height="600" src={service6} alt="" />
                    </div>
                </div>
                <br />
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-bold lh-1"> Responsive and User-Friendly Layouts </h2>
                        <p className="lead fs-5">
                            We specialize in building responsive websites that look flawless on any device. Whether your clients are browsing on desktops, tablets, or smartphones, our designs adapt to provide an optimal viewing experience. Our team ensures smooth navigation, quick load times, and easy-to-use forms, empowering visitors to engage with your services from any device. This mobile-first approach guarantees that you never lose a potential client, regardless of their browsing preferences.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" width="650" height="500" src={service4} alt="" />
                    </div>
                </div>
                <br /> 
            </div>
        </>
    )
}

export default Services