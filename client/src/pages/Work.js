import React from "react";
import ProjectEven from "./components/ProjectEven";
import ProjectOdd from "./components/ProjectOdd";

export default function Work(props) {
    return (
        <section id="work" className="section">
            <h2>My work</h2>
            {props.projects.map(project => project.id % 2 === 0 ? <ProjectEven key={project.id} project={project} /> : <ProjectOdd key={project.id} project={project} />)}
        </section>
    );
}