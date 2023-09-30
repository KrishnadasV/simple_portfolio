import React from "react";
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";


export default function Testimonial(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    return (
        <div>
            <ScreenHeading
            title={'Testimonial'}
            subHeading={'What my client say about me'}
            />
            <section className="testimonial-section" id={props.id || ""}>

            </section>
        </div>
    )
}