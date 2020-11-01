import React from 'react';
import "../Footer/Footer.css"

function Footer() {
    return (
            <div className="mainFooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            {/* Column 1 */}
                            <h4>Contact Us</h4>
                            <ul>
                                <li>Jesus DeLintt</li>
                                <li>Oliver Bigelow</li>
                                <li>Tim Hellman</li>
                                <li>Blake Lampkin</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            {/* Column 2 */}
                            <h4>Visit</h4>
                            <ul>
                                <li>1600 Pennsylvania Avenue NW<br></br>
                                Washington, DC 20500</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            {/* Column 3 */}
                            <h4>Follow</h4>
                            <ul>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Linkedin</li>
                                <li>Tik-Tok</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            {/* Column 4 */}
                            <h4>Legal</h4>
                            <ul>
                                <li>Terms</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                    {/* Footer Bottom */}
                    <div className="footerBottom">
                        <p className="col-md-12 text-center">
                            Peace of Mind &copy;{new Date().getFullYear()}  - All Rights Reserved
                        </p>
                    </div>
            </div>
    )
}

export default Footer;