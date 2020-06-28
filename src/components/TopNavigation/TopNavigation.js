import React, {Component, Fragment} from 'react';
import '../../assets/css/responsive.css';
import '../../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Logo from '../../assets/image/logo.png';

class TopNavigation extends Component {
    render() {
        return (
            <Fragment>
                {/* Menu Section Start */}
                <div className="custom_width">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-light menu_section">
                                    <div className="logo">
                                        <a className="navbar-brand" href="index.html">
                                            <img src={Logo} alt="Logo"/>
                                        </a>
                                    </div>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                                            aria-expanded="false" aria-label="Toggle navigation">
                  <span>
                    <i className="fas fa-bars" style={{color: '#fff', fontSize: '28px'}}/>
                  </span>
                                    </button>
                                    <div className="collapse navbar-collapse menu" id="navbarTogglerDemo02">
                                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="index.html">Home <span
                                                    className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#history">ABOUT US</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#recent_work_section">PORTFOLIO</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#bloc_section">BLOG</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#contact_section">CONTACT</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link" href="javascript:void(0)" id="navbarDropdown"
                                                   role="button" data-toggle="dropdown" aria-haspopup="true"
                                                   aria-expanded="false">
                                                    All Pages
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a className="dropdown-item" href="#history">History</a>
                                                    <a className="dropdown-item"
                                                       href="#recent_work_section">Portfolio</a>
                                                    <a className="dropdown-item" href="#bloc_section">Blog</a>
                                                    <a className="dropdown-item" href="#contact_section">CONTACT</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Menu Section End */}
            </Fragment>
        );
    }
}

export default TopNavigation;