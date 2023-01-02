import './App.css';
import bannerImg from './banner.png';

function Banner() {
    return (
        <div className='banner'>
            <img className='banner-img' src={bannerImg} alt = 'Banner'/>
            <div className='banner-message'>
                <h1>Made for dazzling moments</h1>
            </div>
        </div>
    )
}
export default Banner;