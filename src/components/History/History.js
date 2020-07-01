import React, { Component, Fragment } from 'react';
import HistoryImage from '../../assets/image/history.png'

class History extends Component {
   render() {
      return (
         <Fragment>
            {/* Our History Start */}
            <section className="custom_width" id="history">
               <div className="container">
                  <div className="row history_height">
                     <div className="col-md-6">
                        <div className="history_img">
                           <img src={HistoryImage} alt="History Image" />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="history_text">
                           <h2>OUR HISTORY</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip sum has
                           been the industry's standard dummy text ever since the 1500s, when an unk- nown printer took
                           a galley of type and scrambled it to make a type specimen book.</p>
                           <br />
                           <br />
                           <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                           remaining essentially unchanged. It was popularised in the 1960s with the release of
                           Letraset sheets containing Lorem Ipsum passages, and more
                           recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                           Ipsum.</p>
                           <a href="#recent_work_section" className="history_btn">BROWSE OUR WORK</a>
                        </div>
                     </div>
                  </div>{/* row / */}
               </div>{/* container / */}
            </section>{/* Our History End */}
         </Fragment>
      )
   }
}

export default History;