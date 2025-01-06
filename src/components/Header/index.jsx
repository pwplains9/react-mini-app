import {Link, NavLink, Outlet} from 'react-router-dom';

import {useTranslation} from "react-i18next";
import {useState} from "react";
import SvgIcon from '../Ui/Icon.jsx';

const Header = () => {
    let {t, i18n} = useTranslation();

    return (<>
        <header className="header">
            <div className="header__container">
                <div className="header__left">
                  <div className="header__points">
                      <SvgIcon name={'point'}></SvgIcon>  50 Points
                  </div>
                </div>
                <div className="header__right">
                    <NavLink  to={'/help'}>
                        <SvgIcon name={'helper'}></SvgIcon>
                    </NavLink>
                    <NavLink  to={'/settings'}>
                        <SvgIcon name={'settings'}></SvgIcon>
                    </NavLink>

                </div>
            </div>
        </header>
    </>)
};

export default Header;
