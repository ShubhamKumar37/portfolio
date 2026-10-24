
import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    ExternalLink,
    Cake,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProjectHtml from "@/components/projects/ProjectHtml";
import { FaGithub } from "react-icons/fa";

function DetailSection({ id, eyebrow, title, children }) {
    if (!children) return null;

    return (
        <section id={id} className="border-b border-border/60 py-12 sm:py-16">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    {title}
                </h2>
            </div>

            {children}
        </section>
    );
}

export default function ProjectDetails({ project }) {
    const { details, links } = project;

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-border/60">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-40 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
                />

                <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
                    <Button asChild variant="ghost" className="mb-10 rounded-full">
                        <Link href="/#projects">
                            <ArrowLeft className="size-4" />
                            Back to projects
                        </Link>
                    </Button>

                    <div className="max-w-4xl">
                        <Badge variant="secondary" className="rounded-full px-3 py-1">
                            {project.category}
                        </Badge>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
                            {project.title}
                            <span className="text-primary">.</span>
                        </h1>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                            {project.tagline}
                        </p>

                        <p className="mt-4 text-sm text-muted-foreground">
                            Project duration: {project.duration}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {links.github && (
                                <Button asChild className="group rounded-full px-5">
                                    <a
                                        href={links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2"
                                    >
                                        <FaGithub className="size-4" />
                                        View source
                                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </Button>
                            )}

                            {links.live && (
                                <Button
                                    asChild
                                    variant="outline"
                                    className="group rounded-full px-5"
                                >
                                    <a
                                        href={links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2"
                                    >
                                        <ExternalLink className="size-4" />
                                        Live demo
                                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>

                    {project.technologies?.length > 0 && (
                        <div className="mt-10 border-t border-border/60 pt-6">
                            <p className="mb-3 text-sm font-medium text-muted-foreground">
                                Built with
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <Badge
                                        key={technology}
                                        variant="secondary"
                                        className="rounded-md px-3 py-1.5 font-normal"
                                    >
                                        {technology}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Rich project content */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <DetailSection
                    id="overview"
                    eyebrow="Overview"
                    title="What I built"
                >
                    <ProjectHtml html={details.overview} />
                </DetailSection>

                <DetailSection
                    id="features"
                    eyebrow="Features"
                    title="Key capabilities"
                >
                    <ProjectHtml html={details.features} />
                </DetailSection>

                <DetailSection
                    id="architecture"
                    eyebrow="Under the hood"
                    title="How it works"
                >
                    <ProjectHtml html={details.architecture} />
                </DetailSection>

                <DetailSection
                    id="challenges"
                    eyebrow="Engineering"
                    title="Challenges & solutions"
                >
                    <ProjectHtml html={details.challenges} />
                </DetailSection>

                <DetailSection
                    id="contribution"
                    eyebrow="My work"
                    title="My contribution"
                >
                    <ProjectHtml html={details.contribution} />
                </DetailSection>

                {details.gallery?.length > 0 && (
                    <DetailSection
                        id="gallery"
                        eyebrow="Visual tour"
                        title="Screenshots"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            {details.gallery.map((image) => (
                                <figure
                                    key={image.src}
                                    className="overflow-hidden rounded-2xl border border-border bg-card"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="aspect-video w-full object-cover"
                                    />

                                    {image.caption && (
                                        <figcaption className="p-4">
                                            <ProjectHtml html={image.caption} />
                                        </figcaption>
                                    )}
                                </figure>
                            ))}
                        </div>
                    </DetailSection>
                )}

                <section className="py-12 sm:py-16">
                    <Card className="border-border/70 bg-card/50">
                        <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Explore more of my work
                                </p>
                                <h2 className="mt-2 text-xl font-bold">
                                    More projects and engineering work
                                </h2>
                            </div>

                            <Button asChild variant="outline" className="group w-fit rounded-full">
                                <Link href="/#projects" className="inline-flex items-center gap-2">
                                    All projects
                                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    );
}
