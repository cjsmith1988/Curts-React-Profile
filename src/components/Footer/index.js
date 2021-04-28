import React from 'react';

function Footer(){
    return(
        <section className="contact section-padding" id="contact">
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-12 text-center">
                        <ul className="social-links mt-2">
                            <li><a href="https://github.com/cjsmith1988" className="fab fa-github largeicon" target="_blank"></a>
                                <div className="col text-center text-dark">GitHub</div>
                            </li>
                            <li><a href="https://www.linkedin.com/in/Curtis-smith/" className="fab fa-linkedin largeicon" target="_blank"></a>
                                <div className="col text-center text-dark">LinkedIn</div>
                            </li>
                            
                        </ul>
                        <p className="text-dark">
                            <i className="fas fa-phone-alt mr-3" /><span className="mr-5">416-997-3360</span>
                            <i className="fas fa-envelope-open mr-3" /><span>cj1988333@hotmail.com</span>
                        </p>
                        <p className="copyright-text">Copyright &copy; 2021 Curtis Smith</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;