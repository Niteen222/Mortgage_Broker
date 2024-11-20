import React from 'react'
import about1 from "../About/about1.gif"
import about2 from "../About/about2.gif"
import about3 from "../About/about3.gif"
import about4 from "../About/about4.gif"

function About() {
    return (
        <>  
            <br />
            <br />
            <h1 className="mb-3 text-center fw-bold">About Us</h1>
            <div className='mx-4'>
                <br />
                <div class="row featurette align-items-center">
                    <div class="col-md-7">
                        <h1 class="featurette-heading fw-bold lh-1">Welcome to Luxury Mortgages</h1>
                        <br />
                        <p class="lead">We understand that purchasing a home or refinancing a mortgage is one of the most important financial decisions you’ll ever make. That's why we offer a premium experience tailored to the unique needs of high-end clients. Our services provide you with expert advice, quick and transparent processes, and exceptional customer support. With years of experience, we help you achieve your financial goals with the utmost professionalism and care.</p>
                    </div>
                    <div class="col-md-5">
                        <img src={about1} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded shadow-lg border" width="600" alt="" />

                    </div>
                </div>
                <br />
                <div class="row featurette align-items-center">
                    <div class="col-md-7 order-md-2">
                        <h1 class="featurette-heading fw-bold lh-1">Our Approach</h1>
                        <br />
                        <p class="lead">We specialize in providing personalized mortgage solutions tailored to meet the unique needs of our clients. Whether you're buying your first home, refinancing, or investing in property, our expert team is dedicated to helping you navigate the complex mortgage process. We offer a range of services, from finding competitive rates to securing financing for luxury properties, ensuring a smooth, stress-free experience at every stage.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                    <img src={about2} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded shadow-lg" width="600" alt="" />
                    </div>
                </div>
                <br />
                <div class="row featurette align-items-center">
                    <div class="col-md-7">
                        <h1 class="featurette-heading fw-bold lh-1">Elevated Client Experience</h1>
                        <br />
                        <p class="lead">We believe in delivering an exceptional client experience that mirrors the luxury of your home purchase. From the first consultation to closing, Mortgage Broker prioritizes transparency, clear communication, and customized strategies that meet your financial goals. Our team of experienced professionals is committed to providing you with expert advice, hassle-free support, and efficient solutions, ensuring your journey with us is as smooth and rewarding as possible.</p>
                    </div>
                    <div class="col-md-5">
                        <img src={about3} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded shadow-lg border" width="600" alt="" />

                    </div>
                </div>
                <br />
                <div class="row featurette align-items-center">
                    <div class="col-md-7 order-md-2">
                        <h1 class="featurette-heading fw-bold lh-1">Optimized UX Design for Maximum Conversions   </h1>
                        <br />
                        <p class="lead">At Mortgage Broker, we focus on user-centric design to help you capture more leads and improve conversion rates. By incorporating organized layouts, easy-to-navigate sections, and clear CTAs like “Get a Quote” and “Start Your Application,” we guide users through a seamless journey. With optimized forms that auto-format phone numbers and quick-to-fill fields, we ensure users experience a hassle-free process from start to finish. Our goal is to make your site as intuitive as it is visually appealing, turning visitors into loyal clients.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                    <img src={about4} class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded shadow-lg" width="600" alt="" />
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default About
