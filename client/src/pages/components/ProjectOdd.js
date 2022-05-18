import React from "react";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";

export default function ProjectOdd({ project }) {
    return (
        <div class="project">
            <ProjectImage project={project}></ProjectImage>
            <ProjectDescription project={project}></ProjectDescription>
        </div>
    );
}