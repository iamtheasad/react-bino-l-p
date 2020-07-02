import React, { Component, Fragment } from 'react';
import service_icon_1 from '../../assets/image/services/service_icon_1.png';
import service_icon_2 from '../../assets/image/services/service_icon_2.png';
import service_icon_3 from '../../assets/image/services/service_icon_3.png';

class Services extends Component {
   render() {
      return (
         <Fragment>
            {/* Our Services Start */}
            <section className="custom_width">
               <div className="services">
                  <div className="container-fluid">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="service_content">
                              <div className="service_content_tablecell">
                                 <h2>OUR SeRVICES</h2>
                                 <div className="service_text service_text_1">
                                    <h4>WEB DESIGN</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ip sum has been the industry's standard dummy text ever.</p>
                                 </div>
                                 <div className="service_text service_text_2">
                                    <h4>PRINT DESIGN</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ip sum has been the industry's standard dummy text ever.</p>
                                 </div>
                                 <div className="service_text service_text_3">
                                    <h4>PHOTOGRAPHY</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ip sum has been the industry's standard dummy text ever.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="service_bar_1 service_bar" />
                           <div className="service_bar_2 service_bar" />
                           <div className="service_bar_3 service_bar" />
                        </div>
                        <div className="col-md-6">
                           <div className="service_bg">
                              <div className="service_icon_1 service_icon">
                                 <a href="#"><img src={service_icon_1} alt="Service Icon" /></a>
                              </div>
                              <div className="service_icon_2 service_icon">
                                 <a href="#"><img src={service_icon_2} alt="Service Icon" /></a>
                              </div>
                              <div className="service_icon_3 service_icon">
                                 <a href="#"><img src={service_icon_3} alt="Service Icon" /></a>
                              </div>
                           </div>
                        </div>
                     </div>{/* row / */}
                  </div>{/* container-fluid / */}
               </div>{/* service_bg / */}
            </section>{/* Our Services End */}
         </Fragment>
      );
   }
}

export default Services;