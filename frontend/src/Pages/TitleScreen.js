import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "animate.css/animate.min.css";
import "./TitleScreen.css";

function TitleScreen() {
    return (
        <div>
            <div className='titlescreen-title'>
                <ScrollAnimation animateIn='animate__fadeIn'>
                    <h1>
                        HourByHour:
                        <br />A new kind of scheduler.
                    </h1>
                </ScrollAnimation>
            </div>
            <div className='titlescreen-title-grid'>
                <div className='left-info'>
                    <ScrollAnimation
                        animateIn='animate__fadeInLeft'
                        animateOnce={true}
                    >
                        <h2>
                            HourByHour is a scheduler for spontaneous people.
                        </h2>
                        <ul>
                            <li>
                                Instead of focusing on the far future,
                                HourByHour allows you to focus on the present.
                            </li>
                            <li>
                                Plan out your current day through editing and
                                adding different events.
                            </li>
                            <li>Save your schedule by creating an account.</li>
                        </ul>
                    </ScrollAnimation>
                </div>
                <div className='right-info'>
                    <div className='topright-info'>
                        <ScrollAnimation
                            animateIn='animate__fadeInRight'
                            animateOnce={true}
                        >
                            <h3>Planning Your Day is Easy.</h3>
                            <ul>
                                <li>Add events for each hour of your day.</li>
                                <li>
                                    Your current event will be displayed on the
                                    main screen.
                                </li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                    <div className='bottomright-info'>
                        <ScrollAnimation
                            animateIn='animate__fadeInRight'
                            offset={-150}
                            animateOnce={true}
                        >
                            <h3>Simple Customizable Design.</h3>
                            <ul>
                                <li>
                                    Change the color and timing of different
                                    events.
                                </li>
                                <li>
                                    Your current event will be displayed on the
                                    main screen, filling the whole screen.
                                </li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className='titlescreen-bottom'>
                <p>
                    Made By Gregory Weber <br /> Check out this project's source
                    code on{" "}
                    <a
                        href='https://github.com/gregoryweber/hour-by-hour-public'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </div>
    );
}

export default TitleScreen;
