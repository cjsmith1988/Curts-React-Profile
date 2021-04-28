
import React from 'react';
import resumePDF from '../../assets/Curtis Smith 2021.pdf';

function resume(){
    return(
        <section className="d-flex flex-column justify-content-center">
            <div className="container">
                <div className="row">
                    <h1 className="col-md-12">Skills</h1>
                    <div className="col-md-12">
                        <p>JavaScript, HTML, CSS, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express.js, React.js, GitHub.<br></br>
                        Azure Cloud Fundamentals Certification - AZ900</p>
                    </div>
                    <div className="col-md-12 mt-5">
                        <a className="btn btn-primary " href={resumePDF} target="_blank" download> Download Resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default resume;