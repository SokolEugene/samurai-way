import React from 'react';
import s from "./Preloader.module.css"
import preLoader from "../../images/preLoader.svg";

export const Preloader = () => {
    return (
        <div className={s.preLoader}><img src={preLoader} alt={'preLoader'}/></div>
    );
};

