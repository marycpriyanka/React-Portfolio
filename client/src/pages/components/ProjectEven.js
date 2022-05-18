import React from "react";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";

export default function ProjectEven({ project }) {
    return (
        <div class="project">
            <ProjectDescription project={project}></ProjectDescription>
            <ProjectImage project={project}></ProjectImage>  
        </div>
    );
}