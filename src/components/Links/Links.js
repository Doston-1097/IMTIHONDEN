import React from 'react';
import {NavLink} from "react-router-dom";
import LinksWrapper from "./LinksWrapper";

function Links(props) {
    const active=({isActive})=> ("nav-linke"+(isActive ? 'active nav-linke' : ""))

    return (
        <LinksWrapper>
            <div className=" d-flex linksD">
                    <NavLink className={active} to="/">Barchasini ko'rish/</NavLink>

                    <NavLink className={active} to="/add">qo'shish/</NavLink>

                    <NavLink className={active} to="/edit/:id">o'zgartirish/</NavLink>

                    <NavLink className={active} to="/delete/:id">o'chirish/</NavLink>
            </div>
        </LinksWrapper>
    );
}

export default Links;