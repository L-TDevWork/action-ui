import type { JSX } from "react";

import FooterMapLogo from "../../../assets/images/footer-map.png";
import { NavLink } from "react-router-dom";
import { GetIcon } from "../icons/GetIcon";

export const AppFooter: React.FC<{}> = (): JSX.Element => {
    return <>
        <footer>
            <div className="footer-container">
                <div className="footer-content flex">
                    <div className="footer-section">
                        <h4>About Action Aid</h4>
                        <img src={FooterMapLogo} alt="map" />
                        <fieldset className="form-group">
                            <select className="form-control" name="Country">
                                <optgroup>
                                    <option>Select Country</option>
                                    {[].map((country: TCountry, index: number) => {
                                        return <option key={index} value={country?.alpha2Code}>{country?.name}</option>
                                    })}
                                </optgroup>
                            </select>
                        </fieldset>
                    </div>

                    <div className="footer-section">
                        <h4>Important Website Links</h4>
                        <div className="footer-links flex justify-between">
                            <ul className="w-[45%] m-2">
                                <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>Home</small></NavLink></li>
                                <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>About Us</small></NavLink></li>
                                <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>Blog</small></NavLink></li>
                                <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>Stories</small></NavLink></li>
                                <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>Donate</small></NavLink></li>
                                <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>Contact Us</small></NavLink></li>
                            </ul>
                            <ul className="w-[45%] m-2">
                                <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>Vision & Mission</small></NavLink></li>
                                <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>Our Team</small></NavLink></li>
                                <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>Where We Work</small></NavLink></li>
                                <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>Work With Us</small></NavLink></li>
                                <li><NavLink to="/press-release"><GetIcon iconName="bi bi-house" />&nbsp;<small>Press Release</small></NavLink></li>
                                <li><NavLink to="/home"><GetIcon iconName="bi bi-house" />&nbsp;<small>Publications</small></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Get In Touch</h4>
                        <p className="p-2 text-sm text-white">
                            Action Aid<br />
                            Johannesburg<br />
                            10th Floor<br />
                            16 Baker St Jan, Rosebank<br />
                            2196<br />
                            087 980 7791<br />
                            supporters.za@actionaid.org<br />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyrights text-center">
            Copyright &copy; {new Date().getFullYear()} Action Aid. All Rights Reserved Designed by CenturyMinds
        </div>
    </>
}