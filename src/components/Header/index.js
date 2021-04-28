import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Header(props) {
    
    const tabs = ['About', 'Portfolio', 'Contact'];
    
    
  
    return (
    <header className="flex-row px-1">
        <h2>
            <a href="/">
            Curtis Smith
            </a>
        </h2>
        <nav className="navbar navbar-expand-lg ">
            <ul className="nav nav-tabs">
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}>
                    <a
                        href={'#' + tab.toLowerCase()}
                        // Whenever a tab is clicked on,
                        // the current page is set through the handlePageChange props.
                        onClick={() => props.handlePageChange(tab)}
                        className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                        }
                    >
                        {tab}
                    </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
}

export default Header;