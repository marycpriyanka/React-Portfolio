import React, { useEffect } from 'react';
import $ from "jquery";

export default function Resume({ skills }) {
    useEffect(() => {
        let toggleSize = true;

        const interval = setInterval(animateSkills, 6000);

        // Adds a little animation
        function animateSkills() {
            if (toggleSize) {
                $(".skill").animate({ "padding": "1.5%" }, "slow");
                toggleSize = false;
            }
            else {
                $(".skill").animate({ "padding": "1%" }, "slow");
                toggleSize = true;
            }
        }
    }, [])

    return (
        <section className="section">
            <h3><a id="resume" href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:e64c6ad2-93d3-4e8b-861b-5124d57dbc7b"
                target="_blank" rel="noreferrer">Download my Resume</a></h3>
            <h2>Skills</h2>
            <div id="skillDiv">
                {skills.map(skill => <span className="skill">{skill}</span>)}
            </div>
        </section>
    );
}