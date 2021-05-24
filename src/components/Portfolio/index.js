import React from 'react';
import projects from '../../utils/portfolio.json';
import PortfolioItem from '../PortfolioItem';


function Portfolio(){
    return(
        <section className="about section-padding" id="about">
            <div className="container">
                <h1 className="my-5 text-center"><i className="far fa-file-code mr-5" />My Portfolio</h1>
                <div className="row">
                    {<PortfolioItem projects={projects} />}
                </div>
            </div>
        </section>
    );
   
}
export default Portfolio;



