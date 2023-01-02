import './App.css';
import Banner from './Banner';
import Free from './Free';
import Slides from './Slides';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <div className='container-main'>
                <div>
                    <Free/>
                </div>
                <div>
                    <Banner/>
                </div>
                <div>
                    <Slides/>
                </div>
            </div>
            <div>
                <hr className='line'/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Home;