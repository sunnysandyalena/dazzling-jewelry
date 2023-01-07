import email from './email.png';
import phone from './phone.png';
import instagram from './instagram.png';

function Footer() {
    return (
        <div className='container-footer'>
            <div><img className='footer-icon' src = {email} alt = 'Email'/></div>
            <div><img className='footer-icon' src = {phone} alt = 'Phone'/></div>
            <div><img className='footer-icon' src = {instagram} alt = 'Instagram'/></div>
        </div>
    )
}
export default Footer;