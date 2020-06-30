import React, {Component, Fragment} from 'react';
import OwlCarousel from 'react-owl-carousel';


class Testimonial extends Component {
    render() {
        return (
            <Fragment>
                {/* Testimonail Sart */}
                <section className="custom_width">
                    <div className="container">
                        <div className="row text-center">
                            <OwlCarousel
                                items={4}
                                loop={true}
                                nav={false}
                                dots={false}
                                autoplay={true}
                                margin={10}
                                className="testimonial_area">
                                <div className="col-md-33">
                                    <div className="testimonial_content">
                                        <div className="testimonial_icon">
                                            <span><i className="fas fa-glasses"/></span>
                                        </div>
                                        <h4>SLEEK DESIGN</h4>
                                        <div className="border_bar"/>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                                            Ipsum has
                                            been the industry.
                                        </p>
                                    </div>
                                    {/* testimonial_content / */}
                                </div>
                                {/* col / */}
                                <div className="col-md-33">
                                    <div className="testimonial_content">
                                        <div className="testimonial_icon">
                                            <span><i className="far fa-heart"/></span>
                                        </div>
                                        <h4>CLEAN CODE</h4>
                                        <div className="border_bar"/>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                                            Ipsum has
                                            been the industry.
                                        </p>
                                    </div>
                                    {/* testimonial_content / */}
                                </div>
                                {/* col / */}
                                <div className="col-md-33">
                                    <div className="testimonial_content">
                                        <div className="testimonial_icon">
                                            <span><i className="far fa-lightbulb"/></span>
                                        </div>
                                        <h4>CREATIVE IDEAS</h4>
                                        <div className="border_bar"/>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                                            Ipsum has
                                            been the industry.
                                        </p>
                                    </div>
                                    {/* testimonial_content / */}
                                </div>
                                {/* col / */}
                                <div className="col-md-33">
                                    <div className="testimonial_content">
                                        <div className="testimonial_icon">
                                            <span><i className="far fa-comment-alt"/></span>
                                        </div>
                                        <h4>FREE SUPPORT</h4>
                                        <div className="border_bar"/>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem
                                            Ipsum has
                                            been the industry.
                                        </p>
                                    </div>
                                    {/* testimonial_content / */}
                                </div>
                                {/* col / */}
                            </OwlCarousel>
                        </div>
                        {/* row / */}
                    </div>
                    {/* container / */}
                </section>
                {/* Testimonail End */}
            </Fragment>
        );
    }
}

export default Testimonial;