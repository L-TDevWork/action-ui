import { useEffect, type JSX } from "react";

import SlideOne from "../../../assets/images/slide/slider-01.jpg";
import SlideTwo from "../../../assets/images/slide/slider-02.jpg";
import SlideFour from "../../../assets/images/slide/slider-04.jpg";
import SlideFive from "../../../assets/images/slide/slider-05.jpg";
import SlideThree from "../../../assets/images/slide/slider-03.jpg";
import { GetIcon } from "../icons/GetIcon";

export const SlideShow: React.FC<{}> = (): JSX.Element => {
    let SlideIndex: number = 0;

    useEffect(() => {
        showSlides();
    }, []);

    const showSlides = () => {
        const slides = Array.from(document.getElementsByClassName("mySlides"));

        for (let i = 0; i < slides.length; i++) {
            (slides[i] as HTMLDivElement).style.display = "none";
        }

        SlideIndex = SlideIndex + 1;

        if (SlideIndex > slides.length)
            SlideIndex = SlideIndex - slides.length;

        (slides[SlideIndex - 1] as HTMLDivElement).style.display = "block";

        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    return <>
        <div className="slideshow-container">
            <div className="mySlides fade" style={{ backgroundImage: `url(${SlideOne})` }}>
                <div className="numbertext">1 / 5</div>
                <div className="main-caption">
                    <h2>Our Right, Our Safety</h2>
                    <p>The Young Urban Women Movement (YUWM) has been at the forefront of shaping an economy that puts people first especially women.
                        Their voices are not just part of the conversation; they are driving the change!</p>
                    <br />
                    <div className="sponsor-smile" style={{
                        marginTop: 10,
                        background: "#e61914",
                        borderRadius: 30,
                        padding: 8
                    }}>
                        <span>Sponsor a Smile <GetIcon iconName="bi bi-chevron-right" /></span>
                    </div>
                </div>
            </div>

            <div className="mySlides fade" style={{ backgroundImage: `url(${SlideTwo})` }}>
                <div className="numbertext">2 / 5</div>
                <div className="main-caption">
                    <h2>Our Right, Our Safety</h2>
                    <p>The Young Urban Women Movement (YUWM) has been at the forefront of shaping an economy that puts people first especially women.
                        Their voices are not just part of the conversation; they are driving the change!</p>
                    <br />
                    <div className="sponsor-smile" style={{
                        marginTop: 10,
                        background: "#e61914",
                        borderRadius: 30,
                        padding: 8
                    }}>
                        <span>Sponsor a Smile <GetIcon iconName="bi bi-chevron-right" /></span>
                    </div>
                </div>
            </div>

            <div className="mySlides fade" style={{ backgroundImage: `url(${SlideThree})` }}>
                <div className="numbertext">3 / 5</div>
                <div className="main-caption">
                    <h2>Our Right, Our Safety</h2>
                    <p>The Young Urban Women Movement (YUWM) has been at the forefront of shaping an economy that puts people first especially women.
                        Their voices are not just part of the conversation; they are driving the change!</p>
                    <br />
                    <div className="sponsor-smile" style={{
                        marginTop: 10,
                        background: "#e61914",
                        borderRadius: 30,
                        padding: 8
                    }}>
                        <span>Sponsor a Smile <GetIcon iconName="bi bi-chevron-right" /></span>
                    </div>
                </div>
            </div>

            <div className="mySlides fade" style={{ backgroundImage: `url(${SlideFour})` }}>
                <div className="numbertext">4 / 5</div>
                <div className="main-caption">
                    <h2>Our Right, Our Safety</h2>
                    <p>The Young Urban Women Movement (YUWM) has been at the forefront of shaping an economy that puts people first especially women.
                        Their voices are not just part of the conversation; they are driving the change!</p>
                    <br />
                    <div className="sponsor-smile" style={{
                        marginTop: 10,
                        background: "#e61914",
                        borderRadius: 30,
                        padding: 8
                    }}>
                        <span>Sponsor a Smile <GetIcon iconName="bi bi-chevron-right" /></span>
                    </div>
                </div>
            </div>

            <div className="mySlides fade" style={{ backgroundImage: `url(${SlideFive})` }}>
                <div className="numbertext">5 / 5</div>
                <div className="main-caption">
                    <h2>Our Right, Our Safety</h2>
                    <p>The Young Urban Women Movement (YUWM) has been at the forefront of shaping an economy that puts people first especially women.
                        Their voices are not just part of the conversation; they are driving the change!</p>
                    <br />
                    <div className="sponsor-smile" style={{
                        marginTop: 10,
                        background: "#e61914",
                        borderRadius: 30,
                        padding: 8
                    }}>
                        <span>Sponsor a Smile <GetIcon iconName="bi bi-chevron-right" /></span>
                    </div>
                </div>
            </div>

            {/* <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
            <a className="next" onClick={() => plusSlides(1)}>❯</a> */}
        </div>
        <div className="text-center">
            {/* <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
            <span className="dot" onClick={() => currentSlide(4)}></span>
            <span className="dot" onClick={() => currentSlide(5)}></span> */}
        </div>
    </>

}