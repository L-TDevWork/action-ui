import { useEffect, useRef, useState, type JSX } from "react";

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

    }, [location?.pathname]);

    const toggleNavDropDown = (name: string) => {
        if (!IsNavPanel) {
            const temp: TMenuItem[] = HomeDropDownOptions?.filter((item: TMenuItem) => {
                return (item?.parent == name);
            });

            setNavLinkMenus(temp);
        }

        switch (name) {
            case "home":
                (DropDownPanel.current as HTMLDivElement).style.right = "530px";
                break;
            default:
                (DropDownPanel.current as HTMLDivElement).style.right = "200px";
                break;
        }

        setIsNavPanel(!IsNavPanel);

    }

    const handleNavigation = () => {
        setIsNavPanel(false);
    }

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
                        <li><NavLink onClick={() => toggleNavDropDown("home")} to="#"><GetIcon iconName="bi bi-house" />&nbsp;<small>Home <i className="bi bi-chevron-down"></i></small></NavLink></li>
                        <li><NavLink to="#"><GetIcon iconName="bi bi-microsoft-teams" />&nbsp;<small>Meet the Team </small></NavLink></li>
                        <li><NavLink to="/"><GetIcon iconName="bi bi-journal-richtext" />&nbsp;<small>Stories</small></NavLink></li>
                        <li><NavLink onClick={() => toggleNavDropDown("involved")} to="#"><GetIcon iconName="bi bi-bezier" />&nbsp;<small>Get Involved <i className="bi bi-chevron-down"></i></small></NavLink></li>
                        <li><NavLink to="#"><GetIcon iconName="bi bi-collection-play-fill" />&nbsp;<small>Media Room </small></NavLink></li>
                    </ul>
                    <div className="app-btn-donate" style={{
                        marginTop: 10,
                        background: "#e61914",
                        borderRadius: 30,
                        padding: 8
                    }}>
                        <span className="text-xs text-white font-bold">Donate</span>
                    </div>

                    <div ref={DropDownPanel} className={`${IsNavPanel ? 'overlay-menu-indisplay overlay-menu' : 'overlay-menu'}`}>
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