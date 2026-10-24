import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
    return (
        <section
            id="projects"
            className="border-t border-border/60 py-20 sm:py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Selected Work
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Projects I&apos;ve built
                    </h2>

                    <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                        A selection of applications showcasing my work across full-stack
                        development, AI integrations, and software engineering.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}