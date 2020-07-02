import React, {Component, Fragment} from 'react';
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Testimonial from '../components/Testimonial/Testimonial';
import History from '../components/History/History';
import Services from '../components/Services/Services';


class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner/>
                <Testimonial/>
                <History/>
                <Services/>
            </Fragment>
        );
    }
}

export default HomePage;