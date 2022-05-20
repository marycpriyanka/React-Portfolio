import React from "react";

export default function ProjectImage({ project }) {
    return (
        <section id="project-img">
            <a href={project.demoUrl} target="-blank">
                <figure>
                    <img src={project.image} alt="Quiz-Hub" />
                    <figcaption>{project.title}</figcaption>
                </figure>
            </a>
        </section>
    );
}