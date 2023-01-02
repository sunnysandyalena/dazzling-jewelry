import Free from './Free';
import './App.css';
import email from './email.png';
import phone from './phone.png';
import instagram from './instagram.png';

function Contact() {
    return (
        <div>
            <div>
                <Free/>
            </div>
            <div className="container-contacts">
                <div className="contact-element">
                    <div>
                        <img className='contact-icon' src = {email} alt = 'Email'/>
                    </div> 
                    <div>
                        dazzling@gmail.com
                    </div>
                </div>
                <div className="contact-element">
                    <div>
                        <img className='contact-icon' src = {phone} alt = 'Phone'/> 
                    </div>
                    <div>
                        347-253-6454
                    </div>
                </div>
                <div className="contact-element">
                    <div>
                        <img className='contact-icon' src = {instagram} alt = 'Instagram'/>
                    </div>
                    <div>
                        dazzling-jewelry@instagram.com
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact;