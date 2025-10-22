import { useEffect, useState, type JSX } from "react";

import { NavLink } from "react-router-dom";
import { GetIcon } from "../icons/GetIcon";
import FooterMapLogo from "../../../assets/images/footer-map.png";
import { useCountriesApis } from "../hooks/countries/useCountriesApis";
import { CountriesLinksList } from "../../../core/constants/Constants";

export const AppFooter: React.FC<{}> = (): JSX.Element => {
    const { getCountries } = useCountriesApis();

    const [CountriesList, setCountriesList] = useState<TCountry[]>([]);

    useEffect(() => {
        (async () => {
            const res: TCountry[] = await getCountries();

            res?.forEach((item: TCountry) => {
                const ifExist = CountriesLinksList?.find((el: { country: string, link: string }) => {
                    return el?.country?.indexOf(item?.name?.common) > -1
                });

                if (ifExist) {
                    item.name.link = ifExist?.link
                }
            });

            setCountriesList(res);

        })();
    }, []);

    const handleCountryChange = (_: string) => {
        // alert(value);
    }

    return <>
        <footer>
            <div className="footer-container">
                <div className="footer-content flex">
                    <div className="footer-section">
                        <h4>About Action Aid</h4>
                        <img src={FooterMapLogo} alt="map" />
                        <fieldset className="form-group">
                            <select onChange={(event: React.FormEvent<HTMLSelectElement>) => handleCountryChange((event?.target as HTMLSelectElement)?.value)} className="form-control" name="Country">
                                <optgroup>
                                    <option>Select Country</option>
                                    {CountriesList.map((country: TCountry, index: number) => {
                                        return <option key={index} value={country?.name?.link}>{country?.name?.common}</option>
                                    })}
                                </optgroup>
                            </select>
                        </fieldset>
                    </div>

                    <div className="footer-section">
                        <h4>Important Website Links</h4>
                        <div className="footer-links flex justify-between">
                            <ul className="w-[45%] m-2">
                                <li><NavLink to="/"><GetIcon iconName="bi bi-house" />&nbsp;<small>Home</small></NavLink></li>
                                <li><NavLink to="#"><GetIcon iconName="bi bi-file-break-fill" />&nbsp;<small>About Us</small></NavLink></li>
                                <li><NavLink to="/blog"><GetIcon iconName="bi bi-journal-album" />&nbsp;<small>Blog</small></NavLink></li>
                                <li><NavLink to="/stories"><GetIcon iconName="bi bi-journal-richtext" />&nbsp;<small>Stories</small></NavLink></li>
                                <li><NavLink to="#"><GetIcon iconName="bi bi-credit-card-2-back-fill" />&nbsp;<small>Donate</small></NavLink></li>
                                <li><NavLink to="#"><GetIcon iconName="bi bi-telephone-outbound-fill" />&nbsp;<small>Contact Us</small></NavLink></li>
                            </ul>
                            <ul className="w-[45%] m-2">
                                <li><NavLink to="/meet-the-team"><GetIcon iconName="bi bi-people-fill" />&nbsp;<small>Our Team</small></NavLink></li>
                                <li><NavLink to="/where-we-work"><GetIcon iconName="bi bi-buildings" />&nbsp;<small>Where We Work</small></NavLink></li>
                                <li><NavLink to="/where-we-work"><GetIcon iconName="bi bi-people-fill" />&nbsp;<small>Work With Us</small></NavLink></li>
                                <li><NavLink to="/press-release"><GetIcon iconName="bi bi-newspaper" />&nbsp;<small>Press Release</small></NavLink></li>
                                <li><NavLink to="/publications"><GetIcon iconName="bi bi-newspaper" />&nbsp;<small>Publications</small></NavLink></li>
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
                            <a style={{ color: "black" }} href="tel:087 980 7791">087 980 7791</a><br />
                            <a style={{ color: "black" }} href="mailto:supporters.za@actionaid.org">supporters.za@actionaid.org</a><br />
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