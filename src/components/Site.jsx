import React from "react";
import { siteText } from "../datas/data";

const Site = () => {
    return (
        <section id="site">
            <div class="site_inner">
                <h2 class="site_title">Great Mountains</h2>
                <div class="site_wrap">
                    {siteText.map((site, key) => (
                        <article class="site_item s1">
                            <span class="num">{key + 1}.</span>
                            <div class="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                            </div>
                            <h3 class="title">{site.title}</h3>
                            <div class="btn">
                                <a href="#">site</a>
                                <a href="#">view</a>
                            </div>
                            <div class="info">
                                {site.info.map((info, index) => (
                                    <span key={index}>{info}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Site;
