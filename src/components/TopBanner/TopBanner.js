import React, {Component} from 'react';
import '../../assets/css/responsive.css';
import '../../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnchor} from "@fortawesome/free-solid-svg-icons";
import '../../assets/css/animate.min.css';



class TopBanner extends Component {

    render() {
        return (
            <>
                {/* Header Section Start */}
                <section className="custom_width">
                    <OwlCarousel items={1}
                                 loop={true}
                                 nav={true}
                                 dots={false}
                                 autoplay={true}
                                 animateIn={'bounceInRight'}
                                 animateOut={'bounceOutLeft'}
                                 navText={['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']}
                                 className="header_slider owl-carousel owl-theme">
                        <div className="single_slide_item header_bg_1">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-8 offset-xl-2 text-center">
                                        <div className="header_content">
                                            <h3>Our Clients Are Our First Priority</h3>
                                            <h1>WELCOME TO BINO</h1>
                                            <div className="header_bars">
                                                <div className="header_bar_1"/>
                                                <div className="header_bar_2"/>
                                                <div className="header_bar_3"/>
                                            </div>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an
                                                unknown printer took a galley of type and scrambled it to make a type
                                                specimen book.
                                            </p>
                                            <div className="header_btn">
                                                <a href="#">GET STARTED NOW</a>
                                                <a href="#">GET STARTED NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* For CSS Shape */}
                            <div className="header_section_shape"/>
                            {/* For Header Footer Icon */}
                            <div className="header_bottom_icon_bg"/>
                            <div className="header_bottom_icon">
                                <a href="https://asaduzzamanrana.com" target="_blank">
                                    <FontAwesomeIcon icon={faAnchor}/></a>
                            </div>
                        </div>
                        {/* single_slide_item / */}
                        <div className="single_slide_item header_bg_2">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-8 offset-xl-2 text-center">
                                        <div className="header_content">
                                            <h3>Our Clients Are Our First Priority</h3>
                                            <h1>WELCOME TO BINO</h1>
                                            <div className="header_bars">
                                                <div className="header_bar_1"/>
                                                <div className="header_bar_2"/>
                                                <div className="header_bar_3"/>
                                            </div>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an
                                                unknown printer took a galley of type and scrambled it to make a type
                                                specimen book.
                                            </p>
                                            <div className="header_btn">
                                                <a href="#">GET STARTED NOW</a>
                                                <a href="#">GET STARTED NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* For CSS Shape */}
                            <div className="header_section_shape"/>
                            {/* For Header Footer Icon */}
                            <div className="header_bottom_icon_bg"/>
                            <div className="header_bottom_icon">
                                <a href="https://asaduzzamanrana.com" target="_blank"><FontAwesomeIcon icon={faAnchor}/></a>
                            </div>
                        </div>
                        {/* single_slide_item / */}
                        <div className="single_slide_item header_bg_3">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-8 offset-xl-2 text-center">
                                        <div className="header_content">
                                            <h3>Our Clients Are Our First Priority</h3>
                                            <h1>WELCOME TO BINO</h1>
                                            <div className="header_bars">
                                                <div className="header_bar_1"/>
                                                <div className="header_bar_2"/>
                                                <div className="header_bar_3"/>
                                            </div>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an
                                                unknown printer took a galley of type and scrambled it to make a type
                                                specimen book.
                                            </p>
                                            <div className="header_btn">
                                                <a href="#">GET STARTED NOW</a>
                                                <a href="#">GET STARTED NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* For CSS Shape */}
                            <div className="header_section_shape"/>
                            {/* For Header Footer Icon */}
                            <div className="header_bottom_icon_bg"/>
                            <div className="header_bottom_icon">
                                <a href="https://asaduzzamanrana.com" target="_blank"><FontAwesomeIcon icon={faAnchor}/></a>
                            </div>
                        </div>
                        {/* single_slide_item / */}
                        <div className="single_slide_item header_bg_4">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-8 offset-xl-2 text-center">
                                        <div className="header_content">
                                            <h3>Our Clients Are Our First Priority</h3>
                                            <h1>WELCOME TO BINO</h1>
                                            <div className="header_bars">
                                                <div className="header_bar_1"/>
                                                <div className="header_bar_2"/>
                                                <div className="header_bar_3"/>
                                            </div>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an
                                                unknown printer took a galley of type and scrambled it to make a type
                                                specimen book.
                                            </p>
                                            <div className="header_btn">
                                                <a href="#">GET STARTED NOW</a>
                                                <a href="#">GET STARTED NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* For CSS Shape */}
                            <div className="header_section_shape"/>
                            {/* For Header Footer Icon */}
                            <div className="header_bottom_icon_bg"/>
                            <div className="header_bottom_icon">
                                <a href="https://asaduzzamanrana.com" target="_blank">
                                    <FontAwesomeIcon icon={faAnchor} className="fas fa-anchor"/></a>
                            </div>
                        </div>
                        {/* single_slide_item / */}
                        <div className="single_slide_item header_bg_5">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-8 offset-xl-2 text-center">
                                        <div className="header_content">
                                            <h3>Our Clients Are Our First Priority</h3>
                                            <h1>WELCOME TO BINO</h1>
                                            <div className="header_bars">
                                                <div className="header_bar_1"/>
                                                <div className="header_bar_2"/>
                                                <div className="header_bar_3"/>
                                            </div>
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an
                                                unknown printer took a galley of type and scrambled it to make a type
                                                specimen book.
                                            </p>
                                            <div className="header_btn">
                                                <a href="#">GET STARTED NOW</a>
                                                <a href="#">GET STARTED NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* For CSS Shape */}
                            <div className="header_section_shape"/>
                            {/* For Header Footer Icon */}
                            <div className="header_bottom_icon_bg"/>
                            <div className="header_bottom_icon">
                                <a href="https://asaduzzamanrana.com" target="_blank">
                                    <FontAwesomeIcon icon={faAnchor} className="fas fa-anchor"/></a>
                            </div>
                        </div>
                        {/* single_slide_item / */}
                    </OwlCarousel>
                    {/* header_slider / */}
                </section>
                {/* Header Section End */}
            </>
        );
    }
}

export default TopBanner;