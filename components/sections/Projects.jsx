import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="border-t border-border/60 py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="mb-12 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Selected Work
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Projects I&apos;ve built
                        </h2>

                        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                            A selection of applications and engineering projects spanning
                            full-stack development, AI, APIs, and modern web technologies.
                        </p>
                    </div>

                    <Button asChild variant="outline">
                        <Link href="#contact">
                            Let&apos;s work together
                            <ArrowUpRight />
                        </Link>
                    </Button>
                </div>

                {/* Project grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}