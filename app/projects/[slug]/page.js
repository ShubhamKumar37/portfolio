import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import ProjectDetails from "@/components/projects/ProjectDetails";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const project = projects.find((item) => item.id === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Projects`,
        description: project.description,
    };
}

export default async function ProjectDetailsPage({ params }) {
    const { slug } = await params;

    const project = projects.find((item) => item.id === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetails project={project} />;
}