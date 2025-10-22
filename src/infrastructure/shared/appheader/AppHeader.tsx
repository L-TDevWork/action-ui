import { useEffect, useRef, useState, type JSX } from "react";

import $ from "jquery";

import { GetIcon } from "../icons/GetIcon";
import { NavLink, useLocation } from "react-router-dom";

import Logo from "../../../assets/images/actionaid-logo.png";
import { HomeDropDownOptions } from "../../../core/constants/Constants";

export const AppHeader: React.FC<{}> = (): JSX.Element => {
    const location = useLocation();
    const DropDownPanel = useRef<HTMLDivElement>(null);

    const [IsNavPanel, setIsNavPanel] = useState<boolean>(false);
    const [NavLinkMenus, setNavLinkMenus] = useState<TMenuItem[]>([]);

    useEffect(() => {
        isMobileView() && $(".app-header-menu ul").slideUp(500);
    }, [location?.pathname]);


    useEffect(() => {
        if (!IsNavPanel)
            DropDownPanel?.current?.classList.remove(`overlay-menu-indisplay`);
        else
            DropDownPanel?.current?.classList.add(`overlay-menu-indisplay`);

    }, [IsNavPanel]);


    const toggleNavDropDown = (name: string) => {
        if (!DropDownPanel?.current?.classList?.contains(`pos-active-${name}`))
            DropDownPanel?.current?.classList.add(`pos-active-${name}`);
        else
            DropDownPanel?.current?.classList.remove(`pos-active-${name}`);

        if (!IsNavPanel) {
            const temp: TMenuItem[] = HomeDropDownOptions?.filter((item: TMenuItem) => {
                return (item?.parent == name);
            });

            setNavLinkMenus(temp);
        }

        const res = isMobileView();

        switch (name) {

            case "home":
                if (window.innerWidth > 1440)
                    (DropDownPanel.current as HTMLDivElement).style.right = "29%";

                if (res)
                    (DropDownPanel.current as HTMLDivElement).style.top = "120px !important";

                break;
            default:
                if (res) {
                    (document.querySelector("header .overlay-menu") as HTMLDivElement).style.top = "230px !important"
                }

                if (window.innerWidth > 1440)
                    (DropDownPanel.current as HTMLDivElement).style.right = "13%";
                break;
        }

        setIsNavPanel(!IsNavPanel);

    }

    const handleNavigation = () => {
        setIsNavPanel(false);
    }

    const toggleNavMenu = () => {
        $(".app-header-menu ul").slideToggle(500);
        $(".app-btn-donate").slideToggle();
    }

    const isMobileView = () => {
        return window.matchMedia("(max-width: 1024px)").matches; // Adjust max-width as needed for your definition of "mobile"
    }

    return <header>
        <div className="app-header">
            <div className="app-header-content">
                <div className="app-header-logo">
                    <span><img src={Logo} alt="logo" /></span>
                    <small></small>
                </div>
                <div className="mobile-menu-icon" onClick={toggleNavMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="app-header-menu" style={{ display: "flex" }}>
                    <ul>
                        <li><NavLink onClick={() => toggleNavDropDown("home")} to="/"><GetIcon iconName="bi bi-house" />&nbsp;<small>Home <i className="bi bi-chevron-down"></i></small></NavLink></li>
                        <li><NavLink to="/meet-the-team"><GetIcon iconName="bi bi-microsoft-teams" />&nbsp;<small>Meet the Team </small></NavLink></li>
                        <li><NavLink to="/stories"><GetIcon iconName="bi bi-journal-richtext" />&nbsp;<small>Stories</small></NavLink></li>
                        <li><NavLink onClick={() => toggleNavDropDown("involved")} to="#"><GetIcon iconName="bi bi-bezier" />&nbsp;<small>Get Involved <i className="bi bi-chevron-down"></i></small></NavLink></li>
                        <li><NavLink to="#"><GetIcon iconName="bi bi-collection-play-fill" />&nbsp;<small>Media Room </small></NavLink></li>
                        <div className="app-btn-donate" style={{
                            marginTop: "-10px",
                            background: "#e61914",
                            borderRadius: 30,
                            padding: 8
                        }}>
                            <span className="text-xs text-white font-bold">Donate</span>
                        </div>
                    </ul>

                    <div ref={DropDownPanel} className="overlay-menu">
                        <ul className="grid">
                            {NavLinkMenus.map((link: TMenuItem, index: number) => {
                                return <li
                                    key={index}><NavLink
                                        onClick={() => handleNavigation()}
                                        to={link.linkTo}><span className="link-container">
                                            <GetIcon iconName={link.icon} />&nbsp;&nbsp; {link.name}
                                        </span></NavLink></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header >
}