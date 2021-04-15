import React from 'react';
import footerLogo from './footer-logo.svg';

function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer-logo'><img src={footerLogo} /></div>
            <div>
                <ul className='footer-menu'>
                    <li>Партнерам</li>
                    <li>Разработчикам</li>
                    <li>Вакансии</li>
                </ul>
            </div>
            <div className='copyright'>ООО “интукод”, 2020г.</div>
        </div>
    );
}

export default Footer;