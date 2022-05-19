import React from 'react';

export default function Resume({ skills }) {
    return (
        <section className="section">
            <h2>Skills</h2>
            <h3><a id="resume" href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:e64c6ad2-93d3-4e8b-861b-5124d57dbc7b"
                target="_blank" rel="noreferrer">View my Resume</a></h3>
            <div id="skillDiv">
                {skills.map(skill => <span id="skill">{skill}</span>)}
            </div>
        </section>
    );
}