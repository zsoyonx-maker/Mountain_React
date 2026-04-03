import React from "react";
import { introText } from "../datas/data";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro_inner">
                <div className="intro_title">{introText.title}</div>
                <div className="intro_lines">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro_text">
                    <div className="text">
                        {introText.decs.map((item, key) => (
                            <div key={key}>{item}</div>
                        ))}
                    </div>
                    <div className="img">
                        <img src="assets/img/about.jpg" alt="" />
                    </div>
                </div>
                <div className="intro_lines bottom">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Intro;
