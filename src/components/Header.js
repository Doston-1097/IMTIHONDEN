import React from 'react';
import Links from "./Links/Links";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function Header(props) {
    return (
        <div className="head-tag">
            <div className="d-flex py-5 align-items-center justify-content-between" >
                <h2>Furniutr.</h2>
                <FontAwesomeIcon className="fs-3" icon={faSearch}/>
            </div>

            <Links/>

        </div>
    );
}

export default Header;