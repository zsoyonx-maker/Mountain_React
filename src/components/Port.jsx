import React, { useEffect, useRef } from "react";
import { portText } from "../datas/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const horSection = sectionRef.current;

        let scrollTween = gsap.to(horSection, {
            xPercent: -100 * (horSection.length - 1),
            ease: "none",

            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,

                pin: true,
                scrub: 1,
                markers: true,

                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port_inner">
                <div className="port_title">Mountain Ranges</div>
                <div className="port_wrap">
                    {portText.map((port, key) => (
                        <article
                            className={`port_item p${key + 1}`}
                            key={key}
                            ref={(el) => (sectionRef.current[key] = el)}
                        >
                            <span className="num">{port.num}.</span>
                            <a className="img" href={port.code} target="_blank">
                                <img alt={port.name} src={port.img} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a className="site" href={port.view} target="_blank">
                                자세히 보기
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;
