import { useEffect, type JSX } from "react";

import { GetIcon } from "../icons/GetIcon";
import { NavLink, useLocation } from "react-router-dom";

import Logo from "../../../assets/images/actionaid-logo.png";

export const AppHeader: React.FC<{}> = (): JSX.Element => {
    const location = useLocation();

    useEffect(() => {

    }, [location?.pathname]);

    return <header>
        <div className="app-header">
            <div className="app-header-content">
                <div className="app-header-logo">
                    <span><img src={Logo} alt="logo" /></span>
                    <small></small>
                </div>
                <div className="mobile-menu-icon">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="app-header-menu" style={{ display: "flex" }}>
                    <ul>
                        <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>Home</small></NavLink></li>
                        <li><NavLink to="/"><GetIcon iconName="bi bi-microsoft-teams" />&nbsp;<small>Meet the Team <i className="bi bi-chevron-down"></i></small></NavLink></li>
                        <li><NavLink to="/"><GetIcon iconName="bi bi-journal-richtext" />&nbsp;<small>Stories</small></NavLink></li>
                        <li><NavLink to="#"><GetIcon iconName="bi bi-bezier" />&nbsp;<small>Get Involved <i className="bi bi-chevron-down"></i></small></NavLink></li>
                        <li><NavLink to="#"><GetIcon iconName="bi bi-collection-play-fill" />&nbsp;<small>Media Room <i className="bi bi-chevron-down"></i></small></NavLink></li>
                    </ul>
                    <div className="app-btn-donate" style={{
                        marginTop: 10,
                        background: "#e61914",
                        borderRadius: 30,
                        padding: 8
                    }}>
                        <span className="text-xs text-white font-bold">Donate</span>
                    </div>
                </div>
            </div>
        </div>
    </header >
}