import home from './home.png';
import email from './email.png';
import phone from './phone.png';
import instagram from './instagram.png';

function Footer() {
    return (
        <div className='container-footer'>
            <div><img src = {home} alt = 'Home Page' width = '40px'/></div>
            <div className='container-icons'>
                <div><img src = {email} alt = 'Email' width = '40px'/></div>
                <div><img src = {phone} alt = 'Phone' width = '40px'/></div>
                <div><img src = {instagram} alt = 'Instagram' width = '40px'/></div>
            </div>
        </div>
    )
}
export default Footer;